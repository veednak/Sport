import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {authentication} from '../../firebase/firebase';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    authentication
      .signOut()
      .then(() => {
        navigation.replace(screen);
      })
      .catch(error => alert(error.message));
  };

  const pressNext = () => {
    authentication
      .signOut()
      .then(() => {
        navigation.replace('ManScreen');
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Личные данные</Text>
        <Text>Пол</Text>
        <TextInput style={styles.input} />
        <Text>Уровень физической подготовки</Text>
        <TouchableOpacity onPress={pressNext} style={styles.button}>
          <Text style={styles.buttonText}>Высокий</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressNext} style={styles.button}>
          <Text style={styles.buttonText}>Средний</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressNext} style={styles.button}>
          <Text style={styles.buttonText}>Низкий</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
