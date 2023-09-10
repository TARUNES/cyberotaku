import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ToastAndroid,Button,Image } from 'react-native';

import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { firebase } from '@react-native-firebase/auth';


const AddMedRecord = ({navigation}) => {
    const [Desp, setDesp] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const currentUser = firebase.auth().currentUser.uid;
    const uploadImage = async () => {
        console.log(selectedImage);
        if (selectedImage) {
            const imageUri = selectedImage;

            const userId = currentUser;
            const imageName = `${Desp}.jpg`;
            const reference = storage().ref(`${userId}/${imageName}`);

            try {
                await reference.putFile(imageUri);
                console.log('Image uploaded successfully.');
                navigation.goBack()
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            console.log('No image selected for upload.');
        }
    };

    const pickImage = () => {
        let options = {
            mediaType: 'photo',
        };

        launchImageLibrary(options, (response) => {
            if (response.assets.length > 0) {
                setSelectedImage(response.assets[0].uri);
            }
        });
    };

  return (
    <View style={styles.container}>
        <Text style={{fontSize:30,fontWeight:'700',color:'black'}}>Add Your Record</Text>
     <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Description:</Text>
                <TextInput style={styles.input} onChangeText={newText => setDesp(newText)}></TextInput>
            </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
        <Text style={{color:'black',fontSize:20}}>Select File</Text>
        <TouchableOpacity onPress={pickImage} style={{height:30,width:70,backgroundColor:'#A294F6',borderRadius:30,justifyContent:'center',alignItems:'center',marginBottom:10}}>
            <Text style={{color:'white',fontWeight:'500',fontSize:16}}>Set</Text>
        </TouchableOpacity>
        
    </View>
    <View style={{backgroundColor:'lightgrey',height:310,padding:7,marginBottom:30,borderRadius:10}}>
         
            {selectedImage ? (
            
                <Image
                    style={{ height: 300,}}
                    source={{ uri: selectedImage }}
                />
            ) : (<View><Text style={{alignSelf:'center',top:'50%',color:'black'}}>Select a Image</Text></View>)}
            {/* <Button onPress={pickImage} title='Select Image' /> */}
            {/* <Button onPress={uploadImage} title='Upload Image' /> */}
        </View>
    <TouchableOpacity onPress={uploadImage} style={{height:50,backgroundColor:'#A294F6',width:'100%',borderRadius:13,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'white',fontWeight:'600'}}>Upload</Text>
    </TouchableOpacity>
    </View>
  )
}

export default AddMedRecord

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#baf7c2',
        padding: 20,
        backgroundColor:'rgba(186, 178, 235,0.4)'
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
        // width: '85%',
        borderRadius: 10,
        paddingLeft:20,
        fontSize:16
    },
})