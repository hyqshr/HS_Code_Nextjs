import axios from 'axios';

const sendRequest = async (searchTerm) => {
  try {
    const response = await axios.get(`http://3.94.98.114/hs_code?search=${searchTerm}`);
    const data = response.data;
    // Handle the data as needed, e.g., store it in state for rendering.
  } catch (error) {
    // Handle errors, e.g., show an error message to the user.
  }
};

export { sendRequest };
