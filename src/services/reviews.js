import axios from 'axios';
import authHeader from './authHeader';


const createReview =  async (review) => {
  try {
    const response = await axios.post(
      '/api/reviews',
      review,
      { headers: authHeader() }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}


const reviewService = { createReview };


export default reviewService;