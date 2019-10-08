import React, { Component } from 'react';
import {View} from 'react-native'
import WeatherContainer from './weathercontainer'


class MainContainer extends Component {
    state = { }
    render(){
        return (
            <View>
                <WeatherContainer/>
            </View>
        );
    }



}

export default MainContainer;