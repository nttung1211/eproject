import axiosInstance from '../config/APIConfig';
import Favorite from '../models/Favorite';

const favoriteService = {
  async createFavorite(favorite: Favorite) {
    const response =  await axiosInstance.post<Favorite>(
      '/favorites',
      favorite
    );
    return response.data;
  },
  async deleteFavorite(id: number) {
    const response =  await axiosInstance.delete<void>(
      `/favorites/${id}`,
    );
    return response.data;
  },
};

export default favoriteService;