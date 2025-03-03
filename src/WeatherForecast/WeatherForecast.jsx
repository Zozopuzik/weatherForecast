import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../pages/MainScreen/MainScreen';
import MapScreen from '../pages/MapScreen/MapScreen';
import CityScreen from '../pages/CityScreen/CityScreen';

const Stack = createNativeStackNavigator();

export default function WeatherForecast() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="City" component={CityScreen} />
      </Stack.Navigator>
    </>
  );
}
