import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { services } from '../services/services';

import Icon from 'react-native-vector-icons/FontAwesome';

const Feed = () => {
  const { height, width } = Dimensions.get('window');
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const data = await services('health');
      setNewsData(data);
      console.log(data); // Log the data
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);

    // Fetch new data here, and update the state when done.
    fetchData().then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View style={{ height: height, padding: 10, backgroundColor: 'rgba(186, 178, 235,0.4)' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.header}>Health News</Text>
        <Icon name="stethoscope" size={30} color="black" />
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={newsData}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 15, backgroundColor: '#efedf5', alignItems: 'center', borderRadius: 10 }}>
              {item.urlToImage && (
                <View style={{ paddingTop: 10, paddingHorizontal: 5 }}>
                  {/* <Text>{item.source.name}</Text> */}
                  <Image source={{ uri: item.urlToImage }} style={{ height: 200, resizeMode: 'cover' }} />
                  <View style={{ marginTop: 5, marginBottom: 5 }}>
                    <Text style={{ textAlign: 'justify', color: '#171a17', fontSize: 17, fontWeight: 500 }}>{item.title}</Text>
                  </View>
                  <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'grey' }}>{item.source.name}</Text>
                    <Text style={{ color: 'grey' }}>{new Date(item.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</Text>
                  </View>
                </View>
              )}

            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}

export default Feed;

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    marginRight: 10
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
