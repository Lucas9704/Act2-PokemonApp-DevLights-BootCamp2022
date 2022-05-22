import axios from "axios";

const API = axios.create({
	baseURL: "https://pokeapi.co/",
	timeout: 5000,
});

// Add a request interceptor
API.interceptors.request.use(
	function (config) {
		config.headers["x-rapidapi-host"] = "pokeapi.co";
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// Add a response interceptor
API.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
    const newError = {
      message: "Something went wrong", 
      status: error.response.status, 
      serverMessage: error.response?.data?.message,
    };
		return Promise.reject(newError);
	}
);

export { API };