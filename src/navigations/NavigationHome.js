import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ManScreen from '../screens/ManScreen';
import Profile from '../screens/Profile';
import MainList from '../screens/ListScreen/MainList';
import List1 from '../screens/ListScreen/List1';
import RunningList from '../screens/ListScreen/RunningList';
import NavigationMain from './NavigationMain';
import NavigationGymnastics from './NavigationGymnastics';
import ListGymnastics from '../screens/ListScreen/ListGymnastics';
import ListStretching from '../screens/ListScreen/ListStretching';
import NavigationStretching from './NavigationStretching';

const Stack = createNativeStackNavigator();

const NavigationHome = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ManScreen"
          component={ManScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainList"
          component={MainList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List1"
          component={List1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RunningList"
          component={RunningList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NavigationMain"
          component={NavigationMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NavigationGymnastics"
          component={NavigationGymnastics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListGymnastics"
          component={ListGymnastics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListStretching"
          component={ListStretching}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NavigationStretching"
          component={NavigationStretching}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHome;

const styles = StyleSheet.create({});
