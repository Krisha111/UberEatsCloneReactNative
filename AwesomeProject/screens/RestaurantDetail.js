import React from 'react'
import {View,Text,TouchableOpacity, ScrollView} from 'react-native'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import { Divider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
  {
    id:1,
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
    {
      id:2,
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
      id:3,
      title: "Tandoori Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
      id:4,
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
      id:5,
      title: "Chicken Caesar Salad",
      description:
        "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
      id:6,
      title: "Bella",
      description: "Singhania",
      price: "$90.50",
      image:
        "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png?s=jdN-wM-e-Qc1ELab988RQ1uEJQw6qRiVkWhEBhs2MMI",
    },
    {
      id:7,
        title: "Krisha",
        description: "studebt",
        price: "$100.50",
        image:
          "https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png",
      },
      {
        id:8,
        title: "Prince",
        description: "studentt",
        price: "$10.50",
        image:
        "https://www.freepnglogos.com/uploads/food-png/food-png-transparent-images-png-only-6.png",
      },
      {
        id:9,
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
      {
        id:10,
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
  ];
  

export default function  RestaurantDetail({route,navigation}){
    return(
        <SafeAreaView>
          {/* this route below should be passed in about bcoz the navigation will work using the picture of about and 
          not in MenuItems */}
        <About route={route}/>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        
        <MenuItems foods={foods} restaurantName={route.params.name} />
        </ScrollView>
        <ViewCart navigation={navigation} RestaurantName={route.params.name} />
        </SafeAreaView>
    )
}