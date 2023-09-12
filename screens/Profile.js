import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import CircularProgressBase from 'react-native-circular-progress-indicator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SendSMS from 'react-native-sms';
// emergency-share

const Profile = (
  { navigation }
) => {
  // Accept the props as an object

  const [mobileNumber, setMobileNumber] = useState('9962639199');
  const [bodySMS, setBodySMS] = useState(
    'Please Help',
  );

  const initiateSMS = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert('Please insert correct contact number');
      return;
    }

    SendSMS.send(
      {
        // Message body
        body: bodySMS,
        // Recipients Number
        recipients: [mobileNumber],
        // An array of types 
        // "completed" response when using android
        successTypes: ['sent', 'queued'],
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  };

  const props = {
    activeStrokeWidth: 10,
    inActiveStrokeWidth: 10,
    inActiveStrokeOpacity: 0.2,
  };
  const [ismodalvisible, setIsmodalvisible] = useState(false);
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBMI] = useState(null);
  const [obesity, setObesity] = useState(null);

  const handelmodel = () => {
    setIsmodalvisible(!ismodalvisible);

    const getData = async () => {
      const uid = auth().currentUser.uid
      firestore().collection("Users").doc(uid).onSnapshot((snapshot) => {
        console.log(snapshot.data())
        const height = snapshot.data().height
        const weight = snapshot.data().Weight
        setHeight(height)
        setWeight(weight)
        console.log('fetched');
        if (height && weight) {
          const heightInMeters = height / 100;
          const bmiValue = weight / (heightInMeters * heightInMeters);
          setBMI(bmiValue.toFixed(2));

        }


      })
    }

    useEffect(() => {
      getData()
    }, []);


  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '7%',
          // marginVertical: '5%',
          marginTop: '7%',
        }}>
        <View>
          <Text style={{ fontSize: 19, fontWeight: '700' }}>Hi, Tarun</Text>
          {/* <Text style={{ fontSize: 13 }}>
            {nday} {ndate} {nmonth}
          </Text> */}
        </View>
        <Image
          style={{
            height: '96%',
            width: '13%',
            resizeMode: 'contain',
            borderRadius: 100,
          }}
          source={require('../Assets/profile.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '35%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={initiateSMS}
          style={{
            height: '69%',
            width: '50%',
            borderWidth: 0.3,
            borderRadius: 10,
            marginLeft: '5%',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: '1%',
            marginHorizontal: '3%',
            backgroundColor: 'white',
            borderColor: 'lightgray',
          }}>
            <Icon name='emergency-share' size={70} color={'red'}></Icon>
            <Text style={{color:'black',fontSize:16,marginTop:10}}>Emergency Share</Text>

          {/* <CircularProgressBase
            {...props}
            transition="0.3 "
            value={0}
            radius={45}
            activeStrokeColor={'#2465FD'}
            activeStrokeSecondaryColor={'#C25AFF'}
            inActiveStrokeColor={'#B298D6'}></CircularProgressBase> */}
          {/* <Text style={{ marginTop: '2%', fontWeight: '700', fontSize: 10 }}>
            Obesity {20}%
          </Text>
          <Text style={{ marginTop: '2%', fontWeight: '700', fontSize: 10 }}>
            Height {height} cm
          </Text>
          <Text style={{ marginTop: '2%', fontWeight: '700', fontSize: 10 }}>
            Weight {weight}KG
          </Text> */}
          
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('MedRecords') }}
          style={{
            height: '69%',
            width: '33%',
            borderWidth: 1,
            // marginVertical: '10%',
            marginHorizontal: '3%',
            borderWidth: 0.3,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderColor: 'lightgray',
          }}>
          <MaterialCommunityIcons name="file-cloud" size={40} color="gray" />
          <Text
            style={{
              fontSize: 11,
              fontWeight: '800',
              marginTop: '5%',
              color: 'black',
            }}>
            View Your records
          </Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity
        style={{
          height: '13%',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 0.3,
          flexDirection: 'row',
          marginTop: '5%',
          backgroundColor: 'white',
          borderColor: 'lightgray',


        }}>
        <Image
          style={{
            height: '85%',
            width: '25%',
            resizeMode: 'contain',
            marginVertical: '3%',
          }}
          source={require('../Assets/pill.png')}
        />
        <View>
          <Text
            style={{
              fontSize: 17,
              marginTop: '10%',
              marginHorizontal: '7%',
              color: 'black',
            }}>
            Wanna check your Pill ?
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginHorizontal: '5%',
              marginHorizontal: '17%',
            }}>
            Know about you Pill
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: '13%',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 0.2,
          flexDirection: 'row',
          marginTop: '5%',
          backgroundColor: 'white',
          borderColor: 'lightgray',
        }}>
        <Image
          style={{
            height: '50%',
            width: '15%',
            resizeMode: 'contain',
            alignSelf: 'center',
            marginLeft: '5%',
            // marginVertical: '5%',
          }}
          source={require('../Assets/Schedule.png')}
        />
        <View>
          <Text
            style={{
              fontSize: 13,
              marginTop: '10%',
              color: 'black',
              marginHorizontal: '3%',
              textAlign: 'center',
              color: 'black',
            }}>
            struggling to take medications on time?
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginHorizontal: '5%',
              marginTop: '3%',
              textAlign: 'center',
            }}>
            {' '}
            checkkout of new feature
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 100,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    // marginVertical: '5%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  img: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
    borderRadius: 90,
    marginHorizontal: '10%',
  },
  Mcontainer: {
    flex: 1,
  },
  Mclose: {
    height: '39%',
    width: '9%',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '5%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AMclose: {
    height: '65%',
    width: '9%',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '5%',
    marginLeft: '5%',
  },

  Muptxt: {
    fontSize: 18,
    color: 'black',
    marginVertical: '19%',
    marginHorizontal: '9%',
    fontWeight: '700',
    textAlign: 'center',
  },
  AMuptxt: {
    fontSize: 18,
    color: 'black',
    marginTop: '6%',
    marginHorizontal: '9%',
    fontWeight: '700',
    textAlign: 'center',
  },

  Mframe: {
    height: '35%',
    width: '90%',
    borderBottomWidth: 0.2,
    alignSelf: 'center',
    marginTop: '1%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

});