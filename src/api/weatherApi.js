import axios from 'axios';

const weatherApi = {
  getWeather: async city => {
    try {
      console.log('city', city);
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?q=${city.toponymName}&days=7&key=45ce1ea260ee42b38aa183454252502`,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default weatherApi;
