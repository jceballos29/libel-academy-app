import React, { useEffect } from 'react'
import { Button, Card, Col, Form, Image, Offcanvas, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

import libelIcon from "../images/libel-logo-dark.png";
import path from '../routes/path';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { fetchUser } from '../features/user/userSlice';


const LoginSidebar = ({show, handleClose}) => {


  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector((state) => state.auth);

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
      handleClose();
      dispatch(reset())
      resetForm({
        username: "",
        password: "",
      })
    }
  },[isAuthenticated, handleClose, resetForm, dispatch]);

  return (
    <Offcanvas
    show={show}
    style={{ zIndex: 10000 }}
    placement="end"
    onHide={handleClose}
  >
    <Offcanvas.Header
      closeButton
      className="ms-auto"
    />
    <Offcanvas.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <NavLink to={path.home}>
            <Image src={libelIcon} alt="Libel" fluid />
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="auth__form">
            <Card.Body className="p-4 d-flex flex-column justify-content-between">
              <h3>Inicia Sesión</h3>
              <Form onSubmit={handleSubmit(onSubmit)} className="mt-2">
                <Form.Group className="mb-3">
                  <div className="d-flex justify-content-between">
                    <Form.Label>Usuario</Form.Label>
                    {errors.username && (
                      <Form.Label className="text-danger">
                        {errors.username.message}
                      </Form.Label>
                    )}
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese tu usuario"
                    {...register("username", {
                      required: "Campo requerido",
                    })}
                    className={errors.username ? "border-danger" : ""}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex justify-content-between">
                    <Form.Label>Contraseña</Form.Label>
                    {errors.password && (
                      <Form.Label className="text-danger">
                        {errors.password.message}
                      </Form.Label>
                    )}
                  </div>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese tu contraseña"
                    {...register("password", {
                      required: "Campo requerido",
                    })}
                    className={errors.password ? "border-danger" : ""}
                  />
                </Form.Group>
                <Link to={path.home} style={{ fontSize: 12 }}>
                  ¿Olvidaste tu contraseña?
                </Link>
                <Form.Group className="mt-4">
                  <Button
                    disabled={isLoading}
                    type="submit"
                    className="w-100"
                  >
                    {isLoading ? "Cargando..." : "Ingresar"}
                  </Button>
                </Form.Group>
              </Form>

              <hr />
              <div
                className="text-muted text-center"
                style={{ fontSize: "14px" }}
              >
                ¿Aún no tienes cuenta?&nbsp;
                <Link to={path.register}>Regístrate</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default LoginSidebar