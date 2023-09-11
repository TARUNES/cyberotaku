import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import CircularProgressBase from 'react-native-circular-progress-indicator';
import { format } from 'date-fns';
const { height, width } = Dimensions.get('window');

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2
};

const Home = ({ navigation }) => {

  const formatDate = (date) => {
    // Format the date as "day Mon MMM"
    return format(date, 'd MMM yy');
  };

  const myDate = new Date();

  const props = {
    activeStrokeWidth: 15,
    inActiveStrokeWidth: 20,
    inActiveStrokeOpacity: 0.2,
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Welcome Back</Text>
        <Text style={{ color: 'black', fontSize: 23, fontWeight: '800' }}>Hinata</Text>
      </View>
      <View style={{marginBottom:10}}>
        <Text style={{ color: 'black', fontSize: 25, fontWeight: '700' }}>Health Overview</Text>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '300' }}>your Daily Health Statistics</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ height: 250, width: 180, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'center' }}>
          <View style={{ marginTop: 20 }}>
            <CircularProgressBase
              {...props}
              value={89}
              radius={70}
              activeStrokeColor={'#e84118'}
              inActiveStrokeColor={'#e84118'}
            >
            </CircularProgressBase>
          </View>
          <Text style={{ marginTop: 10, fontSize: 20,color:'black' }}>Risk Level</Text>
          <Text style={{ marginTop: 6, fontSize: 20, color: '#e84118', fontWeight: '700' }}>Extreme</Text>
        </View>

        <View>
          <View style={{ height: 80, width: 150, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 23, fontWeight: '800', color: 'black' }}>{formatDate(myDate)}</Text>

          </View>
          <TouchableOpacity style={{ height: 160, width: 150, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'flex-start', padding: 20 }}>
            <Text style={{ fontSize: 23, fontWeight: '600', color: 'black', marginTop: 10 }}>BMI</Text>
            <Text style={{ fontSize: 43, fontWeight: '800', color: 'black' }}>27.5</Text>
          </TouchableOpacity>
        </View>

      </View>
      <TouchableOpacity  style={{ height: 140, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'flex-start', padding: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: '600', color: 'black' }}>Pill Check?</Text>
        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', marginTop: 8 }}>Track medication effects and symptoms effortlessly for better health insights</Text>

      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ height: 140, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'flex-start', padding: 20, marginTop: 20, width: 250 }}>
          <Text style={{ fontSize: 25, fontWeight: '600', color: 'black' }}>Schedule Intake</Text>
          <Text style={{ fontSize: 12, fontWeight: '500', color: 'black', marginTop: 8 }}>Effortlessly manage your medication schedule with our Pill Reminder. Get timely notifications to stay on top of your health.</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{ height: 140, backgroundColor: 'rgba(186, 178, 235,0.4)', borderRadius: 20, alignItems: 'flex-start', padding: 20, marginTop: 20, width: 130 }}>
          <Text style={{ fontSize: 23, fontWeight: '600', color: 'black', marginTop: 10 }}>Water</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{ fontSize: 43, fontWeight: '800', color: 'black' }}>3</Text>
          <Text style={{ fontSize: 23, fontWeight: '500', color: 'black',marginTop:19 }}> litres </Text>
          </View>

        </TouchableOpacity>
      </TouchableOpacity>
    </View >

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: 'white',
    padding: 10,
    backgroundColor: 'white'
  }
})