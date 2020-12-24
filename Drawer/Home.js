import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import needy from '../assets/NeedyGF.gif';

const Home = (props) => (
  <View style={styles.container}>
    <Image source={needy} style={{ width: 500, height: 500 }} />
    <Text style={styles.text}>The quickest way to get attention</Text>
  </View>
);

const styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : 'black',
    alignItems      : 'center',
    justifyContent  : 'center'
  },
  text      : {
    color    : '#5ce1e6',
    fontSize : 18
  }
});
export default Home;
