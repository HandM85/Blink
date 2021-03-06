/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Blink extends Component {
   constructor(props){
     super(props);
     this.state = {showText: true};
     
     
     setInterval(() => {
       this.setState({ showText: !this.state.showText});
       }, 1000);
   }


  render() {
    let display = this.state.showText ? this.props.text:' ';
    return (
      <Text>{display}</Text>
    );
  }
}


class BlinkApp extends Component{
   render() {
     return (
        <View>
           <Blink text='I love to blink' />
           <Blink text='You blinking is so great' />
           <Blink text='Why did they ever take this out of HTML' />
           <Blink text='Look at me look at me look at me' />
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

AppRegistry.registerComponent('Blink', () => BlinkApp);