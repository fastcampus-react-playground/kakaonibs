import axiosInstance from "../apis";

interface User {
  username: string;
}

export function fetchUserList() {
  return axiosInstance.get("/user");
}

export function fetchMyProfile() {
  return axiosInstance.get("/user/me");
}

export function login(body: User) {
  return axiosInstance.post("/user/login", body);
}

export function logout() {
  return axiosInstance.post("/user/logout");
}
