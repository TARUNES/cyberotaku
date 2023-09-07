import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { getStorage, ref, uploadString, getDownloadURL } from '@react-native-firebase/storage';

function FileUploadComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadURL, setDownloadURL] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      const { uri, name } = result;

      setIsLoading(true);

      const storage = getStorage();
      const storagePath = '/'; // Updated storage path
      const storageRef = ref(storage, storagePath + name);

      // Upload the selected file to Firebase Cloud Storage
      await uploadString(storageRef, uri, 'data_url');

      // Get the download URL for the uploaded file
      const url = await getDownloadURL(storageRef);

      setIsLoading(false);
      setDownloadURL(url);

      // Handle the download URL as needed, e.g., display it to the user.
      console.log('File available at:', url);
    } catch (err) {
      setIsLoading(false);
      console.error(err);

      // Handle errors here, e.g., display an error message to the user.
    }
  };

  return (
    <View style={{justifyContent:'center',alignItems:'center' }} >
      <Button title="Select File" onPress={pickDocument} />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {downloadURL && <Text>File available at: {downloadURL}</Text>}
    </View>
  );
}

export default FileUploadComponent;
