import React from 'react';
import Profile from '../screens/Profile';
import ListStretching from '../screens/ListScreen/ListStretching';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const NavigationStretching = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ListStretching"
        component={ListStretching}
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

export default NavigationStretching;
