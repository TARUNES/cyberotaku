import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const NavBar = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: 'grey',
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontSize: 20 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Text style={{ fontSize: 20 }}>Feeds</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Remind')}>
        <Text style={{ fontSize: 20 }}>Remind</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ fontSize: 20 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
