import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Articles from './Articles';
import ArticleDetails from './ArticleDetails';
import * as firebase from 'firebase/app';
const Stack = createStackNavigator();

export default function ArticlesHome() {
  const firebaseConfig = {
    apiKey: 'AIzaSyDf5w0QbrK30OtVAwI7qtIqRvKCez47r3Y',
    authDomain: 'hybridapp-9ab53.firebaseapp.com',
    databaseURL: 'https://hybridapp-9ab53.firebaseio.com',
    projectId: 'hybridapp-9ab53',
    storageBucket: 'hybridapp-9ab53.appspot.com',
    messagingSenderId: '103104836739',
    appId: '1:103104836739:web:98a1011815fd832af497b6',
    measurementId: 'G-ZGR3SMW88G',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  var rootPage = 'Articles';
  if (firebase.auth().currentUser == null) {
    rootPage = 'Login';
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={rootPage} screenOptions={{}}>
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{
            headerLeft: null,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{ headerTitle: 'Article Details' }}
          name="ArticleDetails"
          component={ArticleDetails}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerTitle: 'Sign Up', headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
