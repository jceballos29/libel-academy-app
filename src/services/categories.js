import axios from 'axios';


const fetchCategories = async () => {
  const response = await axios.get('/api/categories');
  return response.data;
}


const categoriesService = {
  fetchCategories
}


export default categoriesService;