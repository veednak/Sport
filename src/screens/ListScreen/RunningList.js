import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useNavigation} from '@react-navigation/core';

const RunningList = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(100);
  const handleSignOut = () => {
    navigation.navigate('List1');
  };
  return (
    <View style={styles.container}>
      <CircularProgress
        radius={90}
        value={value}
        textColor="#222"
        fontSize={20}
        valueSuffix={'%'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={3000}
        onAnimationComplete={handleSignOut}
      />
      <Text></Text>
    </View>
  );
};

export default RunningList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
