import axiosInstance from '../config/APIConfig';
import CONFIG from '../constants/config';
import User from '../models/User';

const authService = {
  async signIn(username: string, password: string) {
    const response = await axiosInstance.post<{ token: string }>('/auth/login', {
      username,
      password,
    });
    localStorage.setItem(CONFIG.storedTokenName, response.data.token);
    const currentUser = await this.fetchCurrentUser();
    return currentUser;
  },

  async signUp(user: User) {
    return await axiosInstance.post<{ token: string }>('/auth/register', user);
  },

  async fetchCurrentUser() {
    const response = await axiosInstance.get<User>('/auth/user');
    return response.data;
  }
};

export default authService;
