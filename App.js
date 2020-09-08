import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Articles from './Components/Articles';
import ArticleDetails from './Components/ArticleDetails';
import * as firebase from 'firebase/app';
import SegmentedControl from '@react-native-community/segmented-control';
import Movies from './Components/Movies';
import ArticlesHome from './Components/ArticlesHome';

const Stack = createStackNavigator();

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        values={['Movies', 'Articles']}
        selectedIndex={index}
        onChange={(event) => {
          setIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      {index == 0 ? <Movies /> : <ArticlesHome />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  insideContainer: { alignItems: 'center', justifyContent: 'center' },
});

//git remote add origin https://github.com/milanchalishajarwala12/HybridApp.git
