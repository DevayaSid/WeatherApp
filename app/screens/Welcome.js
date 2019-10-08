import React, { Component } from 'react';
import { 
  FlatList, ActivityIndicator,
  StyleSheet,
  TextInput,
  Text, 
  View 
} from 'react-native';
import { Button } from 'react-native-elements';

class Welcome extends Component {

static navigationOptions = {
    title: 'Welcome'
   };

constructor(props) {
    super(props);
    this.state = {zipcode: ''};
  }

  render() {
    return (
        <View style={{ 
      justifyContent: 'center',
      alignItems: "center"
    }}>
 <Text style={styles.headerStyle}>Welcome to WeatherApp</Text>
 <Text style={styles.subHeaderStyle}>Enter zip code below and get the forecast</Text>
 <TextInput
          style={{
            borderWidth: 2,  
            borderColor: 'lightgrey',  
            paddingLeft: 10,
            height: 40
          }}
          keyboardType={'numeric'}
          placeholder="Enter Zipcode"
          onChangeText={(zipcode) => this.setState({zipcode})}
          value={this.state.zipcode}
        />
        <Button
        title="SUBMIT"
        type="outline"
        raised="true"
        onPress={() => this.props.navigation.navigate('Result',{  
            zip: this.state.zipcode})}
        />
 </View>
 );
  }
}

const styles = StyleSheet.create({
    headerStyle:{
        fontSize:30
        },
        subHeaderStyle:{
        fontSize:15
        }
});

export default Welcome;