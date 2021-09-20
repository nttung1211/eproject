import axiosInstance from '../config/APIConfig';
import Film from '../models/Film';
import Genre from '../models/Genre';

const filmService = {
  async getBrowseData(filmsPerGenre: number) {
    const response =  await axiosInstance.get<{ genre: Genre; films: Film[] }[]>(
      '/films/browse?size=' + filmsPerGenre
    );
    return response.data;
  },
};

export default filmService;
