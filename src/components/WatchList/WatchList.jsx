import {StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import useCityStore from '../../stores/cityStore';
import WatchListCard from '../WatchListCard/WatchListCard';
import citiesAsyncStorage from '../../asyncStorages/citiesAsyncStorage';

export default function WatchList() {
  const {watchList, setWatchList} = useCityStore();
  useEffect(() => {
    (async () => {
      const storedCities = await citiesAsyncStorage.getCities();
      setWatchList(storedCities);
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {watchList.map((element, index) => (
        <WatchListCard key={index} city={element} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
