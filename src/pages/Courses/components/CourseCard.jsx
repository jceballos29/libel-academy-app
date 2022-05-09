/** @format */

import React from 'react';
import { Card, Image } from 'react-bootstrap';
import {
  IoBookmark,
  IoBookmarkOutline,
  IoPerson,
  IoFolderOpen,
  IoFlag,
  // IoCart,
  IoArrowForward,
  IoSchool,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  addCourseToWishlist,
  removeCourseFromWishlist,
} from '../../../features/user/userSlice';

const CourseCard = ({ course }) => {
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
    <Card
      className='course__card border-0 shadow-sm'
      style={{ minHeight: 265 }}>
      {course.featured ? (
        <div className='feature_badge'>DESTACADO</div>
      ) : null}
      {user && user.enrolledCourses
        .filter((enroll) => enroll.status === 'completado')
        .map((enroll) =>
          enroll.course._id === course._id ? (
            <div key={'completado'} className='completed_badge'>COMPLETADO</div>
          ) : null
        )}
      {user &&
        !user.enrolledCourses
          .map((enroll) => enroll.course._id)
          .includes(course._id) && (
          <button className='wish_button' onClick={handleWishlist}>
            {user.wishlistCourses
              .map((wish) => wish._id)
              .includes(course._id) ? (
              <IoBookmark />
            ) : (
              <IoBookmarkOutline />
            )}
          </button>
        )}
      <Link to={course.slug}>
        <Card.Img variant='top' src={course.images.common.url} />
      </Link>
      <Card.Body className='course__card__body'>
        <Image
          src={course.instructor.avatar.url}
          className='course__card__instructor__avatar'
          roundedCircle
        />

        <div className='d-flex align-items-center justify-content-between mt-3 mb-3'>
          <span className='fw-light text-primary'>
            {course.instructor.name}
          </span>
          <div className='d-flex align-items-center justify-content-between'>
            <IoPerson className='me-1' style={{ color: '#a385ff' }} />
            <span className='fw-light text-muted'>
              {course.enrolledUsers.length}
            </span>
          </div>
        </div>
        <Card.Title className='course__card__name text-dark'>
          <Link to={course.slug}>{course.name}</Link>
        </Card.Title>
        <Card.Text className='course__card__price fw-bold'>
          {course.price === 0 ? 'Gratis' : `$ ${course.price}`}
        </Card.Text>
        <hr />
        <div className='course__card__details text-muted'>
          <span>
            <IoFolderOpen className='me-1' />
            <span>{course.totalLessons} Clases</span>
          </span>
          <span>
            <IoFlag className='me-1' />
            <span>{course.level}</span>
          </span>
        </div>
        {user && !user.enrolledCourses
        .filter((enroll) => enroll.status === 'completado').map(enroll => enroll.course._id).includes(course._id) && (
          <Link
            to={course.slug}
            className='course__card__enroll px-3'>
            {user.enrolledCourses
              .map((enroll) => enroll.course._id)
              .includes(course._id) ? (
              <>
                <span className='fw-bold'>CONTINUAR CURSO</span>
                <IoArrowForward className='ms-2 text-light' />
              </>
            ) : (
              <>
                <IoSchool className='me-2 text-light' />
                <span className='fw-bold'>INSCRIBIR CURSO</span>
              </>
            )}
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
