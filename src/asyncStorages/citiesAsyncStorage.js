import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'cities_watchlist';

const citiesAsyncStorage = {
  getCities: async () => {
    try {
      const storedCities = await AsyncStorage.getItem(STORAGE_KEY);
      return storedCities ? JSON.parse(storedCities) : [];
    } catch (error) {
      console.error('Error initializing storage:', error);
      return [];
    }
  },

  addCity: async city => {
    try {
      const cities = await citiesAsyncStorage.getCities();
      if (!cities.includes(city)) {
        const updatedCities = [...cities, city];
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCities));
        return updatedCities;
      }
      return cities;
    } catch (error) {
      console.error('Error adding city:', error);
    }
  },

  removeCity: async city => {
    try {
      const cities = await citiesAsyncStorage.getCities();
      const updatedCities = cities.filter(item => item !== city);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCities));
      return updatedCities;
    } catch (error) {
      console.error('Error removing city:', error);
    }
  },
  clearStore: async () => {
    const updatedCities = [];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCities));
    return updatedCities;
  },
};

export default citiesAsyncStorage;
