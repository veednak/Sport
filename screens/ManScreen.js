import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ManScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Уровень физической подготовки</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Высокий</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Средний</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Низкий</Text>
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
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    padding: 15,
    width: 250,
    borderRadius: 10,
    backgroundColor: '#0782F9',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
