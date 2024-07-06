import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Beranda from './screens/Beranda';
import Info from './screens/Info';
import Maghrib from './router/Maghrib';
import Isya from './router/Isya';
import Dzuhur from './router/Dzuhur';
import Ashar from './router/Ashar';
import Subuh from './router/Subuh';
import Privasi from './screens/Privasi';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Privasi"
        component={Privasi}
        options={{
          tabBarLabel: 'Privasi Police',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="police-badge"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Maghrib" component={Maghrib} />
        <Stack.Screen name="Isya" component={Isya} />
        <Stack.Screen name="Dzuhur" component={Dzuhur} />
        <Stack.Screen name="Ashar" component={Ashar} />
        <Stack.Screen name="Subuh" component={Subuh} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({});
