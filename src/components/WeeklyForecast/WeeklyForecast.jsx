import {ScrollView} from 'react-native';
import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';

export default function WeeklyForecast({forecast}) {
  return (
    <ScrollView>
      {forecast.map((day, index) => (
        <ForecastCard key={index} day={day} />
      ))}
    </ScrollView>
  );
}
