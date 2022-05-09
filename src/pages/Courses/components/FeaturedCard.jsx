/** @format */

import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import {
  IoBookmark,
  IoBookmarkOutline,
  IoPerson,
  IoTime,
  IoFolderOpen,
  IoFlag,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  addCourseToWishlist,
  removeCourseFromWishlist,
} from '../../../features/user/userSlice';

const FeaturedCard = ({ course }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleWishlist = () => {
    if (
      user.wishlistCourses
        .map((wish) => wish._id)
        .includes(course._id)
    ) {
      dispatch(removeCourseFromWishlist(course._id));
      
    } else {
      dispatch(addCourseToWishlist(course._id));
    }
  };

  return (
    <div className='featured__card__container' style={{position: 'relative'}}>
       {user && user.enrolledCourses
        .filter((enroll) => enroll.status === 'completado')
        .map((enroll) =>
          enroll.course._id === course._id ? (
            <div key={'completado'} className='completed_badge'>COMPLETADO</div>
          ) : null
        )}
      {user && !user.enrolledCourses
              .map((enroll) => enroll.course._id)
              .includes(course._id) && (
        <button
          className='wish_button'
          style={{
            width: 60,
            height: 60,
            fontSize: 38,
            zIndex: 10,
            top: 10,
            right: 20,
          }}
          onClick={handleWishlist}>
          {user.wishlistCourses
            .map((wish) => wish._id)
            .includes(course._id) ? (
            <IoBookmark />
          ) : (
            <IoBookmarkOutline />
          )}
        </button>
      )}

      <Card
        as={Link}
        to={course.slug}
        className='featured__card shadow-sm border-0'>
         
        <Card.Img
          variant='top'
          src={course.images.featured.url}
          className='featured__card__background fluid'
        />
        <div className='featured__card__overlay'></div>
        <Card.Body className='featured__card__body text-light'>
          <Row className='w-100 mb-3'>
            <Col className='d-flex align-items-center justify-content-start'>
              <Image
                src={course.instructor.avatar.url}
                roundedCircle
                width={30}
                height={30}
                className='me-2'
              />
              <span className='fw-light text-light fw-light'>
                {course.instructor.name}
              </span>
            </Col>
            <Col
              xs={3}
              className='d-flex align-items-center justify-content-end'>
              <span className='fw-light text-light fw-light'>
                <IoPerson className='me-2 text-primary' />
                <span>{course.enrolledUsers.length}</span>
              </span>
            </Col>
          </Row>
          <Row className='w-100'>
            <Card.Title className='featured__course__title'>
              {course.name}
            </Card.Title>
            <Card.Text className='featured__course__price fw-bold'>
              {course.price === 0 ? 'Gratis' : `$${course.price}`}
            </Card.Text>
          </Row>
          <hr className='text-light w-100' />
          <Row className='w-100' style={{ fontSize: 12 }}>
            <Col className='d-flex align-items-center justify-content-start'>
              <IoFolderOpen className='me-1' />
              <span>{course.totalLessons} Clases</span>
            </Col>
            <Col className='d-flex align-items-center justify-content-center'>
              <IoTime className='me-1' />
              <span>
                {course.duration.hours}.
                {Math.floor((course.duration.minutes * 100) / 60)} Hrs
              </span>
            </Col>
            <Col className='d-flex align-items-center justify-content-end'>
              <IoFlag className='me-1' />
              <span>{course.level}</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeaturedCard;
