import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View style={{marginTop:15, flexDirection:"row"}}>
        <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }} styles={{
        textInput:{
            backgroundColor:"#eee",
            fontWeight:"700",
            borderRadius:20,
            marginTop:7,
        },
        textInputContainer:{
            backgroundColor: "#eee",
            borderRadius:50,
            flexDirection:"row",
            alignItems: "center",
            marginRight:10,
        },
      }}
      renderLeftButton={() => (
      <View style={{marginLeft:10}}>
        <Ionicons name="location-sharp" size={24}/>
      </View>
      )}

      renderRightButton={() =>(
        <View style={{
            flexDirection:"row",
            marginRight:8,
            backgroundColor: "white",
            padding:9,
            borderRadius:30,
            alignItems: "center",
        }}>
            <AntDesign name="clockcircle" size={11} style={{
                marginRight:6,
                marginLeft:6,

            }}/>
            <Text>Search</Text>
        </View>
      )}
    />
    </View>
  )
}

export default SearchBar
