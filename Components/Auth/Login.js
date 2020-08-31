import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import LoginForm from '../Forms/LoginForm';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Welcome User</Text>
      <LoginForm />

      <Text style={styles.signUpLinkView}>
        <Text style={styles.signupTextBlack}>Don't Have an Account?</Text>
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signupTextBlue}
        >
          {' '}
          Sign Up
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

export default Login;
