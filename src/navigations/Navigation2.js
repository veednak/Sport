import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import MainList from '../screens/ListScreen/MainList';
import {NavigationContainer} from '@react-navigation/native';
import Ionic from 'react-native-ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {authentication} from '../../firebase/firebase';

const Navigation2 = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainList"
        component={MainList}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Navigation2;
