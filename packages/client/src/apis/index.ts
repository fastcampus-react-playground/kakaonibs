import axios from "axios";
import { API_HOST } from "../config";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export default AxiosInstance;
