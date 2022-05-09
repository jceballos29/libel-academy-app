/** @format */

import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCourseFromWishlist, enrollCourse } from '../../../features/user/userSlice';
import path from '../../../routes/path';

const WishlistCard = ({ course }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card className='border-o shadow-sm position-relative'>
      {course.featured ? (
        <div className="feature_badge" >DESTACADO</div>
      ) : null}
      <Card.Img variant='top' src={course.images.common.url} />
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <hr />
        <div style={{ fontSize: 14 }}>
          <Card.Text as={Row} className='mb-0'>
            <Col>
              <span className='fw-bold' style={{ color: '#8c66ff' }}>
                Instructor:{' '}
              </span>
            </Col>
            <Col>
              <span className='text-muted'>
                {course.instructor.name}
              </span>
            </Col>
          </Card.Text>
          <Card.Text as={Row} className='mb-0'>
            <Col>
              <span className='fw-bold' style={{ color: '#8c66ff' }}>
                Nivel:{' '}
              </span>
            </Col>
            <Col>
              <span className='text-muted'>{course.level}</span>
            </Col>
          </Card.Text>
          <Card.Text as={Row} className='mb-0'>
            <Col>
              <span className='fw-bold' style={{ color: '#8c66ff' }}>
                Clases:{' '}
              </span>
            </Col>
            <Col>
              <span className='text-muted'>
                {course.totalLessons}
              </span>
            </Col>
          </Card.Text>
          <Card.Text as={Row} className='mb-0'>
            <Col>
              <span className='fw-bold' style={{ color: '#8c66ff' }}>
                Certificado:{' '}
              </span>
            </Col>
            <Col>
              <span className='text-muted'>
                {course.certificate ? 'Si' : 'No'}
              </span>
            </Col>
          </Card.Text>
          <Card.Text as={Row} className='mb-0'>
            <Col>
              <span className='fw-bold' style={{ color: '#8c66ff' }}>
                Precio:{' '}
              </span>
            </Col>
            <Col>
              <span className='text-muted'>
                {course.price === 0 ? 'Gratis' : `$ ${course.price}`}
              </span>
            </Col>
          </Card.Text>
          <Card.Text as={Row} className='mb-0'>
            <Col>
              <span className='fw-bold' style={{ color: '#8c66ff' }}>
                Idioma:{' '}
              </span>
            </Col>
            <Col>
              <span className='text-muted'>
                {course.language}
              </span>
            </Col>
          </Card.Text>
        </div>
        <hr />
        <div className='d-flex flex-column justify-content-center'>
          <Button size='sm' className='mb-2'
            onClick={() => {
              dispatch(enrollCourse(course._id));
            }}>
            INSCRIBIR CURSO
          </Button>
          <Button
            size='sm'
            className='mb-2'
            variant='secondary'
            onClick={() => {
              navigate(`${path.courses.home}/${course.slug}`);
            }}>
            IR AL CURSO
          </Button>
          <Button
            size='sm'
            variant='danger'
            onClick={() => {
              dispatch(removeCourseFromWishlist(course._id));
            }}>
            QUITAR DE MI LISTA DE DESEOS
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WishlistCard;
