import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

function ArticleDetails({ route }) {
  const { title, text, imgURL, date } = route.params;
  var navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imgURL,
        }}
      />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.text}>{text}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 15, marginHorizontal: 0 },
  titleText: { fontSize: 25, textAlign: 'left', margin: 15 },
  signupText: { color: 'blue' },
  date: { margin: 15, fontSize: 15, fontStyle: 'italic' },
  text: { textAlign: 'justify', marginHorizontal: 5 },
  image: {
    height: 250,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ArticleDetails;
