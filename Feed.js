import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Feed extends Component {
  render() {
    return (
      <View>
        <Button title="testing feed item" onPress={() => console.log('hello')}>
          from feed
        </Button>
      </View>
    );
  }
}

export default Feed;
