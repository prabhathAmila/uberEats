import React, { Component, useState, useEffect} from 'react'

import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar';
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import HeaderTab from '../components/HeaderTab';

const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx"; 



export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);


  return (
    <SafeAreaView style={{ backgroundColor: "#eee",}}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

