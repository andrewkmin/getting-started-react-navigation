import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class History extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Avenir'
          }}
        >
        Some graphs / more data here
        </Text>
      </View>
    );
  }
}

export default History;
