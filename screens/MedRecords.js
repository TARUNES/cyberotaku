import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet,Text } from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
// import { Text } from 'react-native-svg';

const MedRecords = () => {
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const currentUser = auth().currentUser; 

        if (currentUser) {
          const userId = currentUser.uid; 
          console.log('Current User ID:', userId); 

          const storageRef = storage().ref(userId); 

          const result = await storageRef.listAll();


          const urls = await Promise.all(
            result.items.map(async (item) => {
              return item.getDownloadURL();
            })
          );

          // Set the array of image URLs in state
          setImageURLs(urls);
          console.log(imageURLs);
        } else {
          console.log('User is not authenticated.');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <View style={{padding:10}}>
    <Text style={{color:'black',fontSize:25,fontWeight:'800'}}>Here Your Medical Records</Text>
    <ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {imageURLs.map((url, index) => (
          <Image
            key={index}
            source={{ uri: url }}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        ))}
      </View>
    </ScrollView>
    </View>
  );
};

export default MedRecords;

const styles = StyleSheet.create({
  container: {},
});
