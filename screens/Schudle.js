import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import { ScrollView } from 'react-native-gesture-handler';

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
    console.log(documents);
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
            // <View>
            //   <Text>{item.PillName}</Text>
            //   <Text>MChecked: {item.MChecked ? 'Yes' : 'No'}</Text>
            //   <Text>EChecked: {item.EChecked ? 'Yes' : 'No'}</Text>
            //   <Text>NChecked: {item.NChecked ? 'Yes' : 'No'}</Text>
            //   <Text>Date: {item.Date._seconds ? new Date(item.Date._seconds * 1000).toLocaleString() : ''}</Text>
            // </View>
            <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20 }}>
              <View style={{ height: 85, width: '85%', borderWidth: 0.3, flexDirection: 'row', justifyContent: 'space-around', borderRadius: 10, backgroundColor: 'white' }}>
                <Image style={{ height: '55%', width: '20%', resizeMode: 'contain', marginVertical: '8%' }} source={require('../Assets/pill1.png')} />
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ color: 'black', fontSize: 19 ,fontWeight:'600'}}>{item.PillName}</Text>
                  <Text style={{ color: 'black', fontSize: 16,fontWeight:'00' }}>9.00 am</Text>
                </View>
                <View style={{ height: 60, width: '20%', borderWidth: 0.3, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', marginVertical: '4%' }}>
                  <Text style={{ textAlign: 'center' }}>1</Text>
                  <Text style={{ textAlign: 'center' }}>Tablet</Text>
                </View>
              </View>
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
