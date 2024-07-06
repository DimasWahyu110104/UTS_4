// src/screens/IsyaScreen.js
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

function Isya() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Niat Sholat Isya</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.arabicText}>
          أُصَلِّيْ فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ
          الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالٰى
        </Text>
        <Text style={styles.translationText}>
          "Aku niat sholat fardhu Isya empat rakaat menghadap kiblat, karena
          Allah Ta'ala."
        </Text>
      </ScrollView>
    </View>
  );
}
export default Isya;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  scrollView: {
    width: '90%',
  },
  arabicText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  translationText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});
