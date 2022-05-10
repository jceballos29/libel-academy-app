/** @format */
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/courses.scss';
import { handleTitlePage } from '../../utils/handleTitlePage';
import { fetchCourses } from '../../features/courses/courseSlice';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import CourseCard from './components/CourseCard';
import FeaturedCard from './components/FeaturedCard';
import CategoryCard from './components/CategoryCard';
import Slider from 'react-slick';

import Loading from '../../components/Loading';

const settingsCategoriesSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, loading: loadingCourses } = useSelector(
    (state) => state.courses
  );
  const { categories, loading: loadingCategories } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    handleTitlePage('Cursos');
    dispatch(fetchCourses());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className='courses'>
      <section
        className='header'
        style={{
          backgroundImage:
            'url("https://cdna.artstation.com/p/users/covers/000/023/318/default/9b8071e8dd05d0269b76606736aeecbc.jpg?1634833342")',
        }}>
        <div className='header__overlay'></div>
        <div className='header__main'>
          <Container>
            <div className='header__main__container__inner text-light'>
              <h1 className='header__title text-center mb-5 text-light'>
                Formamos
                <br />
                especialistas para la
                <br />
                industria 3D
              </h1>
              <h5 className='header__subtitle text-center'>
                Inicia tu curva de aprendizaje con acompañamiento EN
                VIVO
              </h5>
            </div>
          </Container>
        </div>
      </section>
      <section className='courses__featured pt-4 pb-5'>
        <Container>
          <Row className='mb-4'>
            <Col>
              <h2 className='courses__title text-start'>
                Nuestros Cursos Destacados
              </h2>
            </Col>
          </Row>
          <Row>
            {loadingCourses ? (
              <Loading />
            ) : (
              courses
                .filter((curso) => curso.featured === true)
                .map((course) => (
                  <Col
                    key={course._id}
                    xs={12}
                    md={6}
                    xl={4}
                    className='mb-3 mb-lg-0 px-md-2'>
                    <FeaturedCard course={course} />
                  </Col>
                ))
            )}
          </Row>
        </Container>
      </section>
      <section className='courses__categories pt-4 pb-5'>
        <Container>
          <Row className='mb-4'>
            <h2 className='courses__title text-start text-dark'>
              Categorías
            </h2>
          </Row>

          {loadingCategories ? (
            <Loading />
          ) : categories.length > 4 ? (
            <Row>
              <Slider {...settingsCategoriesSlider}>
                {categories.map((category) => (
                  <Col
                    md={6}
                    xl={3}
                    key={category._id}
                    className='px-2'>
                    <CategoryCard category={category} />
                  </Col>
                ))}
              </Slider>
            </Row>
          ) : (
            <Row>
              {categories.map((category) => (
                <Col
                  md={6}
                  xl={3}
                  key={category._id}
                  className='px-2'>
                  <CategoryCard category={category} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
      <section className='courses__all pt-4 pb-5'>
        <Container>
          <Row className='mb-4'>
            <h2 className='courses__title text-start'>
              Explora todos los cursos
            </h2>
          </Row>
          <Row>
            {loadingCourses ? (
              <Loading />
            ) : (
              courses.map((course) => (
                <Col md={6} lg={4} xl={3} key={course._id}>
                  <CourseCard course={course} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Courses;
