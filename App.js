import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Articles from './Components/Articles';
import ArticleDetails from './Components/ArticleDetails';
import * as firebase from 'firebase/app';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
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
  var rootPage = 'Articles';
  firebase.initializeApp(firebaseConfig);
  if (firebase.auth().currentUser == null) {
    rootPage = 'Login';
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={rootPage}
        screenOptions={{ headerStyle: { backgroundColor: 'cyan' } }}
      >
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{
            headerLeft: null,
            // headerStyle: {
            //   backgroundColor: 'cyan',
            // },
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
