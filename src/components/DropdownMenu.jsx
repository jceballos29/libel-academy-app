/** @format */

import React from 'react';
import { Image, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import { resetUser } from '../features/user/userSlice';

import path from '../routes/path';

import defaultProfilePicture from '../images/default-profile-picture.png';
import {
  IoBookmark,
  IoClipboard,
  IoExit,
  IoPerson,
  IoSchool,
  IoSettings,
} from 'react-icons/io5';

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetUser());
  };

  return (
    <>
      <NavDropdown
        title={
          <>
            <Image
              src={
                user?.avatar
                  ? user?.avatar?.url
                  : defaultProfilePicture
              }
              roundedCircle
              width={20}
              height={20}
              className='me-2'
              style={{ objectFit: 'cover' }}
            />
            <span className='me-1'>{user.name}</span>
          </>
        }>
        <NavDropdown.Item as={NavLink} end to={path.user.dashboard}>
          <IoClipboard size={20} className='me-3' />
          <span>Dashboard</span>
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to={path.user.profile}>
          <IoPerson size={20} className='me-3' />
          <span>Perfil</span>
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to={path.user.courses}>
          <IoSchool size={20} className='me-3' />
          <span>Cursos</span>
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to={path.user.wishlist}>
          <IoBookmark size={20} className='me-3' />
          <span>Lista de Deseos</span>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to={path.user.settings}>
          <IoSettings size={20} className='me-3' />
          <span>Configuración</span>
        </NavDropdown.Item>
        <NavDropdown.Divider style={{ margin: 0 }} />
        <NavDropdown.Item
          className='bg-secondary text-white'
          onClick={handleLogout}>
          <IoExit size={20} className='me-3' />
          <span>Cerrar Sesión</span>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default DropdownMenu;
