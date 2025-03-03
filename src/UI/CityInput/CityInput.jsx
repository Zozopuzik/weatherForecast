import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import useAnimationStore from '../../stores/animationsStore.js';
import useCityStore from '../../stores/cityStore.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CityInput() {
  const {cityInInput, setCityInInput} = useCityStore();
  const {setCityInputFocused, setCityInputBlured} = useAnimationStore();

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#A0A0A0" />

      <TextInput
        placeholder="Search"
        placeholderTextColor="#A0A0A0"
        style={styles.input}
        value={cityInInput}
        onChangeText={value => setCityInInput(value)}
        onFocus={() => setCityInputFocused()}
        onBlur={() => setCityInputBlured()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
    zIndex: 3,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 0.9,
    color: '#fff',
    fontSize: 16,
    height: '100%',
  },
});
