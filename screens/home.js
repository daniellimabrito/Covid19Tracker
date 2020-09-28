import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {  AntDesign } from '@expo/vector-icons/AntDesign';
//import { MaterialCommunityIcons } from '@expo/vector-icons/MaterialCommunityIcons';
import CountryCharts from '../screens/list';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Home({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Continents') {
            iconName = focused
              ? 'earth'
              : 'earth-off';
          } else if (route.name === 'Countries') {
            iconName = focused ? 'flag' : 'flag-variant';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fefefe'
        }
      }}
      >
        <Tab.Screen name="Continents" component={HomeScreen} />
        <Tab.Screen name="Countries" component={CountryCharts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}