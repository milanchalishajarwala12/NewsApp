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

function SignUpForm() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <View style={Styles.container}>
      <TextInput
        required
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        style={Styles.textField}
        placeholder="Firstname"
      />
      <TextInput
        required
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        style={Styles.textField}
        placeholder="Lastname"
      />
      <TextInput
        required
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={Styles.textField}
        placeholder="Email"
      />
      <TextInput
        required
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={Styles.textField}
        placeholder="Password"
      />
      <TextInput
        required
        secureTextEntry
        onChangeText={(text) => setPassword2(text)}
        value={password2}
        style={Styles.textField}
        placeholder="Confirm Password"
      />
      <TouchableOpacity
        style={Styles.signupButtonContainer}
        title="Sign Up"
        onPress={() => {
          if (firstName && lastName && email && password && password2) {
            if (password == password2) {
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                  firstName.replace('');
                  navigation.navigate('Articles');
                })
                .catch(function (error) {
                  Alert.alert(error.message);
                });
            } else {
              Alert.alert('Passwords do not match');
            }
          } else {
            Alert.alert('Please complete  all the details');
          }
        }}
      >
        <Text style={Styles.signupButtonText}>Sign Up</Text>
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
  signupButtonContainer: {
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
  signupButtonText: { color: 'white' },
});

export default SignUpForm;
