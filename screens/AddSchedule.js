import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ToastAndroid } from 'react-native';
import CheckBox from 'react-native-check-box';
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';

import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const AddSchedule = () => {
    const [pillname, setPillname] = useState('');
    const [intake, setIntake] = useState();
    const [no_of_days, setNoDays] = useState();
    const [MChecked, isMChecked] = useState(false);
    const [EChecked, isEChecked] = useState(false);
    const [NChecked, isNChecked] = useState(false);

    const [date, setDate] = useState(new Date());
    const [openDate, setDateOpen] = useState(false);

    const DbPill = () => {
        const userDocument = firestore().collection('Users').doc('ABC');
    }

    const handleAddButtonPress = () => {
        const currentUser = firebase.auth().currentUser.uid; // Get the current authenticated user

        if (currentUser) {
            const userId = currentUser; // Get the user's ID
            console.log('Current User ID:', userId); // Log the user's ID
        } else {
            console.log('User is not authenticated.');
        }

        const userDocument = firestore().collection('Users').doc(currentUser);
        firestore()
            .collection(currentUser)
            // .doc('Pills')
            .add({
                PillName: pillname,
                MChecked: MChecked,
                EChecked: EChecked,
                NChecked: NChecked,
                Date: date

            })
            .then(() => {
                console.log('User added!');
                ToastAndroid.show('Schedule Set!', ToastAndroid.SHORT);
                scheduleNotification(date, pillname);
            });
        
    }
    const scheduleNotification = (notificationDate, pillName) => {
        // PushNotification.createChannel(
        //     {
        //       channelId: 'my-channel-id', // Replace with your channel ID
        //       channelName: 'My Channel',})
        // //       channelDescription: 'A channel to categorize my notifications',
        // //     },
        // //     (created) => console.log(`Channel created: ${created}`)
        // //   );
        // PushNotification.localNotification({
        //   message: `Take ${pillName} at ${notificationDate.toLocaleTimeString()}`,
        //   date: notificationDate,
        //   // Add other notification properties as needed
        // });
      };
    


return (
    <View style={styles.container}>
        <Text>AddSchedule</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Pill Name:</Text>
            <TextInput style={styles.input} onChangeText={newText => setPillname(newText)}></TextInput>
        </View>
        <View style={styles.checkboxContainer}>
            <CheckBox
                style={styles.checkbox}
                onClick={() => {
                    isMChecked(!MChecked);
                }}
                isChecked={MChecked}
                rightText={"Morning"}
                rightTextStyle={styles.checkboxText}
            />
            <CheckBox
                style={styles.checkbox}
                onClick={() => {
                    isEChecked(!EChecked);
                }}
                isChecked={EChecked}
                rightText={"Evening"}
                rightTextStyle={styles.checkboxText}
            />
            <CheckBox
                style={styles.checkbox}
                onClick={() => {
                    isNChecked(!NChecked);
                }}
                isChecked={NChecked}
                rightText={"Night"}
                rightTextStyle={styles.checkboxText}
            />
        </View>
        <View style={styles.datepicker}>
            <Text style={styles.dateLabel}>Intake Duration</Text>
            <TouchableOpacity onPress={() => setDateOpen(true)} style={styles.dateButton}>
                <Text style={styles.dateButtonText}>{date ? date.toDateString() : 'Set'}</Text>
            </TouchableOpacity>
        </View>
        <DatePicker
            modal
            mode="date"
            open={openDate}
            date={date}
            is24hourSource={true}
            onConfirm={(selectedDate) => {
                setDateOpen(false);
                setDate(selectedDate);
                console.log(selectedDate);
            }}
            onCancel={() => {
                setDateOpen(false);
            }}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
            <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
    </View>
);}
        
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#baf7c2',
        padding: 20
    },
    inputContainer: {
        marginTop: 20,
    },
    inputLabel: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        width: '85%',
        margin: 5
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        width: '85%',
        borderRadius: 10
    },
    checkboxContainer: {
        marginTop: 30,
    },
    checkbox: {
        // Add checkbox styles here
    },
    checkboxText: {
        color: 'black',
        fontSize: 20
    },
    datepicker: {
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dateLabel: {
        fontSize: 23,
        color: 'black'
    },
    dateButton: {
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        height: 35,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: 'grey',
        borderWidth: 2,
        paddingHorizontal: 8
    },
    dateButtonText: {
        fontSize: 18,
        color: 'black'
    },
    addButton: {
        height: 50,
        backgroundColor: '#106308',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    addButtonText: {
        color: 'lightgrey',
        fontSize: 25
    }
});

export default AddSchedule;
