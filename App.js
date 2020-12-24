import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import logo from './assets/annoyed.png';
// import sendSMS from 'react-native-sms';
import * as SMS from 'expo-sms';
import axios from 'axios';

import Form from './Drawer/Form.js';
import Home from './Drawer/Home.js';
import Main from './Drawer/Main.js';
import Feed from './Feed.js';
import Settings from './Drawer/Settings.js';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class Nav extends Component {
  render() {
    createHomeStack = () => (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    );
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Create Messages" component={Form} />
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

// const getMsg = (group, callback) => {
//   axios
//     .get(`http://54.151.32.166:5555/message/${group}`)
//     .then((response) => {
//       callback(null, JSON.stringify(response.data[0].message));
//     })
//     .catch((err) => callback(err));
// };

// const smsFunc = async (category) => {
//   // alert('ANNOYING BOYFRIEND NOW');
//   try {
//     const msg = await getMsg(category, (err, result) => {
//       SMS.sendSMSAsync([ '16505041488' ], result);
//       console.log('result', result);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// class gfApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       category : 'attention',
//       phone    : ''
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={{
//             fontSize        : 25,
//             margin          : 30,
//             color           : '#e7e7e7',
//             backgroundColor : '#fafafa'
//           }}
//           placeholder="Category"
//           value={this.state.category}
//           onChangeText={(category) => {
//             this.setState({ category });
//           }}
//         />
//         <TouchableOpacity
//           onPress={() => {
//             smsFunc(this.state.category);
//           }}
//           style={{ backgroundColor: 'white' }}
//         >
//           <Image source={logo} style={{ width: 300, height: 300 }} />
//           <Text style={{ color: '#888', fontSize: 30, alignItems: 'center', justifyContent: 'center' }}>
//             {' '}
//             GET ATTENTION NOW!!!
//           </Text>
//         </TouchableOpacity>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container : {
//     flex            : 1,
//     backgroundColor : '#fff',
//     alignItems      : 'center',
//     justifyContent  : 'center'
//   }
// });

// export default gfApp;

//-----------------------------------------
// const getMsg = (group) => {
//   axios.get(`${window.location.origin}/message/attention`)
//   .then((msg)=> console.log(msg))
// }

// const messages = ['WHY ARENT YOU PAYING ATTENTION TO ME!!', 'PAY ATTENTION TO ME NOWWW!!', 'HEY WHATS UP', 'I LIKE YOU', 'OKAY NOW IM GETTING ANNOYED', 'I HATE YOU', 'IM SORRY', 'I BOUGHT YOU SOMETHING', 'WANT TO EAT?', 'ARE YOU IGNORING ME?', 'WHAT ARE YOU DOING?', '<3']

// const generateMsg = () => {
//   const n = Math.floor(Math.random() * 12);
//   return messages[n];
// }

// const smsFunc = async () => {
//   alert('ANNOYING BOYFRIEND NOW');
//   const status = await SMS.sendSMSAsync(
//     ['16505041488'],
//     // generateMsg(),
//     getMsg('test')
//   );
//   console.log(status);
// }

// const { result } = await SMS.sendSMSAsync(
//   ['16504777004', '9876543210'],
//   'My sample HelloWorld message',
//   {
//     attachments: {
//       uri: 'path/myfile.png',
//       mimeType: 'image/png',
//       filename: 'myfile.png',
//     },
//   }
// );
