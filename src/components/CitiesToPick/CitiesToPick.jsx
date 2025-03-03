import {
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useCityStore from '../../stores/cityStore';
import citiesApi from '../../api/citiesApi.js';
import CityToPickCard from '../CityToPickCard/CityToPickCard';

export default function CitiesToPick() {
  const [fetchedCities, setFetchedCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const {cityInInput} = useCityStore();

  useEffect(() => {
    (async () => {
      setLoading(true);
      console.log(cityInInput);
      const fetchedData = await citiesApi.getCities(cityInInput);
      setFetchedCities(fetchedData);
      setLoading(false);
    })();
  }, [cityInInput]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#fff"
              style={styles.loader}
            />
          ) : (
            <ScrollView keyboardShouldPersistTaps="handled">
              {fetchedCities.map((city, index) => (
                <CityToPickCard city={city} key={index} />
              ))}
            </ScrollView>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
