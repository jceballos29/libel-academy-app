/** @format */

import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// import { IoHeartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import ReactPlayer from 'react-player';
import { completeLesson } from '../../../features/user/userSlice';

const LessonDetail = () => {
  const { lesson } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCourse } = useSelector((state) => state.courses);
  const [currentLesson, setCurrentLesson] = useState(null);

  useEffect(() => {
    if (currentCourse) {
      setCurrentLesson(
        currentCourse.modules
          .map((m) => m.lessons)
          .flat()
          .find((l) => l.order === parseInt(lesson))
      );
    }
  }, [currentCourse, lesson]);


  const handleVideoEnd = () => {
    dispatch(completeLesson({ courseId: currentCourse._id, lessonId: currentLesson._id }));
    if (currentLesson.order < currentCourse.totalLessons) {
      navigate(`/cursos/${currentCourse.slug}/clases/${currentLesson.order + 1}`);
    } else {
      navigate(`/cursos/${currentCourse.slug}`);
    }
  }

  return (
    <div className='courses__lessons__detail'>
      {!currentLesson ? (
        <Loading />
      ) : (
        <>
          <Row className='mb-3'>
            <Col>
              <Card className='border-0 shadow-sm overflow-hidden'>
                <Card.Body className='p-0'>
                  <div className='player-wrapper'>
                        <ReactPlayer
                          url={currentLesson.video}
                          className='react-player'
                          playing={true}
                          width='100%'
                          height='100%'
                          controls={true}
                          onEnded={handleVideoEnd}
                        />
                      </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col className='d-flex align-items-center justify-content-start'>
              <h2 className='mb-0'>
                {currentLesson.order}. {currentLesson.name}
              </h2>
            </Col>
            {/* <Col className='d-flex align-items-center justify-content-end'>
              <Button className='d-flex align-items-center justify-content-center'>
                <IoHeartOutline size={22} />
                <span>&nbsp;Me gusta</span>
              </Button>
            </Col> */}
          </Row>
          <Row>
            <Col>
              <p className='text-secondary mb-0'>
                {currentLesson.description}
              </p>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default LessonDetail;
