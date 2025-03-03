import {Text, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import useAnimationStore from '../../stores/animationsStore';

export default function Header({title}) {
  const {isCityInputFocused} = useAnimationStore();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(isCityInputFocused ? -50 : 0, {duration: 300})},
      ],
      opacity: withTiming(isCityInputFocused ? 0 : 1, {duration: 300}),
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.titleText}>{title}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: 50,
    justifyContent: 'flex-end',
    paddingLeft: '2%',
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
