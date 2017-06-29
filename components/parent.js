import React, {Component} from 'react';
import {Text} from 'react-native';

export function getParent () {
  return this._reactInternalInstance._currentElement._owner._currentElement.type.name;
}

export class PrintParent extends Component {
  render () {
    if (!__DEV__) return null;
    return (
      <Text style={{
        fontSize: 10,
        fontWeight: 'bold',
        color: 'red'
      }}>
        {getParent.call(this)}
      </Text>
    );
  }
}
