import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store'
import MainContainer from '../containers'


class Result extends Component {
    state = { }
    render(){
        return (
            <Provider store = {store}>
                <MainContainer/>
            </Provider>
        );
    }



}

export default Result;