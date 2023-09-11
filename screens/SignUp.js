// import React, {useState} from 'react';
// import {
//   Alert,
//   Dimensions,
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// const {height, width} = Dimensions.get('window');

// const SignUp = ({navigation}) => {
  // const [emailID, setemailID] = useState('');
  // const [password, setpassword] = useState('');

  // const storeData = async value => {
  //   try {
  //     await AsyncStorage.setItem('uid', value);
  //   } catch (e) {
  //     // saving error
  //   }
  // };
  // const __doCreateUser = async () => {
  //   try {
  //     if (emailID.length > 0 && password.length > 0) {
  //       let response = await auth().createUserWithEmailAndPassword(
  //         emailID,
  //         password,
  //       );
  //       if (response && response.user) {
  //           storeData(response.user.uid);
  //         Alert.alert('Success ✅', 'Account created successfully');
  //       }
  //       navigation.navigate('HomeTabs');
  //     } else {
  //       Alert.alert('Check Email');
  //     }
  //   } catch (err) {
  //     Alert.alert('Error', err.message);
  //     console.log(err);
  //   }
  // };

//   return (
//     <View
//       style={{
//         height: height,
//         width: width,
//         backgroundColor: 'white',
//         padding: 20,
//       }}>
//       <Text style={styles.text}>Sign Up</Text>
//       <Text style={{color: 'black', fontSize: 18}}>Enter your details</Text>

//       <View
//         style={{
//           flexDirection: 'row',
//           backgroundColor: '#E9F0F3',
//           paddingLeft: 10,
//           borderRadius: 4,
//           marginTop: 50,
//           height: 50,
//         }}>
//         <AntDesign name={'mail'} style={{fontSize: 20, marginTop: 13}} />
//         <TextInput
//           placeholder="Enter your e-mail"
//           placeholderTextColor={'black'}
//           style={styles.txtinp}
//           textAlign="left"
//           value={emailID}
//           onChangeText={text => setemailID(text)}></TextInput>
//       </View>

//       <View
//         style={{
//           flexDirection: 'row',
//           backgroundColor: '#E9F0F3',
//           paddingLeft: 10,
//           borderRadius: 4,
//           marginTop: 15,
//           height: 50,
//         }}>
//         <Entypo name={'lock'} style={{fontSize: 20, marginTop: 13}} />
//         <TextInput
//           placeholder="Password"
//           secureTextEntry={true}
//           placeholderTextColor={'black'}
//           style={styles.txtinp}
//           textAlign="left"
//           value={password}
//           onChangeText={text => setpassword(text)}></TextInput>
//       </View>

//       <TouchableOpacity onPress={__doCreateUser}>
//         <View
//           style={{
//             height: 50,
//             backgroundColor: '#D268CC',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: 4,
//             marginTop: 20,
//           }}>
//           <Text style={{color: 'white'}}>Sign Up</Text>
//         </View>
//       </TouchableOpacity>

//       <View style={{flexDirection: 'row', marginTop: 5}}>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <Text
//             style={{
//               textDecorationLine: 'underline',
//               fontWeight: 'bold',
//               color: 'black',
//             }}>
//             Already have an account?
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 32,
//     color: 'black',
//     fontWeight: 'bold',
//     marginTop: 30,
//   },
//   txtinp: {
//     flex: 1,
//     paddingLeft: 11,
//     color: 'black',
//   },
// });

// export default SignUp;


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

const Login = () => {
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
        navigation.navigate('HomeTabs');
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
          <TouchableOpacity >
            <Text style={{marginRight: '15%', color: '#A294F6'}}>
              Login now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
