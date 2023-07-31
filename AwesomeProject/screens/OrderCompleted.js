import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AutocompleteSearch = ({ onSelectLocation }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (text) => {
    setQuery(text);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${text}&format=json`
      );
      const englishCities = response.data.filter((item) => item.display_name.includes('en'));
      setSuggestions(englishCities);
    } catch (error) {
      console.error('Error fetching autocomplete suggestions:', error);
    }
  };

  const handleSelectSuggestion = (item) => {
    setQuery(item.display_name);
    setSuggestions([]); // Clear the suggestions list when the user selects a city
    onSelectLocation(item); // Pass the selected location back to the SearchBar component
  };

  

  return (
    <View style={styles.autocompleteContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Search for a location..."
        value={query}
        onChangeText={handleSearch}
      />
      <ScrollView style={styles.suggestionsContainer}>
        {suggestions.map((item) => (
          <TouchableOpacity
            key={item.place_id}
            onPress={(data,details=null) => {
              
              console.log(data.nativeEvent)
              handleSelectSuggestion(item)}}
            style={styles.suggestionItem}
          >
            <Text style={styles.suggestionText}>{item.display_name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default function OrderCompleted() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };
 

  return (
    <View style={styles.searchBarContainer}>
        <View style={{ marginLeft: 10 ,marginTop:15}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
      <AutocompleteSearch onSelectLocation={handleSelectLocation}  />

      {/* <TextInput
        placeholder="Search"
        style={styles.googlePlacesTextInput}
      /> */}
       
      <View style={styles.rightButtonContainer}>
        <AntDesign name="clockcircle" size={11} style={styles.clockIcon} />
        <Text style={styles.searchText}> Search</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    margin:2,
    flexDirection: 'row',
    justifyContent:"space-between",
    marginTop:20,
    backgroundColor:"lightgrey",
    borderRadius:50,
    padding:1
  },
  googlePlacesTextInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    fontSize: 16,
    color: 'black',
    height: 50,
    flex: 1,
  },
  rightButtonContainer: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    margin:10,
    
  // paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 30,
    alignItems: 'center',
    maxHeight:40,
    
  },
  clockIcon: {
    marginRight: 6,
  },
  searchText: {
    fontSize: 16,
    color: 'black',
    
  },
  autocompleteContainer: {
    marginBottom: 10,
    marginTop:5
    
  },
  textInput: {
    maxWidth:200,

    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 30,
    fontSize: 16,
    color: 'black',
    
  },
  suggestionsContainer: {
    maxHeight: 200,
    maxWidth:215
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    backgroundColor: 'white',
    justifyContent:"space-evenly"
  },
  suggestionText: {
    fontSize: 16,
    color: 'black',
    
  },
});


