import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Records = () => {
  return (
    <View style={styles.container} >
      <Text>Records!</Text>
    </View>
  )
}

export default Records

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
      }
})