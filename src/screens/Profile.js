import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {authentication} from '../../firebase/firebase';
import {useNavigation} from '@react-navigation/core';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectBox from 'react-native-multi-selectbox';

const Profile = () => {
  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();
  let [lvl, setLvl] = useState();
  let [sport, setSport] = useState();
  const [selectedTeam, setSelectedTeam] = useState({
    item: 'Выбрать другой уровень:',
  });

  const [selectedSport, setSelectedSport] = useState({
    item: 'Выбрать другой комплекс:',
  });

  const K_SPORT = [
    {
      item: 'Кроссфит',
    },
    {
      item: 'Стречинг',
    },
    {
      item: 'Атлетическая гимнастика',
    },
  ];

  const K_LVL = [
    {
      item: 'Высокий',
    },
    {
      item: 'Средний',
    },
    {
      item: 'Низкий',
    },
  ];

  const getData = () => {
    try {
      AsyncStorage.getItem(authentication.currentUser.email).then(value => {
        if (value != null) {
          setLvl(value);
          selectedTeam.item == lvl;
        }
      });
    } catch (error) {
      console.log(error);
    }

    try {
      AsyncStorage.getItem('Sport').then(value => {
        if (value != null) {
          setSport(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const storage = async (id, text) => {
    try {
      await AsyncStorage.setItem(id, text);
    } catch (err) {
      alert(err);
    }
  };

  function onChangeLvl() {
    return val => {
      setLvl(val.item);
      storage(authentication.currentUser.email, val.item);
      setSelectedTeam(val);
    };
  }

  function onChangeSport() {
    return val => {
      setSport(val.item);
      storage('Sport', val.item);
      setSelectedSport(val);
    };
  }

  const handleSignOut = () => {
    storage(authentication.currentUser.email, 'stop');
    storage('Sport', 'stop');

    authentication
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <SelectBox
        label={'Уровень физической подготовки: ' + lvl}
        options={K_LVL}
        value={selectedTeam}
        onChange={onChangeLvl()}
      />
      <SelectBox
        label={'Комплекс упражнений: ' + sport}
        options={K_SPORT}
        value={selectedSport}
        onChange={onChangeSport()}
      />
      <Text>Email: {authentication.currentUser.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
