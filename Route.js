import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from "./app/screens/Welcome";
import Result from "./app/screens/Result";
const Project= createStackNavigator({
  Welcome: {
        screen: Welcome, 
        navigationOptions: {
            header: null,
        },
    },
  Result: {
        screen: Result, 
        
    }
});
export default createAppContainer(Project);