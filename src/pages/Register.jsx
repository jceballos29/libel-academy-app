import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoHelpCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import libelIcon from "../images/libel-logo-dark.png";
import path from "../routes/path";
import countries from "../utils/countries";

import { register, reset } from "../features/auth/authSlice";


const Register = () => {

  const { isLoading, isRegistered } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: registerForm,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { phone, code, firstName, lastName, ...NewUser } = data;
    NewUser.name = `${firstName} ${lastName}`;
    NewUser.phone = `+${code}${phone}`;
    NewUser.country = countries.find((c) => c.code === parseInt(code)).name;
    
    dispatch(register(NewUser));
  };

  useEffect(() => {
    if (isRegistered) {
      navigate(path.login);
      resetForm({
        phone: "",
        code: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      dispatch(reset());
    }
  }, [isRegistered, resetForm, navigate, dispatch]);

  return (
    <div className="register">
      <Container className="mt-5">
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
                <h3>Registro</h3>
                <Form onSubmit={handleSubmit(onSubmit)} className="mt-2">
                  <Row className="mb-3 mx-lg-auto">
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-2">
                        <div className="d-flex justify-content-between">
                          <Form.Label>Nombre</Form.Label>
                          {errors.firstName && (
                            <Form.Label className="text-danger">
                              {errors.firstName.message}
                            </Form.Label>
                          )}
                        </div>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese tu nombre"
                          {...registerForm("firstName", {
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Mínimo 3 caracteres",
                            },
                          })}
                          className={errors.firstName ? "border-danger" : ""}
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <div className="d-flex justify-content-between">
                          <Form.Label>Apellido</Form.Label>
                          {errors.lastName && (
                            <Form.Label className="text-danger">
                              {errors.lastName.message}
                            </Form.Label>
                          )}
                        </div>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese tu apellido"
                          {...registerForm("lastName", {
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Mínimo 3 caracteres",
                            },
                          })}
                          className={errors.lastName ? "border-danger" : ""}
                        />
                      </Form.Group>

                      <Form.Group className="mb-2">
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
                          {...registerForm("username", {
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Mínimo 3 caracteres",
                            },
                            maxLength: {
                              value: 16,
                              message: "Máximo 16 caracteres",
                            },
                          })}
                          className={errors.username ? "border-danger" : ""}
                        />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <div className="d-flex justify-content-between">
                          <Form.Label>Email</Form.Label>
                          {errors.email && (
                            <Form.Label className="text-danger">
                              {errors.email.message}
                            </Form.Label>
                          )}
                        </div>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese tu email"
                          {...registerForm("email", {
                            required: "Campo requerido",
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Email inválido",
                            },
                          })}
                          className={errors.username ? "border-danger" : ""}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-2">
                        <div className="d-flex justify-content-between">
                          <OverlayTrigger
                            placement="right"
                            overlay={
                              <Tooltip
                                id="button-tooltip-2"
                                style={{
                                  fontSize: 12,
                                  textAlign: "left",
                                }}
                              >
                                Mínimo 8 caracteres
                                <br />
                                Máximo 16 caracteres
                                <br />
                                Al menos una letra mayúscula
                                <br />
                                Al menos una letra minúscula
                                <br />
                                Al menos un número
                                <br />
                                Al menos un carácter especial
                              </Tooltip>
                            }
                          >
                            {({ ref, ...triggerHandler }) => (
                              <Form.Label
                                {...triggerHandler}
                                className="d-flex align-items-center"
                              >
                                Contraseña
                                <span ref={ref}>
                                  <IoHelpCircleOutline
                                    style={{ fontSize: 16 }}
                                  />
                                </span>
                              </Form.Label>
                            )}
                          </OverlayTrigger>

                          {errors.password && (
                            <Form.Label className="text-danger">
                              {errors.password.message}
                            </Form.Label>
                          )}
                        </div>
                        <Form.Control
                          type="password"
                          placeholder="Ingrese su contraseña"
                          {...registerForm("password", {
                            required: "Campo requerido",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/i,
                              message: "Contraseña inválida",
                            },
                          })}
                          className={errors.password ? "border-danger" : ""}
                        />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <div className="d-flex justify-content-between">
                          <Form.Label>Fecha de nacimiento</Form.Label>
                          {errors.birthDate && (
                            <Form.Label className="text-danger">
                              {errors.birthDate.message}
                            </Form.Label>
                          )}
                        </div>
                        <Form.Control
                          type="date"
                          {...registerForm("birthDate", {
                            require: "Campo requerido",
                            valueAsDate: true,
                            validate: (value) => {
                              const today = new Date();
                              const birthDate = new Date(value);
                              const age =
                                today.getFullYear() - birthDate.getFullYear();
                              if (age < 14) {
                                return "Debes tener mínimo 14 años";
                              }
                            },
                          })}
                          className={errors.birthDate ? "border-danger" : ""}
                        />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <div className="d-flex justify-content-between">
                          <Form.Label>Teléfono</Form.Label>
                          {errors.phone && (
                            <Form.Label className="text-danger">
                              {errors.phone.message}
                            </Form.Label>
                          )}
                        </div>
                        <Row>
                          <Col xs={3} className="pe-0">
                            <Form.Select
                              className="me-0"
                              {...registerForm("code", { required: true })}
                              defaultValue={57}
                              style={{ fontSize: 14, height: 38, width: 64 }}
                            >
                              {countries.map((country) => (
                                <option key={country.name} value={country.code}>
                                  {country.flag}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                          <Col xs={9} md={8} className="ps-0">
                            <Form.Control
                              type="text"
                              placeholder="Teléfono"
                              {...registerForm("phone", {
                                required: "Campo requerido",
                                pattern: {
                                  value: /^\d{8,10}$/,
                                  message: "Teléfono inválido",
                                },
                              })}
                              className={errors.phone ? "border-danger" : ""}
                            />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <div className="d-flex justify-content-between">
                          <Form.Label>Ciudad</Form.Label>
                          {errors.city && (
                            <Form.Label className="text-danger">
                              {" "}
                              {errors.city.message}
                            </Form.Label>
                          )}
                        </div>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese su ciudad"
                          {...registerForm("city", {
                            required: "Campo requerido",
                          })}
                          className={errors.city ? "border-danger" : ""}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                      <p
                        className="text-center"
                        style={{ fontSize: 12, maxWidth: 350 }}
                      >
                        Al registrarte, aceptas nuestros{" "}
                        <Link to={path.terms}>términos y condiciones</Link> y
                        nuestra{" "}
                        <Link to={path.privacy}>política de privacidad</Link>
                      </p>

                      <Form.Group className="mt-3" style={{ maxWidth: 300 }}>
                        <Button
                          disabled={isLoading}
                          type="submit"
                          className="w-100"
                        >
                          {isLoading ? "Cargando..." : "Registrarme"}
                        </Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <p className="text-muted text-center" style={{ fontSize: 10 }}>
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

export default Register;
