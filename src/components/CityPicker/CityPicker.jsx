import {View, StyleSheet} from 'react-native';
import React from 'react';
import useAnimationStore from '../../stores/animationsStore';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import useCityStore from '../../stores/cityStore';
import CitiesToPick from '../CitiesToPick/CitiesToPick';
export default function CityPicker() {
  const {isCityInputFocused} = useAnimationStore();
  const {cityInInput} = useCityStore();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(isCityInputFocused ? 0 : -50, {duration: 300})},
      ],
      opacity: withTiming(isCityInputFocused ? 1 : 0, {duration: 300}),
    };
  });

  return (
    <Animated.View
      style={[styles.modal, animatedStyle]}
      pointerEvents={isCityInputFocused ? 'auto' : 'none'}>
      <View style={styles.container}>
        {cityInInput === '' ? null : <CitiesToPick />}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  container: {
    width: '100%',
    height: '80%',
    marginTop: '25%',
  },
  emptyTxt: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 10,
  },
});
