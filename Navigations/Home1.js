import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DocList from '../Data/DocList'
import { DoctorsData } from '../Data/DoctorsData'


const Home1 = () => {
  return (
    <View>
      <DocList doctors={DoctorsData}/>
    </View>
  )
}

export default Home1

const styles = StyleSheet.create({})