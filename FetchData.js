import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase/app';
import 'firebase/database';

async function response() {
  let promise = firebase
    .database()
    .ref('articles')
    .once('value')
    .then(function (snapshot) {
      var res = Array(snapshot.val());
      createJsonData((res = res));
    });
}
function createJsonData(res) {
  return res;
}

export { response, createJsonData };
