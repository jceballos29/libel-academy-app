/** @format */

import axios from 'axios';

const register = async (user) => {
  const response = await axios.post('/api/auth/register', user);
  return response.data;
};

const login = async (user) => {
  try {
    const {data: response} = await axios.post('/api/auth/login', user);
    if (response.success) {
      localStorage.setItem('LibelAcademyToken', response.data.token);
    }
    return response;
  } catch (error) {
    return error?.response?.data || error;
  }
};

const logout = async () => {
  localStorage.removeItem('LibelAcademyToken');
  return {
    success: true,
    message: 'Cierre de sesión exitoso',
  };
};

const authService = {
  register,
  login,
  logout,
  // getCurrentUser
};

export default authService;
