import axios from 'axios';


const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response  = await axios.post('/api/storage', formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

const storageService = {
  uploadFile,
};


export default storageService;