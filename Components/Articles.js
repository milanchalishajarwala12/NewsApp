import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { articlesArray } from '../Data';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { SafeAreaView } from 'react-navigation';
const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton {...props} iconSize={23} color="#373737" />
);

const ReusableSelectItem = ({ onPress }) => (
  <Item title="Logout" onPress={onPress} />
);

function Articles() {
  var navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      text={item.text}
      date={item.date}
      imgURL={item.imgURL}
    />
  );

  const Item = ({ title, text, date, imgURL }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ArticleDetails', {
          title: title,
          text: text,
          imgURL: imgURL,
          date: date,
        });
      }}
    >
      <View style={styles.articleViewContainer}>
        <View style={styles.dotAndTitle}>
          <Image
            style={styles.blackDot}
            source={{
              uri: imgURL,
            }}
          />
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.textView}>
          <Text numberOfLines={3} style={styles.text}>
            {text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // in your app, extract the arrow function into a separate component
      // to avoid creating a new one every time
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <ReusableSelectItem
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(
                  function () {
                    Alert.alert('Succesfully Signed Out');
                    navigation.popToTop();
                  },
                  function (error) {
                    console.error('Sign Out Error', error);
                    return;
                  }
                );
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.topTitleText}>Articles</Text>
        <FlatList
          data={articlesArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 30, padding: 5 },
  topTitleText: { fontSize: 35, textAlign: 'left' },
  articleViewContainer: {
    backgroundColor: 'lightgrey',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  dotAndTitle: { flexDirection: 'row', alignItems: 'center', padding: 5 },
  title: {
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    marginHorizontal: 5,
    marginRight: 15,
    fontSize: 15,
  },
  titleView: { marginRight: 10, paddingRight: 20 },
  text: { textAlign: 'auto', marginRight: 10 },
  date: {
    textAlign: 'right',
    fontWeight: 'bold',
    margin: 5,
  },
  textView: {},
  blackDot: {
    justifyContent: 'flex-start',
    height: 50,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 25,
    marginRight: 10,
  },
});

export default Articles;
