import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Feeds = () => {
  return (
    <View style={styles.container}>
      <Text>Feeds!</Text>
    </View>
  )
}

export default Feeds

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
      }
})