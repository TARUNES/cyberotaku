import {StyleSheet, View} from 'react-native';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home1 from './Home1';
import Feeds from './Feeds';
import Profile from './Profile';
import Reminder from './Reminder';
import Feather from 'react-native-vector-icons/Feather';
import Records from './Records';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNavCenter = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconComponent;

            if (route.name === 'Home') {
              iconComponent = (
                <Feather name="home" size={22} color={'#000000'} />
              );
            } else if (route.name === 'Feeds') {
              iconComponent = (
                <MaterialIcons name="feed" size={22} color={'#000000'} />
              );
            } else if (route.name === 'Reminder') {
              iconComponent = (
                <MaterialIcons name="schedule" size={22} color={'#000000'} />
              );
            } else if (route.name === 'Profile') {
              iconComponent = (
                <FontAwesome6 name="user" size={22} color={'#000000'} />
              );
            
            } else if (route.name === 'Records') {
              iconComponent = (
                <Ionicons name="document-lock" size={22} color={'#000000'} />
              );
            }

            return iconComponent;
          },
        })}>
        <Tab.Screen name="Home" component={Home1}  options={{ headerShown: false }} />
        <Tab.Screen name="Feeds" component={Feeds}  options={{ headerShown: false }} />
        <Tab.Screen name="Reminder" component={Reminder}  options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={Profile}  options={{ headerShown: false }} />
        <Tab.Screen name="Records" component={Records}  options={{ headerShown: false }} />
      </Tab.Navigator>
    </View>
  );
};

export default BottomNavCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // bottom:'100%',
    // marginBottom: '5%',
    // width:'100%',
    borderRadius: 50, // Add this line to set the border radius
    overflow: 'hidden',
  },
});
