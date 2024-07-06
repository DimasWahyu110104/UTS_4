import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const Info = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Niat sholat</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.privacySection}>
          <Text style={styles.sectionTitle}>Kebijakan Privasi</Text>
          <Text style={styles.sectionParagraph}>
            Kami menghargai privasi Anda dan berkomitmen untuk melindungi data
            pribadi Anda. Informasi yang kami kumpulkan hanya akan digunakan
            untuk meningkatkan pengalaman pengguna dalam menggunakan aplikasi
            ini.
          </Text>
          <Text style={styles.sectionParagraph}>
            Kami tidak akan membagikan informasi pribadi Anda kepada pihak
            ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum.
            Data yang kami kumpulkan meliputi:
          </Text>
          <View style={styles.dataList}>
            <Text>- Informasi penggunaan aplikasi</Text>
            <Text>- Preferensi pengguna</Text>
            <Text>- Feedback dan saran dari pengguna</Text>
          </View>
          <Text style={styles.sectionParagraph}>
            Dengan menggunakan aplikasi ini, Anda menyetujui pengumpulan dan
            penggunaan informasi sesuai dengan kebijakan privasi ini.
          </Text>
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
    backgroundColor: '#4682b4',
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
    color: '#4682b4',
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

export default Info;
