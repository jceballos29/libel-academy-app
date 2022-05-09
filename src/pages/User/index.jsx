/** @format */

import React, { Suspense, useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Nav,
  Row,
} from 'react-bootstrap';

import moment from 'moment';
import 'moment/locale/es';

import './user.scss';

import {
  IoBookmark,
  IoSettings,
  IoPerson,
  IoSchool,
  IoClipboard,
  IoExit,
} from 'react-icons/io5';
import { NavLink, Outlet } from 'react-router-dom';
import path from '../../routes/path';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { resetUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { handleTitlePage } from '../../utils/handleTitlePage';

import defaultProfilePicture from '../../images/default-profile-picture.png';

const User = () => {
  moment.locale('es');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetUser());
    navigate(path.home);
  };

  useEffect(() => {
    handleTitlePage('Panel')
  }, [])
  

  return (
    <div className='student pb-3'>
      <Container>
        <Row className='mt-3'>
          <Col sm={12} lg={4} xl={3}>
            <Card className='border-0 shadow-sm'>
              <Card.Body>
                <div className='text-center py-4 rounded-3'>
                  <Image
                    src={
                      user?.avatar ? user?.avatar?.url : defaultProfilePicture
                    }
                    roundedCircle
                    width={200}
                    height={200}
                    className='m-auto shadow-sm border border-5 border-secondary'
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                  <div className='mt-3'>
                    <Card.Title>{user?.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      @{user?.username}
                    </Card.Subtitle>
                  </div>
                </div>
                <Nav
                  className='flex-column p-3'
                  variant='pills'
                  activeKey={path.user.dashboard}>
                  <Nav.Item>
                    <Nav.Link
                      as={NavLink}
                      end
                      to={path.user.dashboard}>
                      <IoClipboard size={24} className='me-3' />
                      <span>Dashboard</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to={path.user.profile}>
                      <IoPerson size={24} className='me-3' />
                      <span>Perfil</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to={path.user.courses}>
                      <IoSchool size={24} className='me-3' />
                      <span>Cursos</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to={path.user.wishlist}>
                      <IoBookmark size={24} className='me-3' />
                      <span>Lista de Deseos</span>
                    </Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item>
                    <Nav.Link as={NavLink} to={path.user.settings}>
                      <IoSettings size={24} className='me-3' />
                      <span>Configuración</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Button
                    variant='secondary'
                    className='mt-2 text-start'
                    style={{ padding: '8px 16px' }}
                    onClick={handleLogout}>
                    <IoExit size={24} className='me-3' />
                    <span>Cerrar Sesión</span>
                  </Button>
                </Nav>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={8} xl={9}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default User;
