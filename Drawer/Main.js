import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import logo from '../assets/annoyed.png';
// import sendSMS from 'react-native-sms';
import * as SMS from 'expo-sms';
import axios from 'axios';

const getMsg = (group, callback) => {
  axios
    .get(`http://54.183.173.1:5555/message/${group}`)
    .then((response) => {
      callback(null, response.data[0].message);
    })
    .catch((err) => callback(err));
};

const smsFunc = async (category, phone) => {
  // alert('ANNOYING BOYFRIEND NOW');
  try {
    const msg = await getMsg(category, (err, result) => {
      SMS.sendSMSAsync(phone, result);
      console.log('result', result);
    });
  } catch (err) {
    console.log(err);
  }
};

class gfApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category : '',
      phone    : ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textbox}
          placeholder="Digits"
          value={this.state.phone}
          onChangeText={(phone) => {
            this.setState({ phone });
          }}
        />
        <TextInput
          style={styles.textbox}
          placeholder="Category"
          value={this.state.category}
          onChangeText={(category) => {
            this.setState({ category });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            smsFunc(this.state.category, this.state.phone);
          }}
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

const styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : '#fff',
    alignItems      : 'center',
    justifyContent  : 'center'
  },
  textbox   : {
    fontSize        : 25,
    margin          : 30,
    color           : '#e7e7e7',
    backgroundColor : '#fafafa'
  }
  // header    : {
  //   flex            : 1,
  //   height          : 20,
  //   backgroundColor : 'red',
  //   alignItems      : 'center',
  //   justifyContent  : 'center'
  // }
});

export default gfApp;
