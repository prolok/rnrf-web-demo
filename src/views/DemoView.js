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
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DemoView extends Component {

  static contextTypes = {
    routes: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputText} placeholder={"User name"} onChangeText={(text) => { this.username = text; }} />
        <TextInput style={styles.inputText} placeholder={"Password"} onChangeText={(text) => { this.password = text; }} secureTextEntry={true} />
        <TouchableOpacity onPress={() => alert("Button 1")}>
          <Text style={styles.welcome}>
            Button 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Button 2")}>
          <Text style={styles.welcome}>
            Button 2
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
  inputText: {
    height: 50,
    padding: 5,
    marginBottom: 5,
    width: 250,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10
  },
});

export default connect(state => ({
    state: state
  })
)(DemoView);
