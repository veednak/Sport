import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const MainList = () => {
  const navigation = useNavigation();

  const pressNext = () => {
    navigation.navigate('List1');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={pressNext} style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Кроссфит</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MainList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#87CEFA',
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    padding: 15,
    width: RFValue(310),
    borderRadius: 10,
    backgroundColor: '#0782F9',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: RFValue(16),
  },
});
