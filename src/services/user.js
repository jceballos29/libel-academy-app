/** @format */

import axios from 'axios';
import authHeader from './authHeader';

const fetchUser = async () => {
  const response = await axios.get('/api/user', {
    headers: authHeader(),
  });
  return response.data;
};

const updateUser = async (editedUser) => {
  const response = await axios.put('/api/user', editedUser, {
    headers: authHeader(),
  });
  return response.data;
};

const changePassword = async (password, newPassword) => {
  const response = await axios.patch(
    '/api/user/password',
    {
      password,
      newPassword,
    },
    {
      headers: authHeader(),
    }
  );
  return response.data;
};

const deleteUser = async () => {
  const response = await axios.delete('/api/user', {
    headers: authHeader(),
  });
  return response.data;
};

const addCourseToWishlist = async (courseId) => {
  const response = await axios.post(
    '/api/user/wishlist',
    {
      courseId,
    },
    {
      headers: authHeader(),
    }
  );
  return response.data;
};

const removeCourseFromWishlist = async (courseId) => {
  const response = await axios.delete(
    `/api/user/wishlist/${courseId}`,
    {
      headers: authHeader(),
    }
  );
  return response.data;
};

const enrollCourse = async (courseId) => {
  const response = await axios.post(
    '/api/user/enroll',
    {
      courseId,
    },
    { headers: authHeader() }
  );
  return response.data;
};

const dropCourse = async (courseId) => {
  const response = await axios.delete(
    `/api/user/enroll/${courseId}`,
    {
      headers: authHeader(),
    }
  );
  return response.data;
};


const completeLesson = async (courseId, lessonId) => {
  const response = await axios.post(
    `/api/user/complete/${courseId}/${lessonId}`,
    {},
    {
      headers: authHeader(),
    }
  );
  return response.data;
}

const userService = {
  fetchUser,
  updateUser,
  changePassword,
  deleteUser,
  addCourseToWishlist,
  removeCourseFromWishlist,
  enrollCourse,
  dropCourse,
  completeLesson
};

export default userService;
