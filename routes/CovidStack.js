import 'react-native-gesture-handler';
import React, { useState }  from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import List from '../screens/list';
import CountryDetails from '../screens/countryDetails';
import CountryMap from '../screens/countryMap';
import RandomUser from '../screens/randomUser';
import CountryInfo from '../screens/countryInfo';

const screens = {

    List : {
        screen : List,
            navigationOptions: (props) =>  {
            return {
            //headerTitle: () => {  },
            headerTitle: 'COVID-19',
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: '#074a75' }
            }
            }
    },
    RandomUser : {
        screen : RandomUser,
            navigationOptions: (props) =>  {
            return {
            //headerTitle: () => {  },
            headerTitle: 'Users',
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: '#074a75' }
            }
            }
    },
    CountryMap : {
        screen : CountryMap,
        navigationOptions: (prop) =>  {
          return {
          //headerTitle: () => { },
          headerTitle: 'Map Info',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#074a75' }
          }       
        },
    },
    CountryDetails : {
        screen : CountryDetails,
        navigationOptions: (prop) =>  {
          return {
          //headerTitle: () => { },
          headerTitle: 'Stats',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#074a75' }
          }       
        },
    },

    CountryInfo : {
        screen : CountryInfo,
        navigationOptions: (prop) =>  {
          return {
          //headerTitle: () => { },
          headerTitle: 'Info',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#074a75' }
          }       
        },
    }
}

const RootNavigator = createStackNavigator(screens);


export default createAppContainer(RootNavigator);