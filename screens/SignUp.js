import React, {useState} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const {height, width} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const [emailID, setemailID] = useState('');
  const [password, setpassword] = useState('');

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('uid', value);
    } catch (e) {
      // saving error
    }
  };
  const __doCreateUser = async () => {
    try {
      if (emailID.length > 0 && password.length > 0) {
        let response = await auth().createUserWithEmailAndPassword(
          emailID,
          password,
        );
        if (response && response.user) {
            storeData(response.user.uid);
          Alert.alert('Success ✅', 'Account created successfully');
        }
        navigation.navigate('Home');
      } else {
        Alert.alert('Check Email');
      }
    } catch (err) {
      Alert.alert('Error', err.message);
      console.log(err);
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
      <Text style={styles.text}>Sign Up</Text>
      <Text style={{color: 'black', fontSize: 18}}>Enter your details</Text>

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

      <TouchableOpacity onPress={__doCreateUser}>
        <View
          style={{
            height: 50,
            backgroundColor: '#D268CC',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            marginTop: 20,
          }}>
          <Text style={{color: 'white'}}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TouchableOpacity onPress={() => navigation.navigate('FitLogin')}>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              color: 'black',
            }}>
            Already have an account?
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

export default SignUp;