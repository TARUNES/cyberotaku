import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import { CircularProgressBase } from 'react-native-circular-progress-indicator';

const { height, width } = Dimensions.get('window');

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Welcome Back</Text>
        <Text style={{ color: 'black', fontSize: 23, fontWeight: '800' }}>Hinata</Text>
      </View>
      <View>
        <Text style={{ color: 'black', fontSize: 25, fontWeight: '700' }}>Health Overview</Text>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '300' }}>your Daily Health Statistics</Text>
      </View>
      {/* <View style={{}}>
        <CircularProgressBase
          {...props}
          value={80}
          radius={125}
          activeStrokeColor={'#e84118'}
          inActiveStrokeColor={'#e84118'}
        >
          <CircularProgressBase
            {...props}
            value={87}
            radius={100}
            activeStrokeColor={'#badc58'}
            inActiveStrokeColor={'#badc58'}
          >
            <CircularProgressBase
              {...props}
              value={62}
              radius={75}
              activeStrokeColor={'#18dcff'}
              inActiveStrokeColor={'#18dcff'}
            />
          </CircularProgressBase>
        </CircularProgressBase>
      </View> */}
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: 'rgba(186, 178, 235,0.4)',
    padding: 10
  }
})