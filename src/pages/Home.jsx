/** @format */

import React, { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import { handleTitlePage } from '../utils/handleTitlePage';

import headerImage from '../images/header-banner-.png';


import libelDot from '../images/logo_dot.png';
import { IoChevronForward } from 'react-icons/io5';

import masterBlender from '../images/blender_videojuegos.jpeg';
import masterEscultura from '../images/escultura_impresion.jpeg';
import escuelaZBrush from '../images/zbrush.jpeg';
import masterRigging from '../images/rigging.jpeg';

import blender from '../images/Imagen 7.png';
import zbrush from '../images/Imagen 1.png';
import maya from '../images/Imagen 4.png';
// import { Link } from 'react-router-dom';
// import path from '../routes/path'

const Home = () => {
  useEffect(() => {
    handleTitlePage();
  }, []);

  return (
    <div className='home'>
      <section className='pt-5 bg-dark border-bottom border-secondary'>
        <Container>
          <Row>
            <Col
              lg={6}
              className='d-flex flex-column align-items-start justify-content-center'>
              <h1
                className='text-white fw-bolder lh-1 mb-5'
                style={{ fontSize: 54 }}>
                <span className='text-degrade'>
                  ACADEMIA
                  <br />
                  ONLINE
                </span>{' '}
                APRENDE
                <br />
                3D DESDE CERO
              </h1>
              <p className='text-secondary'>
                Aprende a tu ritmo o con clases en vivo
                <br />y logra{' '}
                <span className='text-light'>
                  resultados increíbles.
                </span>
              </p>
              <Button
                variant='primary'
                size='lg  '
                className='mt-5 rounded-pill'>
                Ver Resultados&nbsp;
                <IoChevronForward />
              </Button>
            </Col>
            <Col lg={6} className='mt-5 mt-lg-0'>
              <Image src={headerImage} fluid />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='py-5 bg-dark border-bottom border-secondary'>
        <Container>
          <Row className='justify-content-between'>
            <Col lg={3}>
              <Row>
                <Col className='d-flex align-items-start'>
                  <Image src={libelDot} fluid className='mt-3 me-3' />
                  <h2 className='text-white fw-normal lh-1 mb-5'>
                    MÁSTERES
                    <br />
                    DESTACADOS
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className='text-white fw-bolder lh-1 fs-1 mb-5'>
                    ¡Obtén
                    <br />
                    <span className='text-primary'>
                      sorprendentes resultados
                    </span>{' '}
                    en corto tiempo!
                  </h2>
                  <p className='text-secondary mb-5'>
                    No necesitas de conocimientos previos. Solamente
                    tienes que adaptarte a{' '}
                    <span className='text-light text-decoration-underline'>
                      nuestro plan de estudios.
                    </span>
                  </p>
                  <Button
                    variant='outline-light'
                    className='rounded-pill'
                    style={{ fontSize: 14 }}>
                    QUIERO SABER MÁS&nbsp;
                    <IoChevronForward />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={8} className='mt-4 mt-lg-0'>
              <Row className='h-100'>
                <Col xs={12} lg={4} className='my-auto'>
                  <Card className='mb-4'>
                    <Card.Body className='text-center'>
                      <Card.Img
                        src={masterBlender}
                        variant='top'
                        className='rounded-circle mb-4'
                        style={{ width: 120, height: 120 }}
                      />
                      <Card.Title as='h6' className='fw-bolder'>
                        Máster en Blender para Videojuegos
                      </Card.Title>
                      <Card.Text className='text-secondary'>
                        Ricardo Díaz
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                      <Card.Img
                        src={blender}
                        className='fluid'
                        style={{ width: 125, height: 35 }}
                      />
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={12} lg={4} className='my-auto'>
                  <Card className='mb-4'>
                    <Card.Body className='text-center'>
                      <Card.Img
                        src={masterEscultura}
                        variant='top'
                        className='rounded-circle mb-4'
                        style={{ width: 120, height: 120 }}
                      />
                      <Card.Title as='h6' className='fw-bolder'>
                        Máster en Escultura para Impresión 3D
                      </Card.Title>
                      <Card.Text className='text-secondary'>
                        Oscar Fernández
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                      <Card.Img
                        src={zbrush}
                        className='fluid'
                        style={{ width: 125, height: 35 }}
                      />
                    </Card.Footer>
                  </Card>
                  <Card className='mb-4'>
                    <Card.Body className='text-center'>
                      <Card.Img
                        src={masterRigging}
                        variant='top'
                        className='rounded-circle mb-4'
                        style={{ width: 120, height: 120 }}
                      />
                      <Card.Title as='h6' className='fw-bolder'>
                        Escuela ZBrush
                      </Card.Title>
                      <Card.Text className='text-secondary'>
                        Manuel Jordan
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                      <Card.Img
                        src={maya}
                        className='fluid'
                        style={{ width: 125, height: 35 }}
                      />
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={12} lg={4} className='my-auto'>
                  <Card className='mb-4'>
                    <Card.Body className='text-center'>
                      <Card.Img
                        src={escuelaZBrush}
                        variant='top'
                        className='rounded-circle mb-4'
                        style={{ width: 120, height: 120 }}
                      />
                      <Card.Title as='h6' className='fw-bolder'>
                        Escuela ZBrush
                      </Card.Title>
                      <Card.Text className='text-secondary'>
                        Manuel Jordan
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                      <Card.Img
                        src={zbrush}
                        className='fluid'
                        style={{ width: 125, height: 35 }}
                      />
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className='pt-5 bg-dark'>
        <Container>
        <Row> 
          <Col lg={6} >
              <ul style={{listStyle: 'none'}} className="text-light fs-4 px-md-0">
                <li>CURSOS</li>
                <li>MASTERS</li>
                <li>ESCUELA ZBRUSH</li>
                <li>ESCUELA BLENDER</li>
                <li>ESCUELA RIGGING</li>
                <li>ESCUELA ILUSTRACIÓN</li>
                <li>RESULTADOS</li>
              </ul>
          </Col>
          <Col lg={6}>

          </Col>
        </Row>
        <Row className="py-2">
          <Col md={4} className="text-center text-md-start"> 
            <Link className="text-light" style={{fontSize:14}} to={path.privacy}>Política de Privacidad</Link>
          </Col>
          <Col md={4} className="text-center">
          <Link className="text-light" style={{fontSize:14}} to={path.terms}>Términos y Condiciones</Link>
          </Col>
          <Col md={4} className="text-center">
            <span className="text-secondary" style={{fontSize:12}}>&copy; {new Date().getFullYear()} Libel Academy</span>
          </Col>
        </Row>
        </Container>
      </section> */}
    </div>
  );
};

export default Home;
