/** @format */

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { IoBook, IoSchool, IoTrophy } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import DashboardCourseCard from '../components/DashboardCourseCard';

const Dashboard = () => {
  
  const { user } = useSelector((state) => state.user);
  
  return (
    <div className='student__dashboard mt-3 mt-md-0'>
      <Row>
        <Col>
          <Card
            className='border shadow-sm mb-3'
            style={{ backgroundColor: '#ebe5ff' }}>
            <Card.Body>
              <Card.Title as='h2' className='fw-bold my-0'>
                Dashboard
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <Card className='border-0 shadow-sm mb-2'>
            <Card.Body>
              <Row>
                <Col
                  xs={4}
                  className='d-flex align-items-center justify-content-center'>
                  <div
                    className='shadow-sm rounded-circle d-flex align-items-center justify-content-center'
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#d1c2ff',
                      fontSize: 24,
                    }}>
                    <IoBook />
                  </div>
                </Col>
                <Col xs={8}>
                  <h2 className='text-grey-900 fw-bold text-end'>
                    {user?.enrolledCourses.length}
                  </h2>
                  <p className='text-uppercase fs-6 text-end text-muted fw-bold mb-0'>
                    Matriculados
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className='border-0 shadow-sm mb-2'>
            <Card.Body>
              <Row>
                <Col
                  xs={4}
                  className='d-flex align-items-center justify-content-center'>
                  <div
                    className='shadow-sm rounded-circle d-flex align-items-center justify-content-center'
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#d1c2ff',
                      fontSize: 24,
                    }}>
                    <IoSchool />
                  </div>
                </Col>
                <Col xs={8}>
                  <h2 className='text-grey-900 fw-bold text-end'>
                    {
                      user?.enrolledCourses.filter(
                        (course) => course.status === 'en proceso'
                      ).length
                    }
                  </h2>
                  <p className='text-uppercase fs-6 text-end text-muted fw-bold mb-0'>
                    Activos
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className='border-0 shadow-sm mb-2'>
            <Card.Body>
              <Row>
                <Col
                  xs={4}
                  className='d-flex align-items-center justify-content-center'>
                  <div
                    className='shadow-sm rounded-circle d-flex align-items-center justify-content-center'
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#d1c2ff',
                      fontSize: 24,
                    }}>
                    <IoTrophy />
                  </div>
                </Col>
                <Col xs={8}>
                  <h2 className='text-grey-900 fw-bold text-end'>
                    {
                      user?.enrolledCourses.filter(
                        (course) => course.status === 'completado'
                      ).length
                    }
                  </h2>
                  <p className='text-uppercase fs-6 text-end text-muted fw-bold mb-0'>
                    Completados
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <h3 className='mb-0'>Cursos en proceso</h3>
          <hr />
          <Row className='mt-4  '>
            {user?.enrolledCourses.filter(
              (course) => course.status === 'en proceso'
            ).length > 0 ? (
              user?.enrolledCourses
                .filter((course) => course.status === 'en proceso')
                .map((enroll) => (
                  <Col key={enroll._id} sm={12} md={4}>
                    <DashboardCourseCard enroll={enroll}/>
                  </Col>
                ))
            ) : (
              <Col>
                <h5>No tiene cursos en proceso</h5>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
