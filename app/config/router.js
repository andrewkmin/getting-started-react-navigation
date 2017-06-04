import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Inventory from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import History from '../screens/History';
import NewItem from '../screens/NewItem';

export const FeedStack = StackNavigator({
  Inventory: {
    screen: Inventory,
    navigationOptions: {
      title: 'Inventory',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    }),
  },
  History: {
    screen: History,
    navigationOptions: {
      title: "Order History"
    }
  }
});

export const Tabs = TabNavigator({
  Inventory: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Inventory',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  New: {
    screen: NewItem,
    navigationOptions: {
      tabBarLabel: 'New Item',
      tabBarIcon: ({ tintColor }) => <Icon name="note-add" size ={30} color={tintColor} />
    }
  },
  Me: { // TODO change all this stuff to settings
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={30} color={tintColor} />
    },
  }
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
