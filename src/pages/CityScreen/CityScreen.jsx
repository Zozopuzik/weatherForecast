import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import useCityStore from '../../stores/cityStore';
import CurrentWeatherCard from '../../components/CurrentWeatherCard/CurrentWeatherCard';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';
import weatherApi from '../../api/weatherApi';
import citiesAsyncStorage from '../../asyncStorages/citiesAsyncStorage';

export default function CityScreen() {
  const {watchList, selectedCity, setWatchList} = useCityStore();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      console.log('selected city', selectedCity);
      setLoading(true);
      const weatherData = await weatherApi.getWeather(selectedCity);
      console.log('weather:', weatherData);
      setWeather(weatherData);
      setLoading(false);
    })();
  }, []);

  const handleAddCity = async name => {
    try {
      const updatedStoredCities = await citiesAsyncStorage.addCity(name);
      console.log(updatedStoredCities);
      setWatchList(updatedStoredCities);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveCity = async name => {
    const updatedStoredCities = await citiesAsyncStorage.removeCity(name);
    console.log(updatedStoredCities);
    setWatchList(updatedStoredCities);
  };
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.cityName}>{selectedCity.toponymName}</Text>
        <TouchableOpacity
          onPress={() =>
            watchList.includes(selectedCity.toponymName)
              ? handleRemoveCity(selectedCity.toponymName)
              : handleAddCity(selectedCity.toponymName)
          }>
          <Text style={styles.btnTxt}>
            {watchList.includes(selectedCity.toponymName)
              ? 'Remove from watch list'
              : 'Add to watch list'}
          </Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#000" style={styles.loader} />
      ) : (
        <>
          <CurrentWeatherCard current={weather.current} />
          <WeeklyForecast forecast={weather.forecast.forecastday} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  txtContainer: {
    width: '80%',
    marginLeft: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  countryName: {
    fontSize: 18,
    color: '#000',
  },
  loader: {
    marginTop: 20,
  },
  btnTxt: {
    fontSize: 20,
    color: 'blue',
  },
});
