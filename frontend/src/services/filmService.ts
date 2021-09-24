import axiosInstance from '../config/APIConfig';
import Film from '../models/Film';
import Genre from '../models/Genre';
import Page from '../models/Page';

const filmService = {
  async getBrowseData(filmsPerGenre: number) {
    const response =  await axiosInstance.get<{ genre: Genre; films: Film[] }[]>(
      '/films/browse?size=' + filmsPerGenre
    );
    return response.data;
  },
  async getFilmsByGenre(genreName: string, page: number) {
    const response =  await axiosInstance.get<Page<Film>>(
      `/films/${genreName}?page=${page}&size=10&sortBy=createdAt`
    );
    return response.data;
  },
  async getFavoriteFilms(page: number) {
    const response =  await axiosInstance.get<Page<Film>>(
      `/films/favorites?page=${page}&size=10&sortBy=createdAt`
    );
    return response.data;
  },
};

export default filmService;
