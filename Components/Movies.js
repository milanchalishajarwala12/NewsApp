import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
//import User from './User';

//creating component
class Movies extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: {},
    };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJSON) =>
        this.setState(
          { isLoading: false, dataSource: responseJSON },
          function () {}
        )
      )
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {}

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    const renderItem = ({ item }) => (
      <MovieItem title={item.title} releaseYear={item.releaseYear} />
    );

    const MovieItem = ({ id, title, releaseYear }) => {
      return (
        <View>
          <Text style={styles.movieItem}>
            <Text>{title} - </Text>
            <Text>{releaseYear}</Text>
          </Text>
        </View>
      );
    };

    const moviesArray = this.state.dataSource.movies;
    const title = this.state.dataSource.title;
    const description = this.state.dataSource.description;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <FlatList
          renderItem={renderItem}
          data={moviesArray}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  title: { fontSize: 22, marginVertical: 20 },
  description: { fontSize: 16, marginVertical: 15 },
  movieItem: { fontSize: 18, marginVertical: 10 },
});

//export
export default Movies;
