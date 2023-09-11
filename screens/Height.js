import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';

import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Height = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
    const currentUser = firebase.auth().currentUser.uid;
    if (currentUser) {
        const userId = currentUser; // Get the user's ID
        console.log('Current User ID:', userId); // Log the user's ID
    } else {
        console.log('User is not authenticated.');
    }

    firestore().collection('Users').doc(currentUser).set(
      {
        height: inputValue,

      },{merge: true},)
    .then(() => {
        console.log('Height added!');
        navigation.navigate('Weight');
    })
    .catch((error) => {
        console.error('Error adding height data: ', error);
    });
  }
  const handleNext=()=>{

  }  

  return (
    <View>
      <View>
        <Text style={{ fontSize: 20, marginTop: '15%', textAlign: 'center' }}>
          Enter Your Height in cm
        </Text>
      </View>
      <Image
        style={{
          height: '65%',
          width: '90%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
        source={require('../Assets/Height.png')}
      />

      <View style={styles.mailbox}>
        <TextInput
          style={styles.mail}
          placeholder="Enter your Height"
          onChangeText={handleInputChange}
          value={inputValue}
          keyboardType="numeric" // This restricts input to numbers and floats
        />
      </View>

      <View style={styles.btn}>
        <TouchableOpacity style={styles.button} onPress={handleInputChange}>
          <Feather name="chevron-right" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Toast />
    </View>
  );
};

export default Height;

const styles = StyleSheet.create({
  mailbox: {
    height: '7%',
    width: '85%',
    backgroundColor: 'rgba(196, 196, 196, 0.2);',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: '3%',
    borderWidth: 0.5,
  },
  mail: {
    flex: 1,
    marginHorizontal: '8%',
  },
  btn: {
    height: '9%',
    width: '19%',
    backgroundColor: '#A294F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: '6%',
  },
});
