import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import OrderCompleted from "./OrderCompleted";

const YELP_API_KEY = "lRH0IJ6n9IOnzDdJduai5UHyXBIlQlOwD0qdLTzV9_h6CUxX0rAp6jC88VgT6_pdh8iK5vIKyYLsWwkliljgL3NnwtlX5qX9F6rv_CoDE2p3nxv3Z1eZX6k_B3iiZHYx"

export default function Home({ navigation }) {
  // const [restaurantData, setRestaurantData] = useState();
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Canada`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses
          )
        )
     
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [ activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <OrderCompleted/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}