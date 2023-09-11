import {StyleSheet, Text, View, FlatList,Dimensions} from 'react-native';
import React from 'react';
import Doctorcomponent from '../components/Doctorcomponent';
import doctorsData from '../Doctordata/DoctorData';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Doctorlist = () => {
  const { height, width } = Dimensions.get('window');
  return (
    <View  style={{ height: height, padding: 20, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.header}>Specialists</Text>
        {/* <Icon name="stethoscope" size={25} color="black" /> */}
      </View>
      <FlatList style={{}}
        data={doctorsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Doctorcomponent {...item} 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
  
        />}
      />
    </View>
  );
};

export default Doctorlist;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
    marginRight: 10
  },
});
