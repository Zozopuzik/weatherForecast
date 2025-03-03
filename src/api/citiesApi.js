import axios from 'axios';
citiesApi = {
  getCities: async data => {
    try {
      const response = await axios.get(
        `https://secure.geonames.org/searchJSON?name_startsWith=${data}&maxRows=20&featureClass=P&username=zozik1337&lang=en`,
      );
      console.log(response);
      return response.data.geonames;
    } catch (error) {
      console.log(error);
    }
  },
};

export default citiesApi;
