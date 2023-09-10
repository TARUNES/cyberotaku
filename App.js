import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import AddMedRecord from './screens/AddMedRecord';
import AddSchedule from './screens/AddSchedule';
import DrugCheck from './screens/DrugCheck';
import Feed from './screens/Feed';
import Home from './screens/Home';
import Schudle from './screens/Schudle';
import UploadFile from './screens/UploadFile';
import MedRecords from './screens/MedRecords';
import Profile from './screens/Profile';
import TabBar from './navigation/TabBar';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffff',
          borderRadius: 15,
          height: 90,
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home';
            label = 'Home';
          } else if (route.name === 'feed') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
            label = 'Feed';
          } else if (route.name === 'medRecords') {
            iconName = focused ? 'document-text' : 'document-text-outline';
            label = 'Records';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
            label = 'Profile';
          }

          let iconComponent;

          if (route.name === 'home') {
            iconComponent = (
              <Icon
                name={iconName}
                size={size}
                color={focused ? '#9583FF' : 'black'}
              />
            );
          } else if (route.name === 'feed') {
            iconComponent = (
              <IconI
                name={iconName}
                size={size}
                color={focused ? '#9583FF' : 'black'}
              />
            );
          } else if (route.name === 'medRecords') {
            iconComponent = (
              <IconI
                name={iconName}
                size={size}
                color={focused ? '#9583FF' : 'black'}
              />
            );
          } else if (route.name === 'profile') {
            iconComponent = (
              <IconI
                name={iconName}
                size={size}
                color={focused ? '#9583FF' : 'black'}
              />
            );
          }

          return (
            <View style={{ alignItems: 'center' }}>
              {iconComponent}
              <Text style={{ color: focused ? '#9583FF' : 'black' }}>{label}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="feed" component={Feed} />
      <Tab.Screen name="medRecords" component={MedRecords} />
      <Tab.Screen name="profile" component={AddMedRecord} />
    </Tab.Navigator>
  );
}

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Sceudle" component={Schudle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
