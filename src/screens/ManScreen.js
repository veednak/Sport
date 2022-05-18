import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {authentication} from '../../firebase/firebase';
import {useNavigation} from '@react-navigation/core';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ManScreen = () => {
  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();

  const getData = () => {
    try {
      AsyncStorage.getItem('Sport').then(value => {
        if (value != 'stop') {
          navigation.replace('Navigation2');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const pressNext = async text => {
    try {
      await AsyncStorage.setItem('Sport', text);
      navigation.navigate('Navigation2');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>
          Выберите направление для тренировки
        </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => pressNext('Кроссфит')}
          style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pressNext('Стречинг')}
          style={styles.button}>
          <Text style={styles.buttonText}>Стречинг</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pressNext('Атлетическая гимнастика')}
          style={styles.button}>
          <Text style={styles.buttonText}>Атлетическая гимнастика</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    paddingTop: 30,
  },
  textHeader: {
    marginBottom: 5,
    fontSize: RFValue(18),
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
