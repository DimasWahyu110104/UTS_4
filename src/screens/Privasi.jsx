import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const Privasi = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Niat Sholat</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informasi Aplikasi</Text>
          <Text style={styles.sectionParagraph}>
            Selamat datang di aplikasi Niat Sholat! Aplikasi ini dirancang untuk
            membantu umat Muslim mengingat dan melafalkan niat sholat dengan
            benar sebelum melaksanakan sholat.
          </Text>
          <Text style={styles.sectionParagraph}>
            Fitur utama dari aplikasi ini meliputi:
          </Text>
          <View style={styles.featureList}>
            <Text>- Mengingatkan niat sholat</Text>
            <Text>- Panduan langkah-langkah sholat</Text>
            <Text>- Tips dan trik untuk melaksanakan sholat dengan benar</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Niat Sholat. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    backgroundColor: '#007BFF',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: '#ffffff',
  },
  mainContent: {
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#007BFF',
    marginBottom: 10,
  },
  sectionParagraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  featureList: {
    marginLeft: 20,
    marginBottom: 10,
  },
  dataList: {
    marginLeft: 20,
    marginBottom: 10,
  },
  privacySection: {
    marginBottom: 20,
  },
  footer: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e7e7e7',
  },
  footerText: {
    fontSize: 12,
    color: '#6c757d',
  },
});

export default Privasi;
