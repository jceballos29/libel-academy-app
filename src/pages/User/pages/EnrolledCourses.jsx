/** @format */

import React from 'react';
import { Button, Card, Col, Row, Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dropCourse } from '../../../features/user/userSlice';
import path from '../../../routes/path';

const EnrolledCourses = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='student__enrolled mt-3 mt-md-0'>
      <Row>
        <Col>
          <Card
            className='border shadow-sm mb-3'
            style={{ backgroundColor: '#ebe5ff' }}>
            <Card.Body>
              <Card.Title as='h2' className='fw-bold my-0'>
                Cursos Matriculados
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {user.enrolledCourses.length > 0 ? (
          <Col>
            <Tabs
              defaultActiveKey='process'
              variant='pills'
              className='mb-3'>
              <Tab eventKey='process' title='En proceso'>
                <Row>
                  {user.enrolledCourses.filter(
                    (enroll) => enroll.status === 'en proceso'
                  ).length > 0 ? (
                    user.enrolledCourses
                      .filter(
                        (enroll) => enroll.status === 'en proceso'
                      )
                      .map((enroll) => (
                        <Col key={enroll._id} md={4}>
                          <Card className='border-0 shadow-sm position-relative'>
                            {enroll.course.featured ? (
                              <div className='feature_badge'>
                                DESTACADO
                              </div>
                            ) : null}
                            <Card.Img
                              src={enroll.course.images.common.url}
                              variant='top'
                            />
                            <Card.Body>
                              <Card.Title as='h5'>
                                {enroll.course.name}
                              </Card.Title>
                              <Card.Text className='text-muted'>
                                <span className='text-primary'>
                                  {enroll.completeLessons.length}
                                </span>
                                &nbsp;de&nbsp;
                                <span>
                                  {enroll.course.totalLessons}
                                </span>
                                &nbsp;clases completadas
                              </Card.Text>
                              <div>
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
                                        (enroll.completeLessons
                                          .length *
                                          100) /
                                        enroll.course.totalLessons
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
                                  {(
                                    (enroll.completeLessons.length *
                                      100) /
                                    enroll.course.totalLessons
                                  ).toFixed(1)}
                                  % Completado
                                </p>
                              </div>
                              <hr />
                              <div className='d-flex flex-column justify-content-center'>
                                <Button
                                  size='sm'
                                  className='mb-2'
                                  onClick={() => {
                                    navigate(
                                      `${path.courses.home}/${enroll.course.slug}`
                                    );
                                  }}>
                                  IR AL CURSO
                                </Button>
                                <Button
                                  size='sm'
                                  variant='danger'
                                  onClick={() => {
                                    dispatch(
                                      dropCourse(enroll.course._id)
                                    );
                                  }}>
                                  ABANDONAR CURSO
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))
                  ) : (
                    <Col>
                      <h5>No hay cursos en proceso</h5>
                    </Col>
                  )}
                </Row>
              </Tab>
              <Tab eventKey='complete' title='Completados'>
                <Row>
                  {user.enrolledCourses.filter(
                    (enroll) => enroll.status === 'completado'
                  ).length > 0 ? (
                    user.enrolledCourses
                      .filter(
                        (enroll) => enroll.status === 'completado'
                      )
                      .map((complete) => (
                        <Col key={complete._id} md={4}>
                          <Card className='border-0 shadow-sm position-relative'>
                            {complete.course.featured ? (
                              <div className='feature_badge'>
                                DESTACADO
                              </div>
                            ) : null}
                            <Card.Img
                              src={complete.course.images.common.url}
                              variant='top'
                            />
                            <Card.Body>
                              <Card.Title as='h5'>
                                {complete.course.name}
                              </Card.Title>
                              <Card.Text className='text-muted'>
                                <span className='text-primary'>
                                  {complete.completeLessons.length}
                                </span>
                                &nbsp;de&nbsp;
                                <span>
                                  {complete.course.totalLessons}
                                </span>
                                &nbsp;clases completadas
                              </Card.Text>
                              <div>
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
                                        (complete.completeLessons
                                          .length *
                                          100) /
                                        complete.course.totalLessons
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
                                  {(complete.completeLessons.length *
                                    100) /
                                    complete.course.totalLessons}
                                  % Completado
                                </p>
                              </div>
                              {complete.course.certificate && (
                                <>
                                  <hr />
                                  <div className='d-flex flex-column justify-content-center'>
                                    <Button size='sm'>
                                      VER CERTIFICADO
                                    </Button>
                                  </div>
                                </>
                              )}
                            </Card.Body>
                          </Card>
                        </Col>
                      ))
                  ) : (
                    <Col>
                      <h5>No hay cursos completados</h5>
                    </Col>
                  )}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        ) : (
          <Col>
            <p>No tienes cursos matriculados</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default EnrolledCourses;
