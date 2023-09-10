import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

const MedRecords = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const currentUser = auth().currentUser;

        if (currentUser) {
          const userId = currentUser.uid;
          console.log('Current User ID:', userId);

          const storageRef = storage().ref(userId);

          const result = await storageRef.listAll();

          const imageDetails = await Promise.all(
            result.items.map(async (item) => {
              const url = await item.getDownloadURL();
              const metadata = await item.getMetadata();
              const creationTime = new Date(metadata.timeCreated); // Convert to Date object
              return {
                url,
                name: metadata.name,
                creationTime,
              };
            })
          );

          // Set the array of image data in state
          setImageData(imageDetails);
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
    <View style={{ padding: 10 }}>
      <Text style={{ color: 'black', fontSize: 25, fontWeight: '800' }}>
        Here Your Medical Records
      </Text>
      <ScrollView>
        <View style={{ flexDirection: 'column' }}>
          {imageData.map((data, index) => (
            <View key={index} style={{ paddingTop: 10, paddingHorizontal: 5 }}>
              <Image source={{ uri: data.url }} style={{ height:400, resizeMode: 'cover' }} />
              <View style={{ marginTop: 5, marginBottom: 5 }}>
                <Text style={{ textAlign: 'justify', color: '#171a17', fontSize: 17, fontWeight: 500 }}>
                  {data.name}
                </Text>
              </View>
              <View style={{ marginBottom: 5, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Text style={{ color: 'grey' }}>Hospital: Your Hospital Name</Text>
                <Text style={{ color: 'grey' }}>Date: {data.creationTime.toDateString()}</Text>
              </View>
            </View>
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
// Plplpl@Platform.com