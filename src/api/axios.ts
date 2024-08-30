import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Usar la variable de entorno para la URL base
  withCredentials: true, // Esto asegura que las cookies se envíen con cada solicitud
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Evitar reintentos en endpoints específicos
    if (error.response.status === 401 && !originalRequest._retry) {
      if (originalRequest.url.includes('/authentication/signIn') || originalRequest.url.includes('/authentication/refresh')) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;
      try {
        await axiosInstance.get('/authentication/refresh'); // Cambia esto por el endpoint de tu API
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error('Refresh token is expired or invalid.');
        // Redirigir a la página de inicio de sesión o mostrar mensaje de error
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
