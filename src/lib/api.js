import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Your backend server URL
});

export const loginUser = async (userData) => {
  // Implement your login API call
};

export const signupUser = async (userData) => {
  // Implement your signup API call
};

// Add more API functions for profile and connections as needed
