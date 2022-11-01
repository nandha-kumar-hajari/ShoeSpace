import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  AdminHome,
  OnboardingScreen,
  ProductEditScreen,
  UserHome,
  ProductDetailsScreen,
  CartScreen,
} from '../screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

// const Stack = createNativeStackNavigator();
const Stack = createSharedElementStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer theme={{colors: {background: '#1A202C'}}}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}
        initialRouteName="DrawerNavigator">
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminHome"
          component={AdminHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserHome"
          component={UserHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductEditScreen"
          component={ProductEditScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
