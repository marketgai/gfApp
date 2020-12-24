import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Settings = (props) => (
  <View style={styles.container}>
    <Text>Settings</Text>
    <Text>Bae's Digits</Text>
    <TextInput />
    <Text>Type of messages you want to send</Text>
    <TextInput />
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
  }
});

export default Settings;
