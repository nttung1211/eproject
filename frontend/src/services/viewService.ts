import axiosInstance from '../config/APIConfig';
import View from '../models/View';

const viewService = {
  async createView(view: View) {
    const response =  await axiosInstance.post<View>(
      '/views',
      view
    );
    return response.data;
  }
};

export default viewService;