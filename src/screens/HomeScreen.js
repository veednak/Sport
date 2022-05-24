import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectBox from 'react-native-multi-selectbox';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {authentication} from '../../firebase/firebase';

const HomeScreen = () => {
  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();

  const K_GENDER = [
    {
      item: 'Мужской',
    },
    {
      item: 'Женский',
    },
  ];

  const [gender, setGender] = useState({
    item: 'Пол:',
  });

  const storage = async (id, text) => {
    try {
      await AsyncStorage.setItem(id, text);
    } catch (err) {
      alert(err);
    }
  };

  function onChangeGender() {
    return val => {
      setGender(val);
      storage('Gender', val.item);
    };
  }

  const getData = () => {
    try {
      AsyncStorage.getItem(authentication.currentUser.email).then(value => {
        if (value != 'stop') {
          navigation.replace('ManScreen');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const pressNext = async text => {
    try {
      await AsyncStorage.setItem(authentication.currentUser.email, text);
      navigation.navigate('ManScreen');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Личные данные</Text>
        <View style={styles.selectBox}>
          <SelectBox
            label={'Пол'}
            options={K_GENDER}
            value={gender}
            onChange={onChangeGender()}
          />
        </View>
        <Text>Уровень физической подготовки</Text>
        <TouchableOpacity
          onPress={() => pressNext('Высокий')}
          style={styles.button}>
          <Text style={styles.buttonText}>Высокий</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pressNext('Средний')}
          style={styles.button}>
          <Text style={styles.buttonText}>Средний</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pressNext('Низкий')}
          style={styles.button}>
          <Text style={styles.buttonText}>Низкий</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  header: {
    marginBottom: 50,
  },
  textHeader: {
    marginBottom: 5,
    fontSize: RFValue(30),
  },
  input: {
    marginBottom: 20,
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: RFValue(200),
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
    padding: 15,
    width: RFValue(200),
    backgroundColor: '#0782F9',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: RFValue(16),
    color: 'white',
  },
  selectBox: {
    width: RFValue(200),
  },
});
