/** @format */

import { Tab } from 'bootstrap';
import React, { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Row,
  Tabs,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  updateUser,
  changePassword,
  deleteUser,
} from '../../../features/user/userSlice';

import { logout } from '../../../features/auth/authSlice';
import { resetUser } from '../../../features/user/userSlice';
import storageService from '../../../services/storage';
import { useNavigate } from 'react-router-dom';
import path from '../../../routes/path';  

import defaultProfilePicture from '../../../images/default-profile-picture.png';

const Settings = () => {
  const { user, isLoading, changed, updated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: registerChangePassword,
    handleSubmit: handleChangePasswordSubmit,
    reset: changePasswordReset,
    formState: { errors: changePasswordErrors },
  } = useForm();

  const {
    register: registerEditUser,
    handleSubmit: handleEditSubmit,
    reset: resetEditForm,
    // errors: errorsEditForm,
    watch,
  } = useForm({
    defaultValues: {
      files: null,
      firstName: user?.name.split(' ')[0],
      lastName: user?.name.split(' ')[1],
      email: user?.email,
      phone: user?.phone,
      country: user?.country,
      city: user?.city,
      website: user?.website,
      bio: user?.bio,
      facebook: user?.social?.facebook,
      twitter: user?.social?.twitter,
      instagram: user?.social?.instagram,
      linkedin: user?.social?.linkedin,
    },
  });

  const onEditSubmit = async (data) => {
    const {
      files,
      firstName,
      lastName,
      facebook,
      twitter,
      instagram,
      linkedin,
      ...editedUser
    } = data;
    editedUser.name = `${firstName} ${lastName}`;
    editedUser.social = {
      facebook,
      twitter,
      instagram,
      linkedin,
    };

    if (files && files['length'] > 0) {
      const file = files[0];
      const response = await storageService.uploadFile(file);
      if (response.success) {
        editedUser.avatar = response.data._id;
      }
    }
    dispatch(updateUser(editedUser));
  };

  const onChangePasswordSubmit = (data) => {
    const { oldPassword, newPassword, confirmPassword } = data;
    if (newPassword !== confirmPassword) {
      toast.error(
        'La nueva contraseña y su confirmación no coinciden'
      );
      return;
    }
    dispatch(changePassword({ oldPassword, newPassword }));
  };

  const handleDeleteAccount = () => {
    dispatch(deleteUser());
    dispatch(logout());
    navigate(path.home);
  };

  useEffect(() => {
    if (changed) {
      changePasswordReset({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      dispatch(logout());
      dispatch(resetUser());
      navigate(path.home);
    }

    if (updated) {
      resetEditForm({
        files: null,
        firstName: user?.name.split(' ')[0],
        lastName: user?.name.split(' ')[1],
        email: user?.email,
        phone: user?.phone,
        country: user?.country,
        city: user?.city,
        website: user?.website,
        bio: user?.bio,
        facebook: user?.social?.facebook,
        twitter: user?.social?.twitter,
        instagram: user?.social?.instagram,
        linkedin: user?.social?.linkedin,
      });
    }
  }, [
    changed,
    changePasswordReset,
    dispatch,
    navigate,
    updated,
    resetEditForm,
    user,
  ]);

  return (
    <div className='student__settings mt-3 mt-md-0'>
      <Row>
        <Col>
          <Card
            className='border shadow-sm mb-3'
            style={{ backgroundColor: '#ebe5ff' }}>
            <Card.Body>
              <Card.Title as='h2' className='fw-bold my-0'>
                Configuración
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey='profile' className='mb-3'>
            <Tab eventKey='profile' title='Perfil'>
              <Form onSubmit={handleEditSubmit(onEditSubmit)}>
                <h5>Información</h5>
                <hr />
                <Row>
                  <Col lg={4}>
                    <Form.Group className='h-100 '>
                      <Form.Label className='text-start'>
                        Imagen de perfil
                      </Form.Label>
                      <Card className='text-center'>
                        <Card.Body>
                          <figure>
                            <Image
                              src={
                                watch('files')
                                  ? URL.createObjectURL(
                                      watch('files')[0]
                                    )
                                  : user.avatar? user.avatar?.url : defaultProfilePicture
                              }
                              roundedCircle
                              width={150}
                              height={150}
                              style={{ objectFit: 'cover' }}
                              className='my-3 shadow-sm'
                            />
                          </figure>
                          <Button
                            variant='secondary'
                            style={{
                              position: 'relative',
                              overflow: 'hidden',
                            }}>
                            Seleccionar imagen
                            <Form.Control
                              type='file'
                              {...registerEditUser('files')}
                              name='files'
                              accept='image/*'
                              style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                minWidth: '100%',
                                minHeight: '100%',
                                fontSize: '100px',
                                textAlign: 'right',
                                filter: 'alpha(opacity=0)',
                                opacity: 0,
                                outline: 'none',
                                cursor: 'inherit',
                                display: 'block',
                              }}
                            />
                          </Button>
                        </Card.Body>
                      </Card>
                    </Form.Group>
                  </Col>
                  <Col lg={8}>
                    <Row>
                      <Col lg={6}>
                        <Form.Group className='mb-2'>
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control
                            type='text'
                            {...registerEditUser('firstName')}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className='mb-2'>
                          <Form.Label>Apellido</Form.Label>
                          <Form.Control
                            type='text'
                            {...registerEditUser('lastName')}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Form.Group className='mb-2'>
                          <Form.Label>Correo electrónico</Form.Label>
                          <Form.Control
                            type='email'
                            {...registerEditUser('email')}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className='mb-2'>
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control
                            type='text'
                            {...registerEditUser('phone')}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Form.Group className='mb-2'>
                          <Form.Label>País</Form.Label>
                          <Form.Control
                            type='text'
                            {...registerEditUser('country')}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className='mb-2'>
                          <Form.Label>Ciudad</Form.Label>
                          <Form.Control
                            type='text'
                            {...registerEditUser('city')}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className='mb-2'>
                          <Form.Label>Sitio Web</Form.Label>
                          <Form.Control
                            type='text'
                            {...registerEditUser('website')}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col>
                    <Form.Group className='mb-2'>
                      <Form.Label>Biografía</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={4}
                        {...registerEditUser('bio')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <h5>Redes Sociales</h5>
                <hr />
                <Row>
                  <Col lg={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Facebook</Form.Label>
                      <Form.Control
                        type='text'
                        {...registerEditUser('facebook')}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Twitter</Form.Label>
                      <Form.Control
                        type='text'
                        {...registerEditUser('twitter')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Instagram</Form.Label>
                      <Form.Control
                        type='text'
                        {...registerEditUser('instagram')}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>linkedin</Form.Label>
                      <Form.Control
                        type='text'
                        {...registerEditUser('linkedin')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='text-center text-lg-end'>
                    <Form.Group className='mb-2'>
                      <Button type='submit' disabled={isLoading}>
                        {isLoading
                          ? 'Actualizando...'
                          : 'Actualizar Perfil'}
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Tab>
            <Tab eventKey='password' title='Contraseña'>
              <Form
                onSubmit={handleChangePasswordSubmit(
                  onChangePasswordSubmit
                )}>
                <h5>Cambiar Contraseña</h5>
                <hr />
                <Row>
                  <Col lg={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Contraseña Actual</Form.Label>
                      <Form.Control
                        type='password'
                        {...registerChangePassword('oldPassword')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group className='mb-2'>
                      <div className='d-flex justify-content-between'>
                        <Form.Label>Nueva Contraseña</Form.Label>
                        {changePasswordErrors.newPassword && (
                          <Form.Label className='text-danger'>
                            {changePasswordErrors.newPassword.message}
                          </Form.Label>
                        )}
                      </div>
                      <Form.Control
                        type='password'
                        {...registerChangePassword('newPassword', {
                          required: 'Campo requerido',
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/i,
                            message: 'Contraseña inválida',
                          },
                        })}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className='mb-2'>
                      <div className='d-flex justify-content-between'>
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        {changePasswordErrors.confirmPassword && (
                          <Form.Label className='text-danger'>
                            {
                              changePasswordErrors.confirmPassword
                                .message
                            }
                          </Form.Label>
                        )}
                      </div>
                      <Form.Control
                        type='password'
                        {...registerChangePassword(
                          'confirmPassword',
                          {
                            required: 'Campo requerido',
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/i,
                              message: 'Contraseña inválida',
                            },
                          }
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='text-center text-lg-start'>
                    <Form.Group className='mb-2'>
                      <Button type='submit' disabled={isLoading}>
                        {isLoading
                          ? 'Cambiando...'
                          : 'Cambiar Contraseña'}
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Tab>
            <Tab eventKey='deleteAccount' title='Eliminar Cuenta'>
              <Row>
                <Col>
                  <p>
                    Al hacer click en el botón eliminar cuenta, se
                    eliminará su cuenta de usuario y todos los datos
                    relacionados con ella.
                    <br />
                    Ya no podrá acceder a su cuenta, ni a los cursos
                    que ha inscrito.
                  </p>
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col className='text-center text-lg-start'>
                  <Button
                    variant='danger'
                    disabled={isLoading}
                    onClick={handleDeleteAccount}>
                    {isLoading ? 'Eliminando...' : 'Eliminar Cuenta'}
                  </Button>
                </Col>
                <small className='mt-2 text-muted fst-italic'>
                  *Tendrá un período de 24 horas para comunicarse con
                  nosotros para recuperar su cuenta.
                </small>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
