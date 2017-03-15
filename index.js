/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions
} from 'react-native';

var { height, width } = Dimensions.get('window');
LAYOUT_TARGET = (width > 600) ? 'web' : 'app';

const MainView = require('./src/views/MainView.js');

AppRegistry.registerComponent('RnrfWebDemo', () => MainView);
AppRegistry.runApplication('RnrfWebDemo', {
    rootTag: document.getElementById('react-root')
});
