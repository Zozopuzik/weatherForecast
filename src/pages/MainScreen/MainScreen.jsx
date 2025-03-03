import {View, StyleSheet} from 'react-native';
import React  from 'react';
import Header from '../../UI/Header/Header';
import CityInput from '../../UI/CityInput/CityInput';
import CityPicker from '../../components/CityPicker/CityPicker';
import MapBtn from '../../components/MapBtn/MapBtn';
import WatchList from '../../components/WatchList/WatchList';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Header title="Weather" />
      <CityInput />
      <CityPicker />
      <WatchList />
      <MapBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
