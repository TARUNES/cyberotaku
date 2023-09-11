import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';

import DateButton from './Datebtn';
import TimeSlotButton from './TimeSlotButton';

import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Doctorcomponent = ({
  name,
  specialty,
  imageSource,
  aboutMe,
  rating,
  reviews,
  patients,
  yearsExpert,
  hospital,
  dayOfMonth,
  dayOfWeek,
  timeSlots,
}) => {
  const [ismodalvisible, setIsmodalvisible] = useState(false);
  const [isAppointmentModalVisible, setIsAppointmentModalVisible] =
    useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedName,setSelectedName]=useState(null)
  // setSelectedName(name)

  const handleButtonPress = dayOfWeek => {
    setSelectedButton(dayOfWeek);
  };

  const handelmodel = () => {
    setIsmodalvisible(!ismodalvisible);
  };

  const handleBookAppointment = () => {
    setIsAppointmentModalVisible(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalVisible(false);
  };

  const handleTimeSlotPress = timeSlot => {
    setSelectedTimeSlot(timeSlot);
  };
  const ConfirmAppointment = () => {
    setSelectedName(name)
    const currentUser = firebase.auth().currentUser.uid;
    if (currentUser) {
        const userId = currentUser; // Get the user's ID
        console.log('Current User ID:', userId); // Log the user's ID
    } else {
        console.log('User is not authenticated.');
    }
    firestore().collection('Doctor').doc(currentUser).set(
      {
        name:selectedName,
        date: selectedButton,
        timeslot: selectedTimeSlot

      },{merge: true},).then(()=>console.log('Added Slot'))
    console.log(selectedButton,selectedTimeSlot);
    Toast.show({
      type: 'success', // You can change the type to WARNING, ERROR, etc. if needed
      text1: 'Appointment Confirmed',
      text2: 'Your appointment has been successfully booked!',
    });

    // You can also close the appointment modal here if needed
    // setIsAppointmentModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.box} onPress={handelmodel}>
          <Image style={styles.img} source={{uri: imageSource}} />
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black'}}>{name}</Text>
            <Text>{specialty}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal visible={ismodalvisible} animationType="slide">
        <View style={styles.Mcontainer}>
          <View style={{flexDirection: 'row', height: '11%'}}>
            <TouchableOpacity style={styles.Mclose} onPress={handelmodel}>
              <Feather name="chevron-left" size={29} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.Muptxt}>About</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Mframe}>
            <Image
              style={{
                resizeMode: 'contain',
                height: '70%',
                width: '100%',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderWidth: 0.5,
              }}
              source={{uri: imageSource}}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: '3%',
                }}>
                <Text style={{fontSize: 18, color: 'black'}}>{name}</Text>
                <Text style={{color: 'black'}}>
                  ⭐ {rating} ({reviews} reviews)
                </Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: '5%',
                  color: 'black',
                }}>
                {specialty} | {hospital}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '3%',
              marginVertical: '5%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                marginHorizontal: '3%',
                marginVertical: '5%',
                alignItems: 'center',
              }}>
              <Image
                style={{marginHorizontal: '3%', marginVertical: '1%'}}
                source={require('../Assets/Icon1.png')}
              />
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 13,
                  color: 'black',
                }}>
                {patients}
              </Text>
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 10,
                }}>
                Patients
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: '3%',
                marginVertical: '5%',
                alignItems: 'center',
              }}>
              <Image
                style={{marginHorizontal: '3%', marginVertical: '1%'}}
                source={require('../Assets/Icon2.png')}
              />
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 13,
                  color: 'black',
                }}>
                {yearsExpert}
              </Text>
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 10,
                }}>
                Years expert
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: '3%',
                marginVertical: '5%',
                alignItems: 'center',
              }}>
              <Image
                style={{marginHorizontal: '3%', marginVertical: '1%'}}
                source={require('../Assets/Icon3.png')}
              />
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 13,
                  color: 'black',
                }}>
                {rating}
              </Text>
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 10,
                }}>
                Rating
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: '3%',
                marginVertical: '5%',
                alignItems: 'center',
              }}>
              <Image
                style={{marginHorizontal: '3%', marginVertical: '1%'}}
                source={require('../Assets/Icon4.png')}
              />
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 13,
                  color: 'black',
                }}>
                {reviews}
              </Text>
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 10,
                }}>
                Reviews
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: '5%'}}>
            <Text style={{fontSize: 19, color: 'black'}}>About Me</Text>
            <Text style={{marginVertical: '2%'}}>{aboutMe}</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleBookAppointment}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                color: 'white',
                fontWeight: '700',
              }}>
              Book Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal for Booking Appointment */}

      <Modal
        visible={isAppointmentModalVisible}
        animationType="slide"
        onRequestClose={closeAppointmentModal}>
        {/* Add your content for the appointment booking modal here */}
        <View style={styles.appointmentModal}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.AMclose}
              onPress={closeAppointmentModal}>
              <Feather name="chevron-left" size={29} color="black" />
            </TouchableOpacity>
            <Text style={styles.AMuptxt}>Book Your Appointment!!</Text>
          </View>
          {/* <View>
            <Text
            style={{
              textAlign: 'center',
              marginHorizontal: '4%',
              marginVertical: '10%',
              fontSize: 20,
              fontWeight: '500',
              color:'black',
            }}>
              Your health is an investment, not an expense. Book the appointment
              today!!
              </Text>
            </View> */}

          <View>
            <Text
              style={{
                marginHorizontal: '8%',
                marginTop: '10%',
                fontWeight: '900',
                fontSize: 19,
                color: 'black',
              }}>
              Appointment Schedule
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: '5%',
              marginVertical: '5%',
            }}>
            {dayOfWeek.map((day, index) => (
              <DateButton
                key={day}
                dayOfWeek={day}
                dayOfMonth={dayOfMonth[index]}
                selected={selectedButton === day}
                onPress={() => handleButtonPress(day)}
              />
            ))}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {timeSlots.map(timeSlot => (
              <TimeSlotButton
                key={timeSlot}
                timeSlot={timeSlot}
                selected={selectedTimeSlot === timeSlot}
                onPress={() => handleTimeSlotPress(timeSlot)}
              />
            ))}
          </View>
          
            <TouchableOpacity style={styles.btn} onPress={ConfirmAppointment}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'white',
                  fontWeight: '700',
                }}>
                Confirm Appointment
              </Text>
            </TouchableOpacity>
          <Toast/>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 90,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    marginVertical: 8,
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
  btn: {
    marginTop: '15%',
    height: '7%',
    width: '85%',
    backgroundColor: '#A294F6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Doctorcomponent;
