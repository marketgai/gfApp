import React, { Component } from 'react';
import Form from './Drawer/Form.js';
import Home from './Drawer/Home.js';
import Main from './Drawer/Main.js';
import Settings from './Drawer/Settings.js';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class Nav extends Component {
  render() {
    // createHomeStack = () =>
    // <Stack.Navigator>
    //   <Stack.Screen name="Feed" component={Feed}/>
    // </Stack.Navigator>
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Form" component={Form} />
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
