import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import logo from './assets/annoyed.png';
import sendSMS from 'react-native-sms';
import * as SMS from 'expo-sms';
import axios from 'axios';

const getMsg = (group, callback) => {
  //this is correct endpoint... was working
  axios
    .get(`http://54.151.32.166:5555/message/${group}`)
    .then((response) => {
      console.log('response', JSON.stringify(response.data[0].message));
      callback(null, JSON.stringify(response.data[0].message));
    })
    .catch((err) => callback(err));
};

const smsFunc = async () => {
  // alert('ANNOYING BOYFRIEND NOW');
  try {
    const msg = await getMsg('attention', (err, result) => {
      SMS.sendSMSAsync([ '16505041488' ], result);
      console.log('result', result);
    });
  } catch (err) {
    console.log(err);
  }
};

class gfApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={logo} style={{width: 300, height: 300}} />

        <Text style={{color: '#888', fontSize: 18}}>ATTENTION NOW!!!</Text> */}
        <TouchableOpacity
          onPress={() => {
            // const test = await alert('ANNOYING BOYFRIEND NOW');
            smsFunc();
          }
          // async () => {
          // alert('ANNOYING BOYFRIEND NOW');
          // const status = await SMS.sendSMSAsync(
          //   ['14086366067', '16505041488'],
          //   'PAY ATTENTION TO ME NOWWWW!!!',
          // );
          // console.log(status);
          // }
          }
          style={{ backgroundColor: 'white' }}
        >
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <Text style={{ color: '#888', fontSize: 30, alignItems: 'center', justifyContent: 'center' }}>
            {' '}
            GET ATTENTION NOW!!!
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default gfApp;

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

const styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : '#fff',
    alignItems      : 'center',
    justifyContent  : 'center'
  }
});

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
