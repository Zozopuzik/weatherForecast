import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import useCityStore from '../../stores/cityStore';

export default function WatchListCard({city}) {
  const navigation = useNavigation();
  const {setSelectedCity} = useCityStore();
  const navigateToCityScreen = city => {
    setSelectedCity({
      toponymName: city,
    });
    navigation.navigate('City');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToCityScreen(city)}>
      <Text style={styles.mainTxt}>{city}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTxt: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
});
