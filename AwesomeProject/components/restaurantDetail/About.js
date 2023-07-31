import React from 'react'
import { View, Text,Image } from 'react-native'

const yelpInfo={
     name:"FarmHouse kitchen Thai Cuisine",
     image_url:"https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
     category:[{title:"Thai"},{title:" Comfort Food"}],
     price:"$$",
     rating:"4",
     review:"2913+",
}

 
export default function About(props) {
    // the biggest mistake in navigation chapter was to not put props.route.params beloew so take care of it
    const {name,image_url,category,price,rating,review}=props.route.params;

const format=category.map((cat)=>cat.title).join("•")
const description = `${format} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${review}+)`;
//     const image_url = ""
// const title="Farmhose Kitchen Thai Cuisine"
// const descriptionn="Thai : Confort Food : $$ : bill : 4 star :(2913+)"


 
    return (
        <View>
            <RestImage image={image_url}/>
            <RestInfo name={name}/>
            <RestDescription  description={description}/>
        </View>
    )
}
const RestImage=(props)=>(
   
        <Image 
        source={{uri:props.image}}
        style={{
            width:"100%",
            height:180
        }}/>
   
)

const RestInfo=(props)=>(
    <View >
        <Text 
        style={{
         fontSize:29,
         fontWeight:600,
         marginTop:10,
         marginHorizontal:15
        }}>{props.name}</Text>
        
    </View>
)
const RestDescription=(props)=>(
    <View>
        <Text
         style={{
            fontSize:15.5,
            fontWeight:"400",
            marginTop:10,
            marginHorizontal:15
           }}>{props.description}</Text>

    </View>
)
