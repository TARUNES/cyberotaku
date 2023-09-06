import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../components/NavBar'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Navbar ></Navbar>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})