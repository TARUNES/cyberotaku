import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PushNotification from "react-native-push-notification";
import { TouchableOpacity } from 'react-native-gesture-handler';


const Reminder = () => {

  useEffect(() => {
    createChannel();
  }, [])
  



  const createChannel =()=>{
    PushNotification.createChannel({
      channelId: 'Test',
      channelName : 'Test Channel'
    })
  }

  const handleNotification =()=>{
    PushNotification.LocalNotification({
      channelId: 'Test',
      title: 'Pill Schedule',
      messaage: 'Time to take your pills '
    })
  }


  return (
    <View style={styles.container}>
      <Text>Reminder!</Text>
      
      <TouchableOpacity onPress={handleNotification} >
        <Text>SetRemainder</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Reminder

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
      }
})