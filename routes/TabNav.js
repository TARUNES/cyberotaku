import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/themed';
import Home from '../screens/Home';
const Tab = createBottomTabNavigator()
const TabNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ navigate }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        let rn = navigate.name

                        if (rn == 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        return   <Icon
                        name='rowing' />
                    }
                })}
                >
                    <Tab.Screen name='Home' component={Home}></Tab.Screen>
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNav

const styles = StyleSheet.create({})