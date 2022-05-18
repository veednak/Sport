import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {authentication} from '../../../firebase/firebase';
import {useNavigation} from '@react-navigation/core';

const List1 = () => {
  const navigation = useNavigation();

  const pressNext = () => {
    navigation.navigate('RunningList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TextName}>Название упражнения</Text>
      <Text style={styles.Text}>
        Информация о приложении ляляллялялял, столько-то подходов для этого оно
        нужно лялялял
      </Text>
      <TouchableOpacity onPress={pressNext} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default List1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Text: {
    color: '#111111',
    marginBottom: 30,
    fontWeight: '700',
    fontSize: RFValue(16),
  },
  TextName: {
    marginBottom: 400,
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    padding: 15,
    width: RFValue(200),
    borderRadius: 10,
    backgroundColor: '#0782F9',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: RFValue(16),
  },
});
