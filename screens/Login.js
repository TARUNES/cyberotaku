import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({navigation}) => {
  // const { height, width } = Dimensions.get('window');
  const [isChecked, setIsChecked] = useState(false);
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
          console.log('done');
          storeData('true');
        }
        navigation.navigate('HomeTabs');
      } else {
        Alert.alert('Check', 'No inputs');
      }
    } catch (err) {
      Alert.alert('Error', 'Check you inputs');
    }
  };



  const handleInputChange = () => {};

  return (
    <View style={styles.container}>
      <Image style={{resizeMode:'contain',height:'30%',width:'100%',marginLeft:'25%', marginTop:'5%'}} source={require('../Assets/Signin.png')}/>
      <Text style={styles.uptxt}>Welcome back !!</Text>
      <Text style={styles.uptxt}>Log in to access your account</Text>
      <View style={styles.mailbox}>
        <TextInput
          style={styles.mail}
          placeholder="Enter your Email"
          onChangeText={text => setemailID(text)}
          // value={Text}│
        />
        <Image style={styles.img1} source={require('../Assets/mail.png')} />
      </View>

      <View style={styles.Passwordbox}>
        <TextInput
          style={styles.Password}
          placeholder="Enter your Password"
          onChangeText={text => setpassword(text)}
          // value={Text}
        />
        <Image style={styles.img2} source={require('../Assets/lock.png')} />
      </View>

      <View style={{flexDirection: 'row',marginTop:'5%',alignItems:'center' }}>
        <BouncyCheckbox
        style={styles.checkbox}
        
          size={15}
          fillColor="#A294F6"
          text='Remember me'
          unfillColor="#FFFFFF"
          textDecorationLine="none"
          innerIconStyle={{borderWidth: 5, textDecorationLine: 'none'}}
          textStyle={{
            textDecorationLine: 'none',
            fontSize:12,
            marginRight:'2%',
            color:'black'
          }}
          innerIconStyle={{
            borderRadius: 5,
          }}
          onPress={() => setIsChecked(!isChecked)}
        />
        

        <TouchableOpacity style={{flex:1}} >    
          <Text style={{textAlign:'right',marginRight:'19%',fontSize:12,color:'#A294F6'}} >Forget Password?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.btn} onPress={__doSignupUser} >
        <Text style={{textAlign:'center',fontSize:22,color:'white',fontWeight:'700'}} >Login</Text>
      <Feather name="chevron-right" size={30} color="white" />
      </TouchableOpacity>
      
      <View style={{flexDirection:'row',marginTop:'5%'}}>
        <Text style={{marginLeft:'15%'}} >New Member? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>   

        <Text style={{marginRight:'15%',color:'#A294F6'}} >Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  uptxt: {
    // marginTop: '5%',
    fontSize: 22,
    color:'black',
    textAlign:'center'
  },

  mailbox: {
    height: 60,
    width: '85%',
    backgroundColor: 'rgba(196, 196, 196, 0.2);',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
    borderRadius:6
  },
  mail: {
    flex: 1,
    marginHorizontal: '8%',
  },
  img1: {
    marginHorizontal: '8%',
  },
  Passwordbox: {
    height: 60,
    width: '85%',
    backgroundColor: 'rgba(196, 196, 196, 0.2);',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    borderRadius:6
  },
  Password: {
    flex: 1,
    marginHorizontal: '8%',
  },
  img2: {
    marginHorizontal: '8%',
  },
  checkbox:{
    // flex:1,
    // justifyContent:'space-evenly'
    marginLeft:'13%',
  },
  btn:{
    marginTop:'15%',
    height:'7%',
    width:'85%',
    backgroundColor:'#A294F6',
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  }
});
