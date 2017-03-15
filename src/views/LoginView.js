/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class LoginView extends Component {

  static contextTypes = {
    routes: PropTypes.object.isRequired,
  };

  goToHome() {
    const {routes} = this.context;
    routes.demo();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goToHome.bind(this)}>
          <Text style={styles.welcome}>
            Click here to demo page.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = LoginView;
