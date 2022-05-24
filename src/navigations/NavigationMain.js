import React, {useEffect} from 'react';
import Profile from '../screens/Profile';
import MainList from '../screens/ListScreen/MainList';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const NavigationMain = () => {
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

export default NavigationMain;
