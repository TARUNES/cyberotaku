import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  RefreshControl,
} from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';

const MedRecords = ({ navigation }) => {
  const { height, width } = Dimensions.get('window');
  const [imageData, setImageData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchImages = useCallback(async () => {
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
            const title = metadata.name.replace(/\.[^/.]+$/, ''); // Remove file extension
            return {
              url,
              title,
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
    } finally {
      // After fetching, stop the refreshing indicator
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    // Fetch images when the component mounts
    fetchImages();
  }, [fetchImages]);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  const onRefresh = () => {
    // Start refreshing
    setRefreshing(true);
    // Fetch images again when the user pulls down to refresh
    fetchImages();
  };

  return (
    <View style={{ height: height, padding: 10, backgroundColor: 'rgba(186, 178, 235,0.4)' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.header}>Medical Records</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddMedRecord')}>
          <Icon name="addfile" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ flexDirection: 'column' }}>
          {imageData.map((data, index) => (
            <View style={{ height: 400, backgroundColor: '#efedf5', marginVertical: 10 }}>
              <TouchableOpacity key={index} onPress={() => openImageModal(data.url)}>
                <View style={{ paddingTop: 10, paddingHorizontal: 5 }}>
                  <Image source={{ uri: data.url }} style={{ height: 300, resizeMode: 'cover' }} />
                  <View style={{ marginBottom: 5, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>
                      Hospital: Apollo Hospital
                    </Text>
                    <Text style={{ color: 'black', fontWeight: '700' }}>
                      Date: {data.creationTime.toDateString()}
                    </Text>
                  </View>
                  <View style={{ marginTop: 5, marginBottom: 5 }}>
                    <Text style={{ textAlign: 'justify', color: '#171a17', fontSize: 15, fontWeight: 500 }}>
                      Description: {data.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={closeImageModal}
            style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Close</Text>
          </TouchableOpacity>
          <Image source={{ uri: selectedImage }} style={{ flex: 1, resizeMode: 'contain' }} />
        </View>
      </Modal>
    </View>
  );
};

export default MedRecords;

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 35,
    fontWeight: '700',
    color: 'black',
  },
});
