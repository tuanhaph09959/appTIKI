import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DetailScreen from './DetailScreen';
const ReadJson = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/tuanhaph09959/309b565f7cc71b757ff4da47c83545e6/raw/222d2ec8f10ca1846a91e0d10b898948c4c62284/Books.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json.book_array))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailScreens')}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  margin: 5,
                  backgroundColor: index % 2 == 0 ? '#DDDDDD' : '#FFFFFF',
                }}>
                <Image
                  style={{width: 150, height: 200}}
                  source={{uri: item.image}}
                />
                <View
                  style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: 24,
                    }}>
                    {item.book_title}
                  </Text>
                  <Text style={{color: '#AAAAAA'}}>{item.author}</Text>
                  <Text style={{color: '#FF0000'}}>{item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
  
};

export default ReadJson;
