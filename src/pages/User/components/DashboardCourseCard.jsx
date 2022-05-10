/** @format */

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import path from '../../../routes/path';

const DashboardCourseCard = ({enroll}) => {

  const navigate = useNavigate()

  return (
    <Card className='border-0 shadow-sm mb-2 position-relative'>
      {enroll.course.featured ? (
        <div className="feature_badge" >DESTACADO</div>
      ) : null}
      <Card.Img src={enroll.course.images.common.url} variant='top' />
      <Card.Body>
        <Card.Title as='h5'>{enroll.course.name}</Card.Title>
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
                  (enroll.completeLessons.length * 100) /
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
            {((enroll.completeLessons.length * 100) /
              enroll.course.totalLessons).toFixed(1)}
            % Completado
          </p>
        </div>
        <hr />
        <div className='d-flex flex-column justify-content-center'>
          <Button
            size='sm'
            className='mb-2'
            onClick={() => {
              navigate(`${path.courses.home}/${enroll.course.slug}`);
            }}>
            IR AL CURSO
          </Button>
          <Button variant='secondary' size='sm' 
            onClick={() => {
              navigate(`${path.courses.home}/${enroll.course.slug}/clases/${enroll.currentLesson}`);
            }}>
            IR A LAS CLASES
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashboardCourseCard;
