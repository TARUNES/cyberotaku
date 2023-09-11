import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

const Schudle = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const currentUser = firebase.auth().currentUser.uid;

  // Define the fetchScheduleData function outside of useEffect
  const fetchScheduleData = async () => {
    setRefreshing(true);
    const collectionRef = firestore().collection(currentUser);
    const querySnapshot = await collectionRef.get();
    const documents = [];
    querySnapshot.forEach((doc) => {
      // Extract the data from each document
      const data = doc.data();
      documents.push({
        id: doc.id,
        ...data,
      });
    });
    setData(documents);
    setRefreshing(false);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchScheduleData();
  }, [currentUser]);

  const handleRefresh = () => {
    // Trigger a refresh when the user manually refreshes
    fetchScheduleData();
  };

  return (
    <View>
      <View style={styles.TopBar}>
        <Text style={{ fontSize: 25, color: 'black' }}>Pill Schedule</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddSchudle')}>
          <Text style={{ fontSize: 30, color: 'black' }}>+</Text>
        </TouchableOpacity>
      </View>
    <ScrollView
      // style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      {/* Render your schedule data here */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.PillName}</Text>
            <Text>MChecked: {item.MChecked ? 'Yes' : 'No'}</Text>
            <Text>EChecked: {item.EChecked ? 'Yes' : 'No'}</Text>
            <Text>NChecked: {item.NChecked ? 'Yes' : 'No'}</Text>
            <Text>Date: {item.Date._seconds ? new Date(item.Date._seconds * 1000).toLocaleString() : ''}</Text>
          </View>
        )}
      />
    </ScrollView>
    </View>
  );
};

export default Schudle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  TopBar: {
    height: 80,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});
