import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function ForecastCard({day}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.date}>{day.date}</Text>
          <Text style={styles.condition}>{day.day.condition.text}</Text>
        </View>
        <Image
          source={{uri: `https:${day.day.condition.icon}`}}
          style={styles.weatherIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '60%',
    marginLeft: '20%',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
  },
  textContainer: {
    width: '80%',
  },
  date: {
    fontSize: 14,
    color: '#000',
    width: '100%',
    paddingLeft: 5,
  },
  condition: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    width: '80%',
    paddingLeft: 5,
  },
  weatherIcon: {
    width: 30,
    height: 30,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
