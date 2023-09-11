import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ToastAndroid } from 'react-native';

import DatePicker from 'react-native-date-picker';
import PushNotification from "react-native-push-notification";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';


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

    useEffect(() => {
        // Initialize PushNotification in the useEffect
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },

            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);

                // process the notification

                // (required) Called when a remote is received or opened, or local notification is opened
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },

            // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
            onAction: function (notification) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);

                // process the action
            },
            onRegistrationError: function (err) {
                console.error(err.message, err);
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            popInitialNotification: true,

            requestPermissions: true,
        });
    }, []);

    const noti = (date, pill) => {
        // console.log("ithule onum perchana ila bro");
        PushNotification.createChannel({
            channelId: 'hui',
            channelName: 'My Channel',
        });

        // PushNotification.localNotificationSchedule({
        //     channelId: 'hui',
        //     message: `Take ${pill} at ${date.toLocaleTimeString()}`,
        //     date: new Date(Date.now() + 2 * 1000),
        // });
    }

    const handleAddButtonPress = () => {
        const currentUser = firebase.auth().currentUser.uid;



        if (currentUser) {
            const userId = currentUser; // Get the user's ID
            console.log('Current User ID:', userId); // Log the user's ID
        } else {
            console.log('User is not authenticated.');
        }

        const userDocument = firestore().collection('Users').doc(currentUser);
        firestore()
            .collection(currentUser)
            // .doc('currentUser')
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
                noti(date, pillname);
            });

        const notificationTimes = [];
        if (MChecked) {
            notificationTimes.push(new Date(date.setHours(9, 0, 0, 0))); // Notify at 9:00 AM
        }
        if (EChecked) {
            notificationTimes.push(new Date(date.setHours(14, 0, 0, 0))); // Notify at 2:00 PM
        }
        if (NChecked) {
            notificationTimes.push(new Date(date.setHours(21, 0, 0, 0))); // Notify at 9:00 PM
        }
        notificationTimes.forEach((time) => {
            PushNotification.localNotificationSchedule({
                channelId: 'hui',
                message: `Take ${pillname} at ${time.toLocaleTimeString()}`,
                date: time,
                repeatType: 'day', // Repeat daily
                allowWhileIdle: true, // Allow notifications when the app is in the background
            });
        });


    }




    return (
        <View style={styles.container}>

            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    paddingLeft: 10,
                    borderRadius: 10,
                    marginTop: 50,
                    height: 50,
                }}>
                <Icon name={'pill'} color={'#1f2120'} style={{ fontSize: 20, marginTop: 13 }} />
                <TextInput
                    placeholder="Enter The Pill Name"
                    placeholderTextColor={'black'}
                    style={styles.txtinp}
                    textAlign="left"
                    // value={emailID}
                    onChangeText={text => setPillname(text)}></TextInput>
            </View>
            <View style={styles.checkboxContainer}>
                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#A294F6"
                        unfillColor="#FFFFFF"
                        text="Morning"
                        iconStyle={{ borderColor: "black" }}
                        innerIconStyle={{ borderWidth: 0.5 }}
                        disableText={true}
                        // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={() => {
                            isMChecked(!MChecked);
                        }}
                    />
                    <Text style={{ fontSize: 23, color: 'black', marginLeft: 7 }}>Morning</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#A294F6"
                        unfillColor="#FFFFFF"
                        text="Evening"
                        iconStyle={{ borderColor: "black" }}
                        innerIconStyle={{ borderWidth: 0.5 }}
                        disableText={true}
                        // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={() => {
                            isMChecked(!MChecked);
                        }}
                    />
                    <Text style={{ fontSize: 23, color: 'black', marginLeft: 7 }}>Evening</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#A294F6"
                        unfillColor="#FFFFFF"
                        text="Night"
                        iconStyle={{ borderColor: "black" }}
                        innerIconStyle={{ borderWidth: 0.5 }}
                        disableText={true}
                        // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={() => {
                            isMChecked(!MChecked);
                        }}
                    />
                    <Text style={{ fontSize: 23, color: 'black', marginLeft: 7 }}>Night</Text>
                </View>


            </View>
            <View style={styles.datepicker}>
                <Text style={styles.dateLabel}>Intake Duration</Text>
                <TouchableOpacity onPress={() => setDateOpen(true)} style={styles.dateButton}>
                    <IconI name='calendar-number-outline' size={15} color={'#1f2120'}></IconI>
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
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(186, 178, 235,0.4)',
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
        backgroundColor: '#A294F6',
        borderRadius: 20,
        height: 35,
        alignItems: 'center',
        justifyContent: "center",
        // borderColor: 'grey',
        // borderWidth: 2,
        paddingHorizontal: 8,
        flexDirection: 'row'
    },
    dateButtonText: {
        fontSize: 15,
        color: 'black',
        marginLeft: 5
    },
    addButton: {
        height: 50,
        backgroundColor: '#A294F6',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,

    },
    addButtonText: {
        color: 'white',
        fontSize: 25
    },
    txtinp: {
        // flex: 1,
        paddingLeft: 11,
        color: 'black',
        backgroundColor: 'white',
    },
});

export default AddSchedule;
