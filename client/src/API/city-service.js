import axios from 'axios';

const path = 'http://localhost:5000/api/cities';

export default class CityService {
  static async getAll(limit, page){
    const response = await axios.get(path, {
      params: {
        _limit: limit,
        _page: page
      }
    });
    return response
  }
  static async create(newCity){
    const response = await axios.post('http://localhost:5000/api/cities', {
      ...newCity 
    });
    return response
  }
  static async update(updatedCity){
    const response = await axios.put(`http://localhost:5000/api/cities/${updatedCity.id}`, {...updatedCity});
    return response
  }
  static async delete(id){
    const response = await axios.delete(`http://localhost:5000/api/cities/${id}`);
    return response
  }
}