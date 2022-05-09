/** @format */

import axios from 'axios';
import authHeader from './authHeader';

const fetchCourses = async () => {
  const response = await axios.get('/api/courses');
  return response.data;
};

const fetchCourseBySlug = async (slug) => {
  const response = await axios.get(`/api/courses/slug/${slug}`);
  return response.data;
};

const addReview = async (courseId, reviewId) => {
  const response = await axios.post(
    `/api/courses/${courseId}/reviews`,
    { reviewId },
    { headers: authHeader() }
  );
  return response.data;
};

const coursesService = {
  fetchCourses,
  fetchCourseBySlug,
  addReview,
};

export default coursesService;
