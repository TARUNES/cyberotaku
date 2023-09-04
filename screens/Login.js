import React from 'react';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('loggedin', value);
    } catch (e) {
      // saving error
    }
  };
  const [emailID, setemailID] = useState('');
  const [password, setpassword] = useState('');

  const __doSignupUser = async () => {
    try {
      if (emailID.length > 0 && password.length > 0) {
        let response = await auth().signInWithEmailAndPassword(
          emailID,
          password,
        );
        if (response && response.user) {
          Alert.alert('Success ✅', 'Authenticated successfully');
          storeData('true');
        }
        navigation.navigate('Home');
      } else {
        Alert.alert('Check', 'No inputs');
      }
    } catch (err) {
      Alert.alert('Error', 'Check you inputs');
    }
  };

  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: 'white',
        padding: 20,
      }}>
      <Text style={styles.text}>Log in</Text>
      <Text style={{color: 'black', fontSize: 18}}>
        A New way of authentication
      </Text>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#E9F0F3',
          paddingLeft: 10,
          borderRadius: 4,
          marginTop: 50,
          height: 50,
        }}>
        <AntDesign name={'mail'} style={{fontSize: 20, marginTop: 13}} />
        <TextInput
          placeholder="Enter your e-mail"
          placeholderTextColor={'black'}
          style={styles.txtinp}
          textAlign="left"
          value={emailID}
          onChangeText={text => setemailID(text)}></TextInput>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#E9F0F3',
          paddingLeft: 10,
          borderRadius: 4,
          marginTop: 15,
          height: 50,
        }}>
        <Entypo name={'lock'} style={{fontSize: 20, marginTop: 13}} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={'black'}
          style={styles.txtinp}
          textAlign="left"
          value={password}
          onChangeText={text => setpassword(text)}></TextInput>
      </View>

      <TouchableOpacity onPress={__doSignupUser}>
        <View
          style={{
            height: 50,
            backgroundColor: '#D268CC',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            marginTop: 20,
          }}>
          <Text style={{color: 'white'}}>Log in</Text>
        </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{fontWeight: '400', color: 'black'}}>Not member yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FitSignup')}>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              color: '#D268CC',
            }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 30,
  },
  txtinp: {
    flex: 1,
    paddingLeft: 11,
    color: 'black',
  },
});

export default Login;