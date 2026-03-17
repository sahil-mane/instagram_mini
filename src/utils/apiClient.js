import { useAuthStore } from "@/store/authStore";
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_LIVE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      const logout = useAuthStore.getState().logout;

      logout(); // zustand store clear
      window.location.href = "/login"; // redirect
    }

    return Promise.reject(error);
  },
);

export default apiClient;
