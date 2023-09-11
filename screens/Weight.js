import {StyleSheet, Text, View, Image, TextInput,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import Toast from 'react-native-toast-message'; // Import the toast library
const Weight = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange=(text)=>{
    setInputValue(text);
  }  
  const handleNext=()=>{

  }  
    
  
  return (
    <View>
      <View>
        <Text style={{fontSize: 20, marginTop: '15%', textAlign: 'center'}}>
          Enter Your Weight in kg
        </Text>
      </View>
      <Image
        style={{
          height: '60%',
          width: '90%',
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop:'8%'
          
        }}
        source={require('../Assets/Weight.png')}
      />

      <View style={styles.mailbox}>
        <TextInput
          style={styles.mail}
          placeholder="Enter your Weight"
          onChangeText={handleInputChange}
          value={Text}
          keyboardType = 'numeric'
          
        />
      </View>

      
        <TouchableOpacity style={styles.btn} onPress={handleNext}>
        <Feather name="chevron-right" size={30} color="white" />
        </TouchableOpacity>
        <Toast/>

    </View>
  );
};

export default Weight;

const styles = StyleSheet.create({
  mailbox: {
    Weight: '17%',
    width: '85%',
    backgroundColor: 'rgba(196, 196, 196, 0.2);',

    alignItems: 'center',
    // marginTop: '%',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical:'3%',
    borderWidth:0.5
  },
  mail: {
    // flex: 1,
    marginHorizontal: '8%',
  },
  btn: {
    height: '9%',
    width: '19%',
    backgroundColor: '#A294F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100,
    alignSelf:'center',
    marginTop:'6%'
    
  },
 
});