import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "/api/",
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.interceptors.response.use((response) => response);

export default apiClient;
