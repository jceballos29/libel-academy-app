/** @format */

import React, { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import libelIcon from '../images/libel-logo-dark.png';
import path from '../routes/path';

// login server
import { login, reset } from '../features/auth/authSlice';

import { fetchUser } from '../features/user/userSlice';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    dispatch(login(user));
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUser());
      dispatch(reset())
      resetForm({
        username:'',
        password:''
      })
      if (location.state) {
        navigate(location.state.redirect);
      } else {
        navigate(path.user.dashboard);
      }
    }
  }, [isAuthenticated, resetForm, dispatch, navigate, location]);

  return (
    <div className='page login py-5'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center align-items-center'>
            <NavLink to={path.home}>
              <Image src={libelIcon} alt='Libel' fluid />
            </NavLink>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center align-items-center'>
            <Card className='auth__form'>
              <Card.Body className='p-4 d-flex flex-column justify-content-between'>
                <h3>Inicia Sesión</h3>
                <Form
                  onSubmit={handleSubmit(onSubmit)}
                  className='mt-2'>
                  <Form.Group className='mb-3'>
                    <div className='d-flex justify-content-between'>
                      <Form.Label>Usuario</Form.Label>
                      {errors.username && (
                        <Form.Label className='text-danger'>
                          {errors.username.message}
                        </Form.Label>
                      )}
                    </div>
                    <Form.Control
                      type='text'
                      placeholder='Ingrese tu usuario'
                      {...register('username', {
                        required: 'Campo requerido',
                      })}
                      className={
                        errors.username ? 'border-danger' : ''
                      }
                    />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <div className='d-flex justify-content-between'>
                      <Form.Label>Contraseña</Form.Label>
                      {errors.password && (
                        <Form.Label className='text-danger'>
                          {errors.password.message}
                        </Form.Label>
                      )}
                    </div>
                    <Form.Control
                      type='password'
                      placeholder='Ingrese tu contraseña'
                      {...register('password', {
                        required: 'Campo requerido',
                      })}
                      className={
                        errors.password ? 'border-danger' : ''
                      }
                    />
                  </Form.Group>
                  <Link to={path.home} style={{ fontSize: 12 }}>
                    ¿Olvidaste tu contraseña?
                  </Link>
                  <Form.Group className='mt-4'>
                    <Button
                      disabled={isLoading}
                      type='submit'
                      className='w-100'>
                      {isLoading ? 'Cargando...' : 'Ingresar'}
                    </Button>
                  </Form.Group>
                </Form>

                <hr />
                <div
                  className='text-muted text-center'
                  style={{ fontSize: '14px' }}>
                  ¿Aún no tienes cuenta?&nbsp;
                  <Link to={path.register}>Regístrate</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col>
            <p
              className='text-muted text-center'
              style={{ fontSize: 10 }}>
              &copy; {new Date().getFullYear()} Libel Academy
              <br />
              Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
