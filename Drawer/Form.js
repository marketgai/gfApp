import React, { Component, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category : '',
      message  : ''
    };
    this.addMsg = this.addMsg.bind(this);
  }

  addMsg() {
    axios
      .post(`http://54.183.173.1:5555/message`, {
        category : this.state.category,
        message  : this.state.message
      })
      .then((response) => {
        console.log('posted');
        this.setState({ message: '' });
      })
      .catch((err) => callback(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Create your own custom Messages!</Text>
        <View>
          <Text style={styles.label}>Category:</Text>
          <TextInput
            style={styles.textbox}
            value={this.state.category}
            onChangeText={(category) => {
              this.setState({ category });
            }}
          />
          <Text style={styles.label}>Message:</Text>
          <TextInput
            style={styles.textbox}
            value={this.state.message}
            onChangeText={(message) => {
              this.setState({ message });
            }}
          />
        </View>
        <Button
          title="Submit"
          onPress={() => {
            this.addMsg();
          }}
        />
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
    height       : 30,
    width        : 300,
    borderColor  : 'gray',
    borderWidth  : 1,
    borderRadius : 2
  }
});
