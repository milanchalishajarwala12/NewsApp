import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import SignUpForm from '../Forms/SignUpForm';
import { useNavigation } from '@react-navigation/native';

function SignUp() {
  var navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>New User</Text>
      <SignUpForm />
      <Text style={styles.signUpLinkView}>
        <Text style={styles.signupTextBlack}>Already a User?</Text>
        <Text
          onPress={() => navigation.popToTop()}
          style={styles.signupTextBlue}
        >
          {' '}
          Login
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 30, marginHorizontal: 20 },
  titleText: { fontSize: 35, textAlign: 'left' },
  signupTextBlack: { color: '#373737' },
  signupTextBlue: { color: '#726E6D' },
  signUpLinkView: { textAlign: 'center', marginTop: 20 },
});

export default SignUp;
