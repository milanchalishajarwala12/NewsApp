import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase/app';
//import 'firebase/analytics';
import 'firebase/auth';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { color } from 'react-native-reanimated';

function LoginForm() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.container}>
      <TextInput
        required
        onChangeText={(text) => setUserName(text)}
        value={userName}
        style={Styles.textField}
        placeholder="Email"
        clearButtonMode="always"
      />
      <TextInput
        required
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={Styles.textField}
        placeholder="Password"
        clearButtonMode="always"
      />
      <TouchableOpacity
        style={Styles.loginButtonContainer}
        title="Login"
        onPress={() => {
          if (userName && password) {
            firebase
              .auth()
              .signInWithEmailAndPassword(userName, password)
              .then(() => {
                navigation.navigate('Articles');
              })
              .catch(function (error) {
                Alert.alert(error.message);
              });
          } else {
            Alert.alert('Please complete  all the details');
          }
        }}
      >
        <Text style={Styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: { marginTop: 20, marginHorizontal: 10, alignItems: 'stretch' },
  textField: {
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
    borderColor: '#373737',
    borderWidth: 0.5,
    height: 40,
  },
  loginButtonContainer: {
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#373737',
    marginHorizontal: 50,
    height: 40,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#373737',
  },
  loginButtonText: {
    color: 'white',
  },
});

export default LoginForm;
