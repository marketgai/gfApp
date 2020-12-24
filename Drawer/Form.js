import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category : '',
      message  : ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Create your own custom Messages!</Text>
        <View>
          <Text style={styles.label}>Category:</Text>
          <TextInput style={styles.textbox} />
          <Text style={styles.label}>Message:</Text>
          <TextInput />
        </View>
        <Button title="Submit" />
      </View>
    );
  }
}
export default Form;

const styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : '#fff',
    alignItems      : 'center',
    justifyContent  : 'space-evenly'
  },
  header    : {
    fontSize : 22,
    color    : 'teal'
  },
  label     : {
    fontSize : 18
  },
  textbox   : {
    height : 40
  }
});
