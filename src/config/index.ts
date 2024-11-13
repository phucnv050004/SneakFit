import axios from 'axios';

const callApi = async () => {
  try {
    const response = await axios.get('http://localhost:3000');
    console.log(response.data);
  } catch (error) {
    console.error("Error calling API:", error);
  }
};

export default callApi;