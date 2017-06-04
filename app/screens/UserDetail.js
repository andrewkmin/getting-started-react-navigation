import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {

  viewHistory = (name) => {
    this.props.navigation.navigate('History', name);
  };

  render() {
    const { picture, name, description, phone, login, dob, location, quantity, date } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.toUpperCase()}`}
          caption={description}
        />

        <List>
          <ListItem
            title="Description"
            rightTitle={description}
            rightTitleStyle={{color: '#000000'}}
            hideChevron
          />
          <ListItem
            title="Quantity"
            rightTitle={quantity}
            rightTitleStyle={{color: '#000000'}}
            hideChevron
          />
          <ListItem
            title="Last Order"
            rightTitle={date}
            rightTitleStyle={{color: '#000000'}}
            hideChevron
          />
          <ListItem
            title="Order History"
            onPress={() => this.viewHistory(name)}
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
