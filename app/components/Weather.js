import React, { Component } from 'react';
import { FlatList, ActivityIndicator,
  StyleSheet,
  TextInput,
  Text, 
  View  } from 'react-native';

class Weather extends Component {


  render() {
      const { data, loading, error} = this.props.weatherData

      if (loading) {
          return (
              <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
          )
      }

      if (error) {
          <View>
        <Text>(error)</Text>
      </View>
      }
    return (
      <View style={flatStyles.container}>
      
      {/* <Text style={flatStyles.location}>{this.state.cityDetail.name},{this.state.cityDetail.country}</Text> */}
        <FlatList
          data={this.props.loadWeather()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
          
          <View style={flatStyles.flatview}>
          <Text style={flatStyles.temperature}>{item.weather[0].main}</Text>
          <Text style={flatStyles.date}>{item.dt_txt}</Text>
          </View>
          }
          keyExtractor={({dt_txt}, index) => dt_txt}
          
        />
      </View>
    );
  }
}

const flatStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  location: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  temperature: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  date: {
    color: 'red'
  }
  
});

export default Weather;