import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ToastAndroid } from 'react-native';

const AddMedRecord = () => {
    const [Desp, setDesp] = useState('');
    // useEffect(() => {
    //     const subscription = RNShake.addListener(() => {
    //      console.log('Shaked');
    //     })
    //     return () => {
    //         // Your code here...
    //         subscription.remove()
    //       }
    //     }, [])
  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Description:</Text>
                <TextInput style={styles.input} onChangeText={newText => setDesp(newText)}></TextInput>
            </View>
    </View>
  )
}

export default AddMedRecord

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
})