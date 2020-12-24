import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : '#fff',
    alignItems      : 'center',
    justifyContent  : 'center'
  }
});
const Form = (props) => (
  <View style={styles.container}>
    <Text>Create your own custom Messages!</Text>
    <Text>category</Text>
    <TextInput />
    <Text>message</Text>
    <TextInput />
  </View>
);

export default Form;
