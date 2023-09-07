import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Schudle = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
        <Text style={{fontSize:30,color:'black'}}>Pill Schedule</Text>
        <TouchableOpacity onPress={()=>{}}>
        <Text style={{fontSize:30,color:'black'}}>+</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Schudle

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#baf7c2'
    },
    TopBar:{
        height:'10%',
        width:'100%',
        backgroundColor:'#5bde6c',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:20
    }
})