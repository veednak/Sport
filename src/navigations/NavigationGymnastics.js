import React from 'react';
import Profile from '../screens/Profile';
import ListGymnastics from '../screens/ListScreen/ListGymnastics';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const NavigationGymnastics = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ListGymnastics"
        component={ListGymnastics}
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

export default NavigationGymnastics;
