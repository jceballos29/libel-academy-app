/** @format */

import '../../../styles/courses.scss';
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import {
  IoBookmarkOutline,
  IoCartOutline,
  IoChevronForwardCircleOutline,
  IoFlag,
  IoFolderOpen,
  IoLanguage,
  IoMedal,
  IoTime,
  // IoEllipse,
  IoEllipseOutline,
  IoCheckmark,
  IoCaretForward,
  IoShareSocial,
  IoStar,
  IoStarOutline,
  IoBookmark,
  IoCheckmarkCircle,
} from 'react-icons/io5';
// import ReactPlayer from 'react-player';
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchCourseBySlug } from '../../../features/courses/courseSlice';
import {
  addCourseToWishlist,
  removeCourseFromWishlist,
  enrollCourse,
} from '../../../features/user/userSlice';

import libel from '../../../images/libel-logo-dark.png';
import path from '../../../routes/path';
import { handleTitlePage } from '../../../utils/handleTitlePage';

import ShareCourseModal from '../components/ShareCourseModal';
import CreateReviewModal from '../components/CreateReviewModal';

import defaultProfilePicture from '../../../images/default-profile-picture.png';

const Course = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentCourse, loading } = useSelector(
    (state) => state.courses
  );
  const { user } = useSelector((state) => state.user);
  const [courseUrl, setCourseUrl] = useState(null);

  const handleWishlist = () => {
    if (
      user.wishlistCourses
        .map((wish) => wish._id)
        .includes(currentCourse._id)
    ) {
      dispatch(removeCourseFromWishlist(currentCourse._id));
    } else {
      dispatch(addCourseToWishlist(currentCourse._id));
    }
  };

  const [showShared, setShowShared] = useState(false);
  const handleCloseShared = () => setShowShared(false);
  const handleShowShared = () => setShowShared(true);

  const [showReview, setShowReview] = useState(false);
  const handleCloseReview = () => setShowReview(false);
  const handleShowReview = () => setShowReview(true);

  useEffect(() => {
    if (slug) {
      dispatch(fetchCourseBySlug(slug));
      setCourseUrl(document.location.href);
    }
  }, [slug, dispatch]);

  useEffect(() => {
    if (currentCourse) {
      handleTitlePage(currentCourse.name);
    }
  }, [currentCourse]);

  return (
    <div className='course'>
      <Container>
        {loading ? (
          <Row>
            <Col
              className='d-flex align-items-center justify-content-center'
              style={{
                width: '100%',
                height: 'calc(100vh - 65px)',
              }}>
              <Image src={libel} alt='Libel' fluid />
            </Col>
          </Row>
        ) : (
          <div className='course__content text-dark pt-3'>
            {!currentCourse ? (
              <Row>
                <Col>
                  <h1>Curso no encontrado</h1>
                </Col>
              </Row>
            ) : (
              <>
                <ShareCourseModal
                  show={showShared}
                  onHide={handleCloseShared}
                  name={currentCourse.name}
                  url={courseUrl}
                />
                {user && (
                  <CreateReviewModal
                    show={showReview}
                    onHide={handleCloseReview}
                    courseId={currentCourse._id}
                  />
                )}
                <Row className='mb-2 mb-lg-4'>
                  <Col xs={12} lg={8}>
                    <h1>{currentCourse.name}</h1>
                  </Col>
                  <Col
                    xs={12}
                    lg={4}
                    className='d-flex align-items-end justify-content-lg-end'>
                    {currentCourse?.price === 0 ? (
                      <h2 className='lh-1'>Gratis</h2>
                    ) : (
                      <h2 className='lh-1'>
                        $ {currentCourse.price}
                      </h2>
                    )}
                  </Col>
                </Row>

                <Row className='mb-3 justify-content-end'>
                    <Col>
                  {currentCourse?.featured && (
                      <span className='featured__course__badge me-2'>
                        DESTACADO
                      </span>
                  )}
                  {
                    user && user.enrolledCourses
                    .filter((enroll) => enroll.status === 'completado').map(enroll => enroll.course._id).includes(currentCourse._id) && (
                      <span className='completed__course__badge me-2'>
                        COMPLETADO
                      </span>
                    )
                  }
                    </Col>
                  <Col className='d-flex flex-column align-items-end justify-content-start justify-content-md-end text-start text-md-end'>
                    <div style={{ color: '#ffc107' }}>
                      {currentCourse?.reviews.length > 0 ? (
                        <>
                          {Array(
                            Math.floor(
                              currentCourse?.reviews.reduce(
                                (acc, review) => acc + review.rating,
                                0
                              ) / currentCourse?.reviews.length
                            )
                          )
                            .fill(0)
                            .map((_, index) => (
                              <IoStar
                                key={index}
                                size={20}
                                style={{ margin: '0px 2px' }}
                              />
                            ))}
                          {Array(
                            Math.ceil(
                              5 -
                                currentCourse?.reviews.reduce(
                                  (acc, review) =>
                                    acc + review.rating,
                                  0
                                ) /
                                  currentCourse?.reviews.length
                            )
                          )
                            .fill(0)
                            .map((_, index) => (
                              <IoStarOutline
                                key={index}
                                size={20}
                                style={{ margin: '0px 2px' }}
                              />
                            ))}
                        </>
                      ) : (
                        Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <IoStarOutline
                              key={index}
                              size={20}
                              style={{ margin: '0px 2px' }}
                            />
                          ))
                      )}
                    </div>

                    <span>
                      {currentCourse?.reviews.length}{' '}
                      {currentCourse?.reviews.length === 1
                        ? 'Reseña'
                        : 'Reseñas'}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={2}>
                    <span className='fw-light text-secondary'>
                      Nivel
                    </span>
                    <span className='d-block mb-0'>
                      {currentCourse?.level}
                    </span>
                  </Col>
                  <Col xs={4} md={2}>
                    <span className='fw-light text-secondary'>
                      Duración
                    </span>
                    <span className='d-block mb-0'>
                      {currentCourse?.duration?.hours} h &nbsp;
                      {currentCourse?.duration?.minutes} m
                    </span>
                  </Col>
                  <Col xs={4} md={2}>
                    <span className='fw-light text-secondary'>
                      Clases
                    </span>
                    <span className='d-block mb-0'>
                      {currentCourse?.totalLessons}
                    </span>
                  </Col>

                  <Col
                    xs={12}
                    lg={6}
                    className='d-flex align-items-center justify-content-between justify-content-lg-end mt-3 mt-lg-0'>
                    {user &&
                    user.enrolledCourses
                      .map((enroll) => enroll.course._id)
                      .includes(currentCourse._id) ? (
                      <Button
                        className='mx-1 fw-bold'
                        style={{ height: 40 }}
                        onClick={() => {
                          navigate(
                            `/cursos/${currentCourse.slug}/clases/${
                              user.enrolledCourses.filter(
                                (enroll) =>
                                  enroll.course._id ===
                                  currentCourse._id
                              )[0].currentLesson ? (user.enrolledCourses.filter(
                                (enroll) =>
                                  enroll.course._id ===
                                  currentCourse._id
                              )[0].currentLesson ) : (1)
                            }`
                          );
                        }}>
                        IR A LAS CLASES
                      </Button>
                    ) : (
                      <>
                        {currentCourse?.price === 0 ? (
                          <>
                            <Button
                              className='mx-1 fw-bold'
                              style={{ height: 40 }}
                              onClick={() => {
                                if (user) {
                                  dispatch(
                                    enrollCourse(currentCourse._id)
                                  );
                                } else {
                                  navigate(path.login, {
                                    state: {
                                      redirect: `${path.courses.home}/${currentCourse.slug}`,
                                    },
                                  });
                                }
                              }}>
                              AÑADIR CURSO
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              className='mx-1 fw-bold'
                              style={{ height: 40 }}
                              onClick={() => {
                                if (user) {
                                  navigate(path.courses.home);
                                } else {
                                  navigate(path.login, {
                                    state: {
                                      redirect: `${path.courses.home}/${currentCourse.slug}`,
                                    },
                                  });
                                }
                              }}>
                              COMPRAR AHORA
                            </Button>
                          </>
                        )}

                        {user && (
                          <div>
                            {currentCourse.price > 0 && (
                              <Button variant='dark' className='mx-1'>
                                <IoCartOutline
                                  style={{ fontSize: 24 }}
                                />
                              </Button>
                            )}
                            <Button
                              variant='secondary'
                              className='mx-1'
                              onClick={handleWishlist}>
                              {user.wishlistCourses
                                .map((wish) => wish._id)
                                .includes(currentCourse._id) ? (
                                <IoBookmark
                                  style={{ fontSize: 24 }}
                                />
                              ) : (
                                <IoBookmarkOutline
                                  style={{ fontSize: 24 }}
                                />
                              )}
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  </Col>
                </Row>
                <Row className='my-5 text-light'>
                  <Col>
                    <Card
                      className='border-0 shadow-sm'
                      style={{
                        overflow: 'hidden',
                        borderRadius: 10,
                      }}>
                      <div
                        className='player-wrapper'
                        style={{ backgroundColor: 'black' }}>
                        {/* <ReactPlayer
                          url={currentCourse?.trailer}
                          className='react-player'
                          playing={true}
                          width='100%'
                          height='100%'
                          controls={true}
                        /> */}
                      </div>
                    </Card>
                  </Col>
                </Row>

                <Row className='justify-content-between px-lg-3'>
                  <Col xs={12} lg={8}>
                    <h3 className='mb-3'>Acerca del Curso</h3>
                    <hr />
                    {/* Description */}
                    <Row className='mb-4'>
                      <Col>
                        <Card className='border-0 shadow-sm'>
                          <Card.Body>
                            <h5 className='mb-3'>Descripción</h5>
                            <p>{currentCourse?.description}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    {/* What you Learn */}
                    <Row className='mb-4'>
                      <Col>
                        <Card className='border-0 shadow-sm'>
                          <Card.Body>
                            <h5 className='mb-3'>¿Qué aprenderás?</h5>
                            <p>{currentCourse?.whatYouLearn}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    {/* Materials and Requirements */}
                    <Row className='mb-4'>
                      <Col md={6}>
                        <Card className='border-0 shadow-sm'>
                          <Card.Body>
                            <h5 className='mb-3'>
                              Materiales Incluidos
                            </h5>
                            <Row className='ps-2'>
                              {currentCourse?.materials.map(
                                (material) => (
                                  <Row
                                    key={material}
                                    className='mb-2'>
                                    <Col xs={1}>
                                      <IoChevronForwardCircleOutline
                                        style={{
                                          color: '#a385ff',
                                          fontSize: 20,
                                        }}
                                      />
                                    </Col>
                                    <Col xs={11}>
                                      <Card.Text className='text-secondary'>
                                        {material}
                                      </Card.Text>
                                    </Col>
                                  </Row>
                                )
                              )}
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card className='border-0 shadow-sm'>
                          <Card.Body>
                            <h5 className='mb-3'>Requisitos</h5>
                            <Row className='ps-2'>
                              {currentCourse?.requirements.map(
                                (requirement) => (
                                  <Row
                                    key={requirement}
                                    className='mb-2'>
                                    <Col xs={1}>
                                      <IoCaretForward
                                        style={{
                                          color: '#a385ff',
                                          fontSize: 20,
                                        }}
                                      />
                                    </Col>
                                    <Col xs={11}>
                                      <Card.Text className='text-secondary'>
                                        {requirement}
                                      </Card.Text>
                                    </Col>
                                  </Row>
                                )
                              )}
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    {/* Who should take */}
                    <Row className='mb-4'>
                      <Col>
                        <Card className='border-0 shadow-sm'>
                          <Card.Body>
                            <h5 className='mb-3'>
                              ¿Quién puede tomar el curso?
                            </h5>
                            <Row className='ps-2'>
                              {currentCourse?.whoShouldTake.map(
                                (item) => (
                                  <Row key={item}>
                                    <Col xs={1}>
                                      <IoCheckmark
                                        style={{
                                          color: '#a385ff',
                                          fontSize: 20,
                                        }}
                                      />
                                    </Col>
                                    <Col xs={11}>
                                      <Card.Text className='text-secondary'>
                                        {item}
                                      </Card.Text>
                                    </Col>
                                  </Row>
                                )
                              )}
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    {/* Content */}
                    <Row className='mb-4'>
                      <Col>
                        <h3 className='mb-3'>Contenido</h3>
                        <hr />
                        {[...currentCourse?.modules]
                          .sort((a, b) => a.order - b.order)
                          .map((m) => (
                            <Accordion
                              key={m._id}
                              className='border-0 shadow-sm mb-2'>
                              <Accordion.Header>
                                {m.order}. {m.name}
                              </Accordion.Header>
                              <Accordion.Body className='p-0 pt-2'>
                                {m?.lessons.map((lesson) => (
                                  <Card
                                    key={lesson._id}
                                    className='mb-2'>
                                    <Card.Body className='p-2 d-flex flex-row align-items-center justify-content-between'>
                                      <div className='d-flex'>
                                        <Card.Img
                                          src={
                                            currentCourse?.images
                                              .common.url
                                          }
                                          style={{
                                            height: 60,
                                            width: 'auto',
                                            objectFit: 'cover',
                                          }}
                                          className='fluid me-3'
                                        />
                                        <div className='d-flex flex-column align-items-start justify-content-center'>
                                          <Card.Title
                                            style={{ fontSize: 18 }}>
                                            <Link to={path.home}>
                                              {lesson.name}
                                            </Link>
                                          </Card.Title>
                                          <Card.Subtitle
                                            className='text-muted'
                                            style={{ fontSize: 14 }}>
                                            {lesson.duration}
                                            <span className='fw-light d-none d-md-inline'>
                                              {' '}
                                              - {lesson.description}
                                            </span>
                                          </Card.Subtitle>
                                        </div>
                                      </div>
                                      {user &&
                                        user.enrolledCourses
                                          .map(
                                            (enroll) =>
                                              enroll.course._id
                                          )
                                          .includes(
                                            currentCourse._id
                                          ) && (
                                          <span
                                            className='justify-self-end me-3 fs-3'
                                            style={{
                                              color: '#a385ff',
                                            }}>
                                            {user.enrolledCourses
                                              .filter(
                                                (enroll) =>
                                                  enroll.course
                                                    ._id ===
                                                  currentCourse._id
                                              )[0]
                                              .completeLessons.includes(
                                                lesson._id.toString()
                                              ) ? (
                                              <IoCheckmarkCircle />
                                            ) : (
                                              <IoEllipseOutline />
                                            )}
                                          </span>
                                        )}
                                    </Card.Body>
                                  </Card>
                                ))}
                              </Accordion.Body>
                            </Accordion>
                          ))}
                      </Col>
                    </Row>
                    {/* Instructor */}
                    <Row className='mb-4'>
                      <Col>
                        <h3 className='mb-3'>Instructor</h3>
                        <hr />
                        <Card
                          className='border-0 shadow-sm'
                          style={{
                            overflow: 'hidden',
                          }}>
                          <Card.Body>
                            <Row>
                              <Col
                                md={4}
                                className='px-0 d-flex align-items-center justify-content-evenly'>
                                <Image
                                  src={
                                    currentCourse.instructor.avatar
                                      .url
                                  }
                                  className='px-0 fluid'
                                  width={60}
                                  height={60}
                                  roundedCircle
                                  style={{
                                    objectFit: 'cover',
                                  }}
                                />
                                <div>
                                  <Card.Title as='h5'>
                                    {currentCourse.instructor?.name}
                                  </Card.Title>
                                  <Card.Text
                                    className='text-muted mb-0'
                                    style={{ fontSize: 14 }}>
                                    {
                                      currentCourse.instructor
                                        ?.courses.length
                                    }
                                    &nbsp;
                                    {currentCourse.instructor?.courses
                                      .length === 1
                                      ? 'Curso'
                                      : 'Cursos'}
                                  </Card.Text>
                                </div>
                              </Col>
                              <Col
                                md={8}
                                className='d-flex align-items-center justify-content-evenly'>
                                <Card.Text className='fst-italic fw-light text-secondary'>
                                  {currentCourse.instructor?.phrase}
                                </Card.Text>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} lg={4} className='ps-lg-4 ps-xl-5'>
                    <Card
                      className='mb-2 border-0 shadow-sm'
                      style={{
                        overflow: 'hidden',
                        // borderRadius: 10,
                      }}>
                      <Card.Body className='d-flex align-items-center'>
                        <div
                          className='d-flex align-items-center justify-content-center  text-primary'
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#d1c2ff',
                            borderRadius: '50%',
                            marginRight: 10,
                          }}>
                          <IoTime style={{ fontSize: 20 }} />
                        </div>
                        <Card.Title as='h6' className='mb-0'>
                          Duración
                        </Card.Title>
                        <Card.Text className='text-muted mb-0 ms-auto'>
                          {currentCourse?.duration.hours}h &nbsp;
                          {currentCourse?.duration.minutes}m
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card
                      className='mb-2 border-0 shadow-sm'
                      style={{
                        overflow: 'hidden',
                        // borderRadius: 10,
                      }}>
                      <Card.Body className='d-flex align-items-center'>
                        <div
                          className='d-flex align-items-center justify-content-center  text-primary'
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#d1c2ff',
                            borderRadius: '50%',
                            marginRight: 10,
                          }}>
                          <IoFolderOpen style={{ fontSize: 20 }} />
                        </div>
                        <Card.Title as='h6' className='mb-0'>
                          Clases
                        </Card.Title>
                        <Card.Text className='text-muted mb-0 ms-auto'>
                          {currentCourse?.totalLessons}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card
                      className='mb-2 border-0 shadow-sm'
                      style={{
                        overflow: 'hidden',
                      }}>
                      <Card.Body className='d-flex align-items-center'>
                        <div
                          className='d-flex align-items-center justify-content-center  text-primary'
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#d1c2ff',
                            borderRadius: '50%',
                            marginRight: 10,
                          }}>
                          <IoFlag style={{ fontSize: 20 }} />
                        </div>
                        <Card.Title as='h6' className='mb-0'>
                          Nivel
                        </Card.Title>
                        <Card.Text className='text-muted mb-0 ms-auto'>
                          {currentCourse?.level}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card
                      className='mb-2 border-0 shadow-sm'
                      style={{
                        overflow: 'hidden',
                        // borderRadius: 10,
                      }}>
                      <Card.Body className='d-flex align-items-center'>
                        <div
                          className='d-flex align-items-center justify-content-center  text-primary'
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#d1c2ff',
                            borderRadius: '50%',
                            marginRight: 10,
                          }}>
                          <IoLanguage style={{ fontSize: 20 }} />
                        </div>
                        <Card.Title as='h6' className='mb-0'>
                          Idioma
                        </Card.Title>
                        <Card.Text className='text-muted mb-0 ms-auto'>
                          {currentCourse?.language}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card
                      className='mb-2 border-0 shadow-sm'
                      style={{
                        overflow: 'hidden',
                        // borderRadius: 10,
                      }}>
                      <Card.Body className='d-flex align-items-center'>
                        <div
                          className='d-flex align-items-center justify-content-center  text-primary'
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#d1c2ff',
                            borderRadius: '50%',
                            marginRight: 10,
                          }}>
                          <IoMedal style={{ fontSize: 20 }} />
                        </div>
                        <Card.Title as='h6' className='mb-0'>
                          Certificado
                        </Card.Title>
                        <Card.Text className='text-muted mb-0 ms-auto'>
                          {currentCourse?.certificate ? 'Si' : 'No'}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Button
                      size='lg'
                      className='mt-4 w-100 fw-bold'
                      onClick={handleShowShared}>
                      <IoShareSocial style={{ fontSize: 20 }} />
                      &nbsp; Compartir Curso
                    </Button>
                    <Card className='my-4 border-0 shadow-sm'>
                      <Card.Body>
                        <Row>
                          <Col>
                            <Card.Title style={{ fontSize: 48 }}>
                              {currentCourse?.reviews.length > 0
                                ? (
                                    currentCourse?.reviews.reduce(
                                      (acc, review) =>
                                        acc + review.rating,
                                      0
                                    ) / currentCourse?.reviews.length
                                  ).toFixed(1)
                                : 0}
                            </Card.Title>
                          </Col>
                          <Col className='d-flex flex-column align-items-end justify-content-start'>
                            <div style={{ color: '#ffc107' }}>
                              {currentCourse?.reviews.length > 0 ? (
                                <>
                                  {Array(
                                    Math.floor(
                                      currentCourse?.reviews.reduce(
                                        (acc, review) =>
                                          acc + review.rating,
                                        0
                                      ) /
                                        currentCourse?.reviews.length
                                    )
                                  )
                                    .fill(0)
                                    .map((_, index) => (
                                      <IoStar
                                        key={index}
                                        size={14}
                                        style={{ margin: '0px 2px' }}
                                      />
                                    ))}
                                  {Array(
                                    Math.ceil(
                                      5 -
                                        currentCourse?.reviews.reduce(
                                          (acc, review) =>
                                            acc + review.rating,
                                          0
                                        ) /
                                          currentCourse?.reviews
                                            .length
                                    )
                                  )
                                    .fill(0)
                                    .map((_, index) => (
                                      <IoStarOutline
                                        key={index}
                                        size={14}
                                        style={{ margin: '0px 2px' }}
                                      />
                                    ))}
                                </>
                              ) : (
                                Array(5)
                                  .fill(0)
                                  .map((_, index) => (
                                    <IoStarOutline
                                      key={index}
                                      size={14}
                                      style={{ margin: '0px 2px' }}
                                    />
                                  ))
                              )}
                              {/*  */}
                            </div>
                            <Card.Text
                              className='text-muted'
                              style={{ fontSize: 10 }}>
                              {currentCourse?.reviews.length} Reseñas
                            </Card.Text>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <div
                              className='px-3 py-2 '
                              style={{
                                backgroundColor: '#ece5ff',
                                borderRadius: 10,
                              }}>
                              <Row className='my-2'>
                                <Col
                                  sm={2}
                                  className='d-flex align-items-center justify-content-start'>
                                  <IoStar
                                    style={{
                                      color: '#ffc107',
                                      fontSize: 14,
                                    }}
                                  />
                                  <span className='text-muted'>
                                    5
                                  </span>
                                </Col>
                                <Col
                                  sm={7}
                                  className='d-flex align-items-center justify-content-center p-0'>
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
                                          currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating === 5
                                          ).length > 0
                                            ? (
                                                (currentCourse?.reviews.filter(
                                                  (review) =>
                                                    review.rating ===
                                                    5
                                                ).length /
                                                  currentCourse
                                                    ?.reviews
                                                    .length) *
                                                100
                                              ).toFixed(1)
                                            : 0
                                        }%`,
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: '#b499ff',
                                        position: 'absolute',
                                      }}></span>
                                  </div>
                                </Col>
                                <Col sm={3} className='text-center'>
                                  <span
                                    className='text-muted'
                                    style={{ fontSize: 12 }}>
                                    {currentCourse?.reviews.filter(
                                      (review) => review.rating === 5
                                    ).length > 0
                                      ? (
                                          (currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating === 5
                                          ).length /
                                            currentCourse?.reviews
                                              .length) *
                                          100
                                        ).toFixed(1)
                                      : 0}
                                    %
                                  </span>
                                </Col>
                              </Row>

                              <Row className='my-2'>
                                <Col
                                  sm={2}
                                  className='d-flex align-items-center justify-content-start'>
                                  <IoStar
                                    style={{
                                      color: '#ffc107',
                                      fontSize: 14,
                                    }}
                                  />
                                  <span className='text-muted'>
                                    4
                                  </span>
                                </Col>
                                <Col
                                  sm={7}
                                  className='d-flex align-items-center justify-content-center p-0'>
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
                                          currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating >= 4 &&
                                              review.rating < 5
                                          ).length > 0
                                            ? (
                                                (currentCourse?.reviews.filter(
                                                  (review) =>
                                                    review.rating >=
                                                      4 &&
                                                    review.rating < 5
                                                ).length /
                                                  currentCourse
                                                    ?.reviews
                                                    .length) *
                                                100
                                              ).toFixed(1)
                                            : 0
                                        }%`,
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: '#b499ff',
                                        position: 'absolute',
                                      }}></span>
                                  </div>
                                </Col>
                                <Col sm={3} className='text-center'>
                                  <span
                                    className='text-muted'
                                    style={{ fontSize: 12 }}>
                                    {currentCourse?.reviews.filter(
                                      (review) =>
                                        review.rating >= 4 &&
                                        review.rating < 5
                                    ).length > 0
                                      ? (
                                          (currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating >= 4 &&
                                              review.rating < 5
                                          ).length /
                                            currentCourse?.reviews
                                              .length) *
                                          100
                                        ).toFixed(1)
                                      : 0}
                                    %
                                  </span>
                                </Col>
                              </Row>

                              <Row className='my-2'>
                                <Col
                                  sm={2}
                                  className='d-flex align-items-center justify-content-start'>
                                  <IoStar
                                    style={{
                                      color: '#ffc107',
                                      fontSize: 14,
                                    }}
                                  />
                                  <span className='text-muted'>
                                    3
                                  </span>
                                </Col>
                                <Col
                                  sm={7}
                                  className='d-flex align-items-center justify-content-center p-0'>
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
                                          currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating >= 3 &&
                                              review.rating < 4
                                          ).length > 0
                                            ? (
                                                (currentCourse?.reviews.filter(
                                                  (review) =>
                                                    review.rating >=
                                                      3 &&
                                                    review.rating < 4
                                                ).length /
                                                  currentCourse
                                                    ?.reviews
                                                    .length) *
                                                100
                                              ).toFixed(1)
                                            : 0
                                        }%`,
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: '#b499ff',
                                        position: 'absolute',
                                      }}></span>
                                  </div>
                                </Col>
                                <Col sm={3} className='text-center'>
                                  <span
                                    className='text-muted'
                                    style={{ fontSize: 12 }}>
                                    {currentCourse?.reviews.filter(
                                      (review) =>
                                        review.rating >= 3 &&
                                        review.rating < 4
                                    ).length > 0
                                      ? (
                                          (currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating >= 3 &&
                                              review.rating < 4
                                          ).length /
                                            currentCourse?.reviews
                                              .length) *
                                          100
                                        ).toFixed(1)
                                      : 0}
                                    %
                                  </span>
                                </Col>
                              </Row>

                              <Row className='my-2'>
                                <Col
                                  sm={2}
                                  className='d-flex align-items-center justify-content-start'>
                                  <IoStar
                                    style={{
                                      color: '#ffc107',
                                      fontSize: 14,
                                    }}
                                  />
                                  <span className='text-muted'>
                                    2
                                  </span>
                                </Col>
                                <Col
                                  sm={7}
                                  className='d-flex align-items-center justify-content-center p-0'>
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
                                          currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating >= 2 &&
                                              review.rating < 3
                                          ).length > 0
                                            ? (
                                                (currentCourse?.reviews.filter(
                                                  (review) =>
                                                    review.rating >=
                                                      2 &&
                                                    review.rating < 3
                                                ).length /
                                                  currentCourse
                                                    ?.reviews
                                                    .length) *
                                                100
                                              ).toFixed(1)
                                            : 0
                                        }%`,
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: '#b499ff',
                                        position: 'absolute',
                                      }}></span>
                                  </div>
                                </Col>
                                <Col sm={3} className='text-center'>
                                  <span
                                    className='text-muted'
                                    style={{ fontSize: 12 }}>
                                    {currentCourse?.reviews.filter(
                                      (review) =>
                                        review.rating >= 2 &&
                                        review.rating < 3
                                    ).length > 0
                                      ? (
                                          (currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating >= 2 &&
                                              review.rating < 3
                                          ).length /
                                            currentCourse?.reviews
                                              .length) *
                                          100
                                        ).toFixed(1)
                                      : 0}
                                    %
                                  </span>
                                </Col>
                              </Row>

                              <Row className='my-2'>
                                <Col
                                  sm={2}
                                  className='d-flex align-items-center justify-content-start'>
                                  <IoStar
                                    style={{
                                      color: '#ffc107',
                                      fontSize: 14,
                                    }}
                                  />
                                  <span className='text-muted'>
                                    1
                                  </span>
                                </Col>
                                <Col
                                  sm={7}
                                  className='d-flex align-items-center justify-content-center p-0'>
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
                                          currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating >= 1 &&
                                              review.rating < 2
                                          ).length > 0
                                            ? (
                                                (currentCourse?.reviews.filter(
                                                  (review) =>
                                                    review.rating >=
                                                      1 &&
                                                    review.rating < 2
                                                ).length /
                                                  currentCourse
                                                    ?.reviews
                                                    .length) *
                                                100
                                              ).toFixed(1)
                                            : 0
                                        }%`,
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: '#b499ff',
                                        position: 'absolute',
                                      }}></span>
                                  </div>
                                </Col>
                                <Col sm={3} className='text-center'>
                                  <span
                                    className='text-muted'
                                    style={{ fontSize: 12 }}>
                                    {currentCourse?.reviews.filter(
                                      (review) =>
                                        review.rating >= 1 &&
                                        review.rating < 2
                                    ).length > 0
                                      ? (
                                          (currentCourse?.reviews.filter(
                                            (review) =>
                                              review.rating >= 1 &&
                                              review.rating < 2
                                          ).length /
                                            currentCourse?.reviews
                                              .length) *
                                          100
                                        ).toFixed(1)
                                      : 0}
                                    %
                                  </span>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        {currentCourse?.reviews.length > 0 &&
                          [...currentCourse?.reviews]
                            .sort(
                              (a, b) =>
                                new Date(b.createdAt) -
                                new Date(a.createdAt)
                            )
                            .slice(0, 3)
                            .map((review) => (
                              <Row
                                key={review._id}
                                className='p-2 mt-3'>
                                <Col sm={3}>
                                  <Image
                                    src={
                                      review.user.avatar
                                        ? review.user.avatar.url
                                        : defaultProfilePicture
                                    }
                                    width={60}
                                    height={60}
                                    roundedCircle
                                    style={{
                                      objectFit: 'cover',
                                    }}
                                  />
                                </Col>
                                <Col sm={9}>
                                  <Card.Title
                                    as='h6'
                                    className='mb-0'>
                                    {review.user.name}
                                  </Card.Title>
                                  <div style={{ color: '#ffc107' }}>
                                    {Array(Math.floor(review.rating))
                                      .fill(0)
                                      .map((_, index) => (
                                        <IoStar
                                          key={index}
                                          size={14}
                                          style={{
                                            margin: '0px 2px',
                                          }}
                                        />
                                      ))}
                                    {Array(
                                      Math.ceil(5 - review.rating)
                                    )
                                      .fill(0)
                                      .map((_, index) => (
                                        <IoStarOutline
                                          key={index}
                                          size={14}
                                          style={{
                                            margin: '0px 2px',
                                          }}
                                        />
                                      ))}
                                  </div>
                                  <Card.Text
                                    className='text-muted mb-0'
                                    style={{ fontSize: 10 }}>
                                    {moment(
                                      review.createdAt
                                    ).fromNow()}
                                  </Card.Text>
                                  <div
                                    className='fst-italic'
                                    style={{
                                      fontSize: 12,
                                    }}>
                                    {review.comment}
                                  </div>
                                </Col>
                              </Row>
                            ))}
                        {user &&
                          user.enrolledCourses
                            .map((enroll) => enroll.course._id)
                            .includes(currentCourse._id) && (
                            <Row className='mt-3 justify-content-center'>
                              <Col className='text-center'>
                                <Button onClick={handleShowReview}>
                                  Agregar Reseña
                                </Button>
                              </Col>
                            </Row>
                          )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Course;
