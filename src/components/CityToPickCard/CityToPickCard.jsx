import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import useCityStore from '../../stores/cityStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CityToPickCard({city}) {
  const navigation = useNavigation();

  const {setSelectedCity} = useCityStore();

  const handlePickCity = () => {
    setSelectedCity({
      toponymName: city.toponymName,
    });
    navigation.navigate('City');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePickCity()}>
      <View style={styles.txtContainer}>
        <Text style={styles.mainTxt}>{city.toponymName}</Text>
        <Text style={styles.secondaryTxt}>{city.countryName}</Text>
      </View>
      <View>
        <Ionicons name="arrow-forward" size={30} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    zIndex: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
  txtContainer: {
    width: '70%',
  },
  mainTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
