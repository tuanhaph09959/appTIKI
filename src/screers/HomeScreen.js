import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView,TextInput,Image,} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import ReadJson from '../components/ReadJson';
import DetailScreen from '../components/DetailScreen';
const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <TextInput
        style={styles.textInput}
        placeholder="Bạn cần tìm gì?"
        
      />
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.sectionContainer}>
      {/*  */}
     
      {/*  */}
      <Image source={{ uri:'https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TunedIn_BooksfromtheBanner_large.jpg?itok=F6iZdPZG'}} style={styles.sectionImage} />
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {[
            'Tất cả',
            'HORROR',
            'LOVE',
            'EXHIBITION',
            'ANIME',
            'NOVEL',
          ].map((e, index) => (
            <View
              key={index.toString()}
              style={
                index === 0
                  ? styles.filterActiveButtonContainer
                  : styles.filterInactiveButtonContainer
              }>
              <Text
                style={
                  index === 0
                    ? styles.filterActiveText
                    : styles.filterInactiveText
                }>
                {e}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      
      {/*  */}
      
    </View>

      {/*  */}
      <View style={styles.bodyContainer}>
      
        <ReadJson/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  
  sectionImage: {
    marginTop: 5,
    width: 390,
    height: 100,
    borderRadius: 4,
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },











  screenContainer: {
    flex: 1,
  },
  
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 4,
    backgroundColor: 'blue',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
     height: 60,
  },
  inputText: {
   marginTop: 40,
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
    
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;