import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useIsFocused} from '@react-navigation/native';
import {HelloAnimation} from '../assets/animations';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import {Button} from '../components';

interface OnboardingScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}
export const OnnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play(0, 290);
  }, []);

  return (
    <SafeAreaView style={styles.mainViewStyle}>
      <LottieView
        ref={animationRef}
        source={HelloAnimation}
        onAnimationFinish={() => {
          setShowButtons(true);
        }}
        autoSize
        loop={false}
      />

      {showButtons ? (
        <View>
          <Button
            text="Continue as Admin"
            onPress={() => navigation.navigate('AdminHome')}
          />
          <Button
            text="Continue as User"
            onPress={() => navigation.navigate('UserHome')}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default OnnboardingScreen;

const styles = StyleSheet.create({
  mainViewStyle: {flex: 1, alignItems: 'center', backgroundColor: '#1A202C'},
});
