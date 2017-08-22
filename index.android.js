/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Animated,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';
const yOffset = new Animated.Value(0);
const onScroll = Animated.event(
  [{ nativeEvent: { contentOffset: { y: yOffset } } }],
  { useNativeDriver: true }
);
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class TestParent extends Component {
  scrollTo = (e) => {
    this.paramsList.scrollToOffset({animated: false, offset: e.nativeEvent.contentOffset.y})
  }
  viewTranslate() {
    return {
      transform: [{
        translateY: yOffset.interpolate({
          inputRange: [0,1],
          outputRange: [1,0]
        })
      }]
    };
  }
  render () {
    // Add a main scroll view that scrolls everything together
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          style={{backgroundColor: 'purple', width: '40%', height: '40%'}}>
          <AnimatedFlatList
          style={this.viewTranslate()}
            ref={(list) => { this.dateList = list; }}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={this.renderItem2}
            scrollEventThrottle={16}
            onScroll={onScroll}
          />
        </ScrollView>
        <ScrollView
          pagingEnabled
          horizontal
          style={{backgroundColor: 'green', width: '60%', height: '40%'}}>
          <AnimatedFlatList
            style={this.viewTranslate()}
            ref={(list) => { this.paramsList = list; }}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]}
            renderItem={this.renderItem}
            scrollEventThrottle={16}
            onScroll={onScroll}
          />
        </ScrollView>
      </View>
    );
  }

  renderItem (elem) {
    return (
      <View style={{width: '200%'}}>
        <Text style={{fontSize: 60}}> {elem.index} SPO2 PR RRP FOO BAR </Text>
      </View>
    );
  }
  renderItem2 (elem) {
    return (
      <View style={{width: '200%'}}>
        <Text style={{fontSize: 60}}> {elem.index} SPO2 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '40%',
    backgroundColor: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('TestParent', () => TestParent);
