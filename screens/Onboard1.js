import {Image, ImageBackground, StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Onboard1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground resizeMode='cover' source={require('../Assets/Line.png')} style={styles.background}/> */}
      <Image style={{marginTop:'30%'}} source={require('../Assets/FirstAid.png')} />
      <View style={styles.box}>
        <View>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: '10%',
              fontSize: 30,
              color: 'black',
              marginStart:'10%',
              marginEnd:'10%',
              textAlign:'center',
              fontWeight:"600"
            }}>
            Get Started
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              marginStart: '6%',
              marginEnd: '6%',
              marginVertical: '10%',
              fontSize: 20,
              color: 'black',
              textAlign:'center',
              
            }}>
            Don't wait, schedule your appointment now and invest in your well-being
          </Text>

          <TouchableOpacity  style={styles.btn} onPress={()=>navigation.navigate('Login')}>
            
            <Text style={{color:'black'}}>Get Started</Text>
          
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboard1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A294F6',
    alignItems: 'center',
    height:windowHeight,
    width:windowWidth
  },
  box: {
    height: '40%',
    width: '80%',
    // opacity: 0.3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 30,
    // marginVertical:'30%'
  },
  btn: {
    height: '20%',
    width: '50%',
    // opacity: 0.3,
    backgroundColor: 'white',
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
