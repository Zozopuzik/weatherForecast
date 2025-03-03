import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function CurrentWeatherCard({current}) {
  return (
    <View style={styles.container}>
      <Text style={styles.condition}>Weather now</Text>
      <Text style={styles.temp}>{current.temp_c}°C</Text>
      <Text style={styles.condition}>{current.condition.text}</Text>
      <Image
        source={{uri: `https:${current.condition.icon}`}}
        style={styles.weatherIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    marginLeft: '10%',
    borderWidth: 2,
    marginTop: 20,
  },
  temp: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  condition: {
    fontSize: 18,
    color: '#000',
    marginVertical: 5,
  },
  weatherIcon: {
    width: 60,
    height: 60,
  },
});
