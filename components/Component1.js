import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {PrintParent, getParent} from './parent';

export default class Welcome extends Component {
  render () {
    // Using just the function
    console.log(`Component1 parent is: ${getParent.call(this)}`);
    return (
      <Text style={styles.welcome}>
        Welcome to React Native!
      <PrintParent />
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
;
