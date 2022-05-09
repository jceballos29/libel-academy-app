/** @format */

import '../../../styles/courses.scss';
import React, { Suspense, useEffect, useState } from 'react';
import {
  Card,
  Col,
  Container,
  Nav,
  Row,
} from 'react-bootstrap';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseBySlug } from '../../../features/courses/courseSlice';
import { handleTitlePage } from '../../../utils/handleTitlePage';

import { IoCheckmarkCircle, IoEllipseOutline } from 'react-icons/io5';
import Loading from '../../../components/Loading';

const Lessons = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentCourse, loading } = useSelector(
    (state) => state.courses
  );
  const { user } = useSelector((state) => state.user);

  const [enrollCourse, setEnrollCourse] = useState(null);

  useEffect(() => {
    if (slug) {
      if(user.enrolledCourses.map(enroll => enroll.course.slug).includes(slug)){

        dispatch(fetchCourseBySlug(slug));
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [dispatch, slug, user, navigate]);

  useEffect(() => {
    if (currentCourse) {
      handleTitlePage(currentCourse.name);
      setEnrollCourse(
        user.enrolledCourses.find(
          (enroll) => enroll.course._id === currentCourse._id
        )
      );
    }
  }, [currentCourse, user]);


  return (
    <div className='courses__lessons'>
      <Container className='py-4'>
        {loading ? (
          <Loading />
        ) : (
          <Row>
            {!currentCourse ? (
              <Col>
                <h1>Curso no encontrado</h1>
              </Col>
            ) : (
              <>
                <Col md={9}>
                  <Card className='border-0 shadow-sm mb-3'  style={{ backgroundColor: '#ebe5ff' }}>
                    <Card.Body>
                    <Card.Title as='h3' className="mb-0">
                        {currentCourse.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Suspense fallback={<div>Cargando...</div> }>
                    <Outlet />
                  </Suspense>

                </Col>
                <Col md={3} className="mt-3 mt-md-0">
                  <Card className='border-0 shadow-sm'>
                    <Card.Header
                      style={{ backgroundColor: '#ebe5ff' }}
                      className='border-0 border-bottom border-4 border-primary'>
                      <Card.Title as='h4'  className="mb-0">
                        Temario
                      </Card.Title>
                    </Card.Header>
                    <Card.Body
                      style={{ maxHeight: 600, overflow: 'auto' }}>
                      <div className='w-100 px-3 mb-3'>
                        {enrollCourse && (
                          <>
                            <div
                              className='w-100'
                              style={{
                                height: 6,
                                backgroundColor: '#adb5bd',
                                borderRadius: 3,
                                position: 'relative',
                              }}>
                              <span
                                style={{
                                  width: `${
                                    (enrollCourse.completeLessons
                                      .length *
                                      100) /
                                    enrollCourse.course.totalLessons
                                  }%`,
                                  height: 6,
                                  borderRadius: 3,
                                  backgroundColor: '#b499ff',
                                  position: 'absolute',
                                }}></span>
                            </div>
                            <p
                              className='text-muted text-end mt-2 mb-0'
                              style={{ fontSize: 12 }}>
                              {(enrollCourse.completeLessons.length *
                                100) /
                                enrollCourse.course.totalLessons}
                              % Completado
                            </p>
                          </>
                        )}
                      </div>
                      {[...currentCourse?.modules]
                        .sort((a, b) => a.order - b.order)
                        .map((m) => (
                          <Card key={m._id} className='mb-2'>
                            <Card.Header>
                              <Card.Title className='mb-0' as='h5'>
                                {m.name}
                              </Card.Title>
                            </Card.Header>
                            <Card.Body>
                              <Nav
                                className='flex-column'
                                variant='pills'>
                                {m.lessons.map((l) => (
                                  <Nav.Item key={l._id}>
                                    <Nav.Link as={NavLink}
                                      to={`/cursos/${currentCourse.slug}/clases/${l.order}`}
                                      className='d-flex align-items-center justify-content-between'>
                                      <span>
                                        {l.order}.&nbsp;
                                        {l.name}
                                      </span>
                                      {
                                        enrollCourse && enrollCourse.completeLessons.includes(l._id) ? (<IoCheckmarkCircle />) : (<IoEllipseOutline />)
                                      }
                                      
                                    </Nav.Link>
                                  </Nav.Item>
                                ))}
                              </Nav>
                            </Card.Body>
                          </Card>
                        ))}
                    </Card.Body>
                  </Card>
                  <Card className='border-0 shadow-sm mt-3'>
                    <Card.Header
                      style={{ backgroundColor: '#ebe5ff' }}
                      className='border-0 border-bottom border-4 border-primary'>
                      <Card.Title as='h4' className="mb-0">
                        Recursos
                      </Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {
                          currentCourse.attachment ? (<></>) : ('No hay recursos disponibles')
                        }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Lessons;
