import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Settings = (props) => (
  <View style={styles.container}>
    <Text>Settings</Text>
    <Text>Bae's Digits</Text>
    <TextInput style={styles.textbox} />
    <Text>Type of messages you want to send</Text>
    <TextInput style={styles.textbox} />
  </View>
);

const styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : '#fff',
    alignItems      : 'center',
    justifyContent  : 'center'
  },
  text      : {
    fontSize : 20
  },
  textbox   : {
    height       : 30,
    width        : 300,
    borderColor  : 'gray',
    borderWidth  : 1,
    borderRadius : 2
  }
});

export default Settings;
