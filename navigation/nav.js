import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AddMedRecord from '../screens/AddMedRecord';
import AddSchedule from '../screens/AddSchedule';
import DrugCheck from '../screens/DrugCheck';
import Feed from '../screens/Feed';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Schudle from '../screens/Schudle';
import SignUp from '../screens/SignUp';
import UploadFile from '../screens/UploadFile';
import MedRecords from '../screens/MedRecords';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator initialRouteName={"home"} >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="feed" component={Feed} />
            <Tab.Screen name="medRecords" component={MedRecords} />
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeTabs"} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Feed" component={Feed} />
                <Stack.Screen name="Sceudle" component={Schudle} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App; 
