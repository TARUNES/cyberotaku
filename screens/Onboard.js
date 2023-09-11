import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import the FontAwesome icon set


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Onboard = ({navigation}) => {
  const handleGetStarted = () => {navigation.navigate('Onboard1')};
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../Assets/Onboard.png')} />
      <Text style={{fontWeight:900,color:'black',fontSize:19,marginBottom:'13%',fontFamily:'sans-serif'}}>Sync with your medical Records</Text>
      <Text style={{marginStart:50,color:'grey',marginEnd:50,fontSize:19}}>Keep your doctor Informed about your condition</Text>
      
      <View
        style={styles.btn}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Feather name="chevron-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    // height:windowHeight,
    // width:windowWidth,
    flex: 1,
    backgroundColor: '#d5d5ec',
    // justifyContent:'center',
    alignItems: 'center',
  },
  image: {
    margin: '1%',
    height: '50%',
    width: '85%',
    resizeMode: 'contain',
  },
  //   button:{

  //     marginVertical:'50%',
  //     backgroundColor:'#A294F6',
  //     // borderCurve:'continuous',

  //   }
  btn: {
    height: '9%',
    width: '19%',
    backgroundColor: '#74F0D3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100,
    marginVertical:'30%',
  },
});