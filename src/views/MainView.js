import React, { Component } from 'react';
import { Router, Scene, Modal, ActionConst, Actions } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const RouterWithRedux = connect()(Router);
import reducers from '../reducers';
// other imports...

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

import DemoView from './DemoView';
import LoginView from './LoginView';

export default class MainView extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux
                    panHandlers={null} >
                    <Scene key="modal" component={Modal} >
                        <Scene key="root" >
                            <Scene key="login" component={LoginView} title="Page 1" type={ActionConst.PUSH}  duration={0}/>
                            <Scene key="demo" component={DemoView} title="Page 2" type={ActionConst.PUSH}  duration={0}/>
                        </Scene>
                    </Scene>
                </RouterWithRedux>
            </Provider> 
        );
    }
}

module.exports = MainView;
