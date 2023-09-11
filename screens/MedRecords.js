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
    <View style={{ height: height, padding: 10 }}>
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
        // horizontal={true}
        // contentContainerStyle={{ width: `${100 * 20}%` }}
        showsHorizontalScrollIndicator={false}

      >
        <View style={{ flexDirection: 'column', padding: 7 }}>
          {imageData.map((data, index) => (
            <View style={{ backgroundColor: 'white', marginVertical: 10, borderRadius: 20, padding: 10,borderWidth:0.3,borderColor:'lightgrey' }}>
              <TouchableOpacity key={index} onPress={() => openImageModal(data.url)}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={{ uri: data.url }} style={{ height: 100, width: 100, resizeMode: 'cover' }} />
                  <View style={{ flexDirection: 'column', flex: 1, marginLeft: 8 }}>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={{ color: 'grey', fontWeight: '500', fontSize: 13, marginLeft: 5 }}>
                        Hospital Name:
                      </Text>
                      <Text style={{ color: 'black', fontWeight: '700', fontSize: 18, marginLeft: 5 }}>
                        {data.title}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 5 }}>
                      <Text style={{ color: 'grey', fontWeight: '500', fontSize: 13, marginLeft: 5 }}>
                        Date:
                      </Text>
                      <Text style={{ color: 'black', fontWeight: '700', fontSize: 16, marginLeft: 5 }}>
                        {data.creationTime.toDateString()}
                      </Text>
                    </View>
                    {/* <Text style={{ color: 'black', fontWeight: '700' }}>
                      Date: {data.creationTime.toDateString()}
                    </Text> */}
                    {/* <View style={{ marginTop: 5, marginBottom: 5 }}>
                    <Text style={{ textAlign: 'justify', color: '#171a17', fontSize: 15, fontWeight: 500 }}>
                      Description: {data.title}
                    </Text>
                  </View> */}
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
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
});
