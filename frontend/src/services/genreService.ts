import axiosInstance from '../config/APIConfig';
import Genre from '../models/Genre';

const genreService = {
  async getAllGenres() {
    const response =  await axiosInstance.get<Genre[]>(
      `/genres`
    );
    return response.data;
  },
};

export default genreService;