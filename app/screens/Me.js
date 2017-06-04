import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: "http://duncanflynn.com/wp-content/uploads/2014/11/white-square.jpg"}}
          featured
          title="Movebutter"
          caption="Configure stuff here."
        />

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title="Field 1"
            rightTitle="Enter some value..."
            hideChevron
          />
          <ListItem
            title="Field 2"
            rightTitle="Another value..."
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
