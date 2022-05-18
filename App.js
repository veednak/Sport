import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';

import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ManScreen from './src/screens/ManScreen';
import Profile from './src/screens/Profile';
import MainList from './src/screens/ListScreen/MainList';
import List1 from './src/screens/ListScreen/List1';
import RunningList from './src/screens/ListScreen/RunningList';
import Navigation1 from './src/navigations/Navigation1';
import Navigation2 from './src/navigations/Navigation2';
import {Button} from 'react-native-elements';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
          name="Navigation1"
          component={Navigation1}
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
          name="Navigation2"
          component={Navigation2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
