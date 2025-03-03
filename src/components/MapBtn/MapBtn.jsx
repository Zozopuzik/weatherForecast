import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MapBtn() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Map')}>
      <Ionicons name="map-outline" size={30} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    bottom: 50,
    right: 50,
    borderWidth: 2,
  },
  text: {
    fontSize: 12,
    color: '#000',
  },
});
