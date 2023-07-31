import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];


export default function RestaurantItems({ navigation,...props }) {
  return (
    <View style={{ marginBottom: 160 }}>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity key={index} activeOpacity={1}
          onPress={() => navigation.navigate("RestaurantDetail", {
            name: restaurant.name,
            image_url: restaurant.image_url,
            category: restaurant.categories,
            price: restaurant.price,
            rating: restaurant.rating,
            review: restaurant.reviews
          })}>
             {/* const {name,image_url,category,price,rating,review}=props.route.params; */}

          {/* {description.map((rest,index)=>( */}

          <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
            <RestImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
</View>
  )
}
const RestImage = (props) => (
  <>
    <Image source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }} />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
)
const RestaurantInfo = (props) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5 }}>

    <View>

      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>

      <Text style={{ color: "gray", fontSize: 13 }}>35-45 : min</Text>

    </View>
    {/* Here view is introducesd bcoz here we cannot give style in text--- downwards code */}
    {/* Here alignItems and justifyContent is used to center the text to make it come in center of circle */}
    <View style={{
      backgroundColor: "#eee", height: 30, width: 30, borderRadius: 30, alignItems: "center"
      , justifyContent: "center"
    }} >
      {/* Here marginRight is not working to move it so u can use height and width to move it in correct place*/}
      <Text >{props.rating}</Text>
    </View>
  </View>

)