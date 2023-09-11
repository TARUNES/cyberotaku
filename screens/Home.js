import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import CircularProgressBase from 'react-native-circular-progress-indicator';
import { format } from 'date-fns';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { da } from 'date-fns/locale';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const { height, width } = Dimensions.get('window');

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2
};

const Home = ({ navigation }) => {

  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBMI] = useState(null);
  const [obesity, setObesity] = useState(null);

  // const [appointments, setAppointments] = useState([]);
  const [date, setdate] = useState('')
  const [name, setname] = useState('')
  const [timeslot, settimeslot] = useState('')



  const getData = async () => {
    const uid = auth().currentUser.uid
    firestore().collection("Users").doc(uid).onSnapshot((snapshot) => {
      console.log(snapshot.data())
      const height = snapshot.data().height
      const weight = snapshot.data().Weight

      setHeight(height)
      setWeight(weight)
      if (height && weight) {
        const heightInMeters = height / 100; // Convert height to meters
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBMI(bmiValue.toFixed(2)); // Round BMI to 2 decimal places
        const getObesityLevel = (bmi) => {
          if (bmi < 18.5) {
            return 'Underweight';
          } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal Weight';
          } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
          } else {
            return 'Obese';
          }
        };

        setObesity(getObesityLevel(bmi));
      }
    })
    firestore().collection("Doctor").doc(uid).onSnapshot((snapshot) => {
      console.log(snapshot.data())
      const date = snapshot.data().date
      const name = snapshot.data().name
      const timeSlot = snapshot.data().timeslot

      setdate(date)

      setname(name)
      settimeslot(timeSlot)
    })
    // firestore()
    //   .collection('Doctor') // Replace 'Doctor' with the appropriate collection name
    //   .doc(uid)
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       const appointmentData = doc.data();
    //       // Assuming that your appointment data is an array stored under 'appointments' field
    //       const appointments = appointmentData.appointments || [];
    //       setAppointments(appointments);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching appointment data: ', error);
    //   });

  }

  useEffect(() => {
    getData()
  }, []);

  const formatDate = (date) => {
    return format(date, 'd MMM yy');
  };

  const myDate = new Date();

  const props = {
    activeStrokeWidth: 15,
    inActiveStrokeWidth: 20,
    inActiveStrokeOpacity: 0.2,
  };

  return (
    <ScrollView style={styles.container}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

        }}>
        <View>
          <Text style={{ fontSize: 19, fontWeight: '700' }}>Hi, Sriram</Text>
          {/* <Text style={{ fontSize: 13 }}>
            {nday} {ndate} {nmonth}
          </Text> */}
        </View>
        <Image
          style={{
            height: 40,
            width: 40,
            resizeMode: 'contain',
            borderRadius: 100,
          }}
          source={require('../Assets/profile.png')}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: 'black', fontSize: 25, fontWeight: '700' }}>Health Overview</Text>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '300' }}>your Daily Health Statistics</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ height: 250, width: 170, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'center' }}>
          <View style={{ marginTop: 20 }}>
            <CircularProgressBase
              {...props}
              transition="0.3 "
              value={80}
              radius={70}
              activeStrokeColor={'#2465FD'}
              activeStrokeSecondaryColor={'#C25AFF'}
              inActiveStrokeColor={'#B298D6'}></CircularProgressBase>
          </View>
          <Text style={{ marginTop: 10, fontSize: 20, color: 'black' }}>Risk Level</Text>
          <Text style={{ marginTop: 6, fontSize: 20, color: '#e84118', fontWeight: '700' }}>{obesity}</Text>
        </View>

        <View>
          <View style={{ height: 80, width: 150, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 23, fontWeight: '800', color: 'black' }}>{formatDate(myDate)}</Text>

          </View>
          <TouchableOpacity style={{ height: 160, width: 150, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'flex-start', padding: 20 }}>
            <Text style={{ fontSize: 23, fontWeight: '600', color: 'black', marginTop: 10 }}>BMI</Text>
            <Text style={{ fontSize: 40, fontWeight: '800', color: 'black' }}>{bmi}</Text>
          </TouchableOpacity>
        </View>

      </View>
      <TouchableOpacity onPress={() => navigation.navigate('DrugCheck')}
        style={{
          height: '13%',

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
              marginHorizontal: '17%'
            }}>
            Know about you Pill
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: '13%',
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 0.2,
          flexDirection: 'row',
          marginTop: '5%',
          backgroundColor: 'white',
          borderColor: 'lightgray',
        }} onPress={() => navigation.navigate('Sceudle')}>
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

      <View>
        <Text style={{ fontWeight: '700', fontSize: 20, color: 'black', marginVertical: 10 }}>  Appointments</Text>
          <View style={{ height: 80, borderWidth: 0.3, borderRadius: 10,justifyContent:'center',alignItems:'flex-start' ,padding:20,borderColor:'lightgrey'}}>
        {/* <MaterialCommunityIcons name='timer-sand' size={50}></MaterialCommunityIcons> */}
            {/* <View> */}

            <Text style={{fontSize:16,color:'black',fontWeight:'500'}}>Name:     {name}</Text>
            <Text  style={{fontSize:16,color:'black',fontWeight:'500'}}>Date:         {date}</Text>
            <Text  style={{fontSize:16,color:'black',fontWeight:'500'}}>Time Slot: {timeslot}</Text>
            {/* </View> */}

          </View>
        
      </View>
      <View style={{ height: 200, borderWidth: 0 }}>

      </View>

    </ScrollView >

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: 'white',
    padding: 15,
    backgroundColor: 'white'
  }
})