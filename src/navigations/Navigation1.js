import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ManScreen from '../screens/ManScreen';
import List1 from '../screens/ListScreen/List1';
import {NavigationContainer} from '@react-navigation/native';
import Ionic from 'react-native-ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {authentication} from '../../firebase/firebase';

const Navigation1 = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ManScreen"
        component={ManScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Navigation1;
