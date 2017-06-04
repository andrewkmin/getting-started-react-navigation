import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TextInput
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class NewItem extends Component {
  constructor(props){
    super(props);
    this.state={
      nameText: '',
      quantity: ''
    };
  }

  submitButton = function() {
    alert('HELLO');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

      <TextInput
        placeholder="Name"
        placeholderTextColor="grey"
        style={{
          padding: 10,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontFamily: 'Avenir',
          fontWeight: "bold",
          alignSelf: 'center',
          // justifyContent: 'center',
          height: 40,
          width: 200,
          borderColor: 'black',
          borderWidth: 1,
          // borderRadius: 10,
          backgroundColor: 'white'
        }}
        onChangeText={(nameText) => this.setState({nameText})}
        value={this.state.nameText}
      />
      <TextInput
        placeholder="Quantity"
        placeholderTextColor="grey"
        style={{
          padding: 10,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontFamily: 'Avenir',
          fontWeight: "bold",
          alignSelf: 'center',
          // justifyContent: 'center',
          height: 40,
          width: 200,
          borderColor: 'black',
          borderWidth: 1,
          // borderRadius: 10,
          backgroundColor: 'white'
        }}
        onChangeText={(quantity) => this.setState({quantity})}
        value={this.state.quantity}
      />

        <Button
          onPress={() => {this.submitButton()}}
          title="Add Item"
          color="blue"
          style={{
            fontFamily:"Avenir",
            fontSize:"5"
          }}
        />

      </View>
    );
  }
}

export default NewItem;
