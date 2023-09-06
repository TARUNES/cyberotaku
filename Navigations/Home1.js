import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home1 = () => {
  return (
    <View style={styles.container} >
      <Text>Home!</Text>
    </View>
  )
}

export default Home1

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
      }
})