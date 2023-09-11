import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome6';


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
import Age from './screens/Age';
import Doctorlist from './screens/Doctorlist';
import Height from './screens/Height';
import Onboard from './screens/Onboard';
import Weight from './screens/Weight';
import Onboard1 from './screens/Onboard1';


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
          borderRadius: 20,
          height: 80,
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
          } else if (route.name === 'Doctorlist') {
            iconName = focused ? 'user-doctor' : 'user-doctor';
            label = 'Doctor';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
            label = 'Profile';
          }

          let iconComponent;

          if (route.name === 'home') {
            iconComponent = (
              <Icon
                name={iconName}
                size={25}
                color={focused ? '#9583FF' : 'black'}
              />
            );
          } else if (route.name === 'feed') {
            iconComponent = (
              <IconI
                name={iconName}
                size={25}
                color={focused ? '#9583FF' : 'black'}
              />
            );
          } else if (route.name === 'Doctorlist') {
            iconComponent = (
              <IconF
                name={iconName}
                size={25}
                color={focused ? '#9583FF' : 'black'}
              />
            );
          } else if (route.name === 'profile') {
            iconComponent = (
              <IconI
                name={iconName}
                size={25}
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
      <Tab.Screen name="Doctorlist" component={Doctorlist} />
      <Tab.Screen name="feed" component={Feed} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {
  const Stack = createStackNavigator();
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Check if the user has seen onboarding before
    AsyncStorage.getItem('hasSeenOnboarding').then((value) => {
      if (value === null) {
        // If it's the first time, set the flag and show onboarding
        AsyncStorage.setItem('hasSeenOnboarding', 'true');
        setShowOnboarding(true);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Onboard'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Sceudle" component={Schudle} />
        <Stack.Screen name="AddMedRecord" component={AddMedRecord} />
        <Stack.Screen name="MedRecords" component={MedRecords} />
        <Stack.Screen name="DrugCheck" component={DrugCheck} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Weight" component={Weight} />
        <Stack.Screen name="Height" component={Height} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Home></Home>
    // <DrugCheck></DrugCheck>
    // <Age></Age>
    // <Doctorlist></Doctorlist>
    // <Height></Height>
    // <Onboard></Onboard>
    // <Onboard1></Onboard1>
    // <Weight></Weight>
    // <Login></Login>
    // <SignUp></SignUp>

  );
};

export default App;

const styles = StyleSheet.create({});
