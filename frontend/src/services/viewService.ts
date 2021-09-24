import axiosInstance from '../config/APIConfig';
import View from '../models/View';

const viewService = {
  async getViewCountByFilmId(id: number) {
    const response = await axiosInstance.get<{ count: number }>(`films/${id}/views/count`);
    return response.data;
  },
  async createView(view: View) {
    const response = await axiosInstance.post<View>('/views', view);
    return response.data;
  },
};

export default viewService;
