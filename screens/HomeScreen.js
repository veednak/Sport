import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {authentication} from '../firebase/firebase';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    authentication
      .signOut()
      .then(() => {
        navigation.replace('Login');
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
        <Text>Возраст</Text>
        <TextInput style={styles.input} />
        <Text>Пол</Text>
        <TextInput style={styles.input} />
        <Text>Рост</Text>
        <TextInput style={styles.input} />
        <Text>Вес</Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity onPress={pressNext} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
    fontSize: 33,
  },
  input: {
    marginBottom: 7,
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    padding: 15,
    width: '60%',
    backgroundColor: '#0782F9',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
});
