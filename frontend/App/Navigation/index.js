import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';
import SignIn from '../Screens/Auth/Signup';
import Welcome from '../Screens/Auth/Welcome';
import WelcomeScreenTwo from '../Screens/Auth/WelcomeScreenTwo';
import WelcomeScreenThree from '../Screens/Auth/WelcomeScreenThree';
import WelcomeScreenFour from '../Screens/Auth/WelcomeScreenFour';
import Home from '../Screens/Home';
import BottomTabNavigator from './BottomNavigation';
import TaskScreen from '../Screens/TaskScreen';
import ProgressScreen from '../Screens/ProgressScreen';
import { storage, useAuth } from '../storage';

const Stack = createNativeStackNavigator();

function MainStack() {

  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? 'Home' : 'Welcome'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TaskScreen" component={TaskScreen} />
      <Stack.Screen name="ProgressScreen" component={ProgressScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="WelcomeScreenTwo" component={WelcomeScreenTwo} />
      <Stack.Screen
        name="WelcomeScreenThree"
        component={WelcomeScreenThree}
      />
      <Stack.Screen
        name="WelcomeScreenFour"
        component={WelcomeScreenFour}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default MainStack;
