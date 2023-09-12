

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const handleInputChange = () => {};

  const [isChecked, setIsChecked] = useState(false);
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
        navigation.navigate('Height');
      } else {
        Alert.alert('Check Email');
      }
    } catch (err) {
      Alert.alert('Error', err.message);
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image style={{resizeMode:'contain',height:'30%',width:'100%',marginLeft:'25%', marginTop:'5%'}} source={require('../Assets/Signin.png')}/> */}
      <Text style={styles.uptxt1}>Get Started</Text>
      <Text style={styles.uptxt2}>By creating a free account.</Text>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.inputbox}>
          <TextInput
            style={styles.mail}
            placeholder="Enter your Name"
            onChangeText={handleInputChange}
            // value={Text}
          />
          <Image style={styles.img1} source={require('../Assets/user.png')} />
        </View>

        <View style={styles.inputbox}>
          <TextInput
            style={styles.mail}
            placeholder="Valid Email"
            onChangeText={text => setemailID(text)}
            // value={Text}
          />
          <Image style={styles.img1} source={require('../Assets/mail.png')} />
        </View>

        <View style={styles.inputbox}>
          <TextInput
            style={styles.mail}
            placeholder="Phone number"
            onChangeText={handleInputChange}
            // value={Text}
          />
          <Image
            style={styles.img1}
            source={require('../Assets/smartphone.png')}
          />
        </View>

        <View style={styles.inputbox}>
          <TextInput
            style={styles.mail}
            placeholder="Strong Password"
            secureTextEntry={true}
            onChangeText={text => setpassword(text)}
            // value={Text}
          />
          <Image style={styles.img1} source={require('../Assets/lock.png')} />
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:'2%'}}>
          <BouncyCheckbox
            size={15}
            fillColor="#A294F6"
            unfillColor="#FFFFFF"
            textDecorationLine="none"
            innerIconStyle={{borderWidth: 5, textDecorationLine: 'none'}}
            textStyle={{
              textDecorationLine: 'none',
            }}
            innerIconStyle={{
              borderRadius: 5,
            }}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={{fontSize: 9.5}}>
            By checking the box you agree to our{' '}
            <Text style={{color: '#A294F6'}}>Terms</Text> and{' '}
            <Text style={{color: '#A294F6'}}>Conditions</Text>.
          </Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={__doCreateUser}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              color: 'white',
              fontWeight: '700',
            }}>
            Register
          </Text>
          <Feather name="chevron-right" size={30} color="white" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <Text style={{marginLeft: '15%'}}> Already a member?? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={{marginRight: '15%', color: '#A294F6'}}>
              Login now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  uptxt1: {
    // marginTop: '5%',
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    marginTop: '20%',
  },
  uptxt2: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: '3%',
  },
  inputbox: {
    height: 50,
    width: '85%',
    backgroundColor: 'rgba(196, 196, 196, 0.2);',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%',
    borderRadius: 6,
  },
  mail: {
    flex: 1,
    marginHorizontal: '8%',
  },
  img1: {
    marginHorizontal: '8%',
  },
  btn: {
    marginTop: '10%',
    height: '7%',
    width: '85%',
    backgroundColor: '#A294F6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
