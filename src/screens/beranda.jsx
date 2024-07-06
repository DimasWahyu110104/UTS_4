// src/screens/HomeScreen.js
import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

const prayerTimes = [
  {id: '1', name: 'Subuh', time: '04:16'},
  {id: '2', name: 'Dzuhur', time: '11:31'},
  {id: '3', name: 'Ashar', time: '14:52'},
  {id: '4', name: 'Maghrib', time: '17:23'},
  {id: '5', name: 'Isya', time: '18:37'},
];

function Beranda({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jadwal Dan Niat Sholat Lima Waktu</Text>
      <FlatList
        data={prayerTimes}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.prayerName}>{item.name}</Text>
            <Text style={styles.prayerTime}>{item.time}</Text>
            {item.name === 'Subuh' && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Subuh')}>
                <Text style={styles.buttonText}>Niat Maghrib</Text>
              </TouchableOpacity>
            )}
            {item.name === 'Maghrib' && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Maghrib')}>
                <Text style={styles.buttonText}>Niat Maghrib</Text>
              </TouchableOpacity>
            )}
            {item.name === 'Isya' && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Isya')}>
                <Text style={styles.buttonText}>Niat Isya</Text>
              </TouchableOpacity>
            )}
            {item.name === 'Dzuhur' && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Dzuhur')}>
                <Text style={styles.buttonText}>Niat Dzuhur</Text>
              </TouchableOpacity>
            )}
            {item.name === 'Ashar' && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Ashar')}>
                <Text style={styles.buttonText}>Niat Ashar</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#87ceeb',
    borderRadius: 10,
    width: '90%',
  },
  prayerName: {
    fontSize: 18,
    color: '#fff',
  },
  prayerTime: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4682b4',
    padding: 15,
    borderRadius: 10,
    width: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Beranda;
