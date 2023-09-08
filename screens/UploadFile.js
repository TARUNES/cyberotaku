import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { firebase } from '@react-native-firebase/auth';

const UploadFile = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const currentUser = firebase.auth().currentUser.uid;
    const uploadImage = async () => {
        console.log(selectedImage);
        if (selectedImage) {
            const imageUri = selectedImage;

            const userId = currentUser;
            const imageName = `${userId}_${new Date().getTime()}.jpg`;
            const reference = storage().ref(`${userId}/${imageName}`);

            try {
                await reference.putFile(imageUri);
                console.log('Image uploaded successfully.');
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
        <View>
            <Text>UploadFile</Text>
            {selectedImage ? (
                <Image
                    style={{ height: 400, width: 400 }}
                    source={{ uri: selectedImage }}
                />
            ) : null}
            <Button onPress={pickImage} title='Select Image' />
            <Button onPress={uploadImage} title='Upload Image' />
        </View>
    );
};

export default UploadFile;

const styles = StyleSheet.create({});
