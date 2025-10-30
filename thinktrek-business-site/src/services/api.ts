import axios from 'axios';

export const API_BASE_URL = 'http://localhost:8088';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// =================== AUTHORS =================== //
// 👇 ADD THE AUTHORS API HERE 👇
export const authorsAPI = {
  register: (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    bio?: string;
    image_url?: string;
  }) => api.post('/authors/register', data),
  
  verify: (data: { email: string; verificationCode: string }) => 
    api.post('/authors/verify', data),
  
  login: (credentials: { email: string; password: string }) => 
    api.post('/authors/login', credentials),
  
  getAll: () => api.get('/authors'),
  
  getById: (id: number) => api.get(`/authors/${id}`),
  
  update: (id: number, data: any) => api.put(`/authors/${id}`, data),
  
  delete: (id: number) => api.delete(`/authors/${id}`),
};

// =================== BLOGS =================== //
export const blogsAPI = {
  getAll: () => api.get('/blogs'),
  getById: (id: number) => api.get(`/blogs/${id}`),
  getByAuthor: (authorId: number) => api.get(`/blogs/author/${authorId}`),
  create: (data: any) => api.post('/blogs', data),
  update: (id: number, data: any) => api.put(`/blogs/${id}`, data),
  delete: (id: number) => api.delete(`/blogs/${id}`),


  
};

export default api;