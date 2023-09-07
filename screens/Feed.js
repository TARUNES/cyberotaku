import { StyleSheet, Text, View, ScrollView, FlatList, VirtualizedList, LogBox, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { services } from '../services/services'
const Feed = () => {
  const { height, width } = Dimensions.get('window');
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    services('health')
      .then(data => {
        setNewsData(data)
        console.log(newsData);
      })
      .catch(error => {
        alert(error)
      })
  }, [])
  return (
    <View style={{ height: height, padding: 20 }}>
      <ScrollView height={height}>
        <FlatList
          data={newsData}
          renderItem={({ item }) => (
            <View style={{flexDirection:'row',backgroundColor:'lightgrey',marginBottom:10}}>
              {/* <Image source={{
                uri: item.urlToImage 
              }}
                height={50} width={50}></Image> */}
              <View style={{}}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 700 }}>
                  {item.title}
                </Text>
                <Text style={{ alignSelf: 'flex-end' }}>
                  {item.publishedAt}
                </Text>
                <Text>
                  {item.description}
                </Text>
              </View>
            </View>
          )}
          // horizontal={true}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>

  )
}

export default Feed

const styles = StyleSheet.create({})