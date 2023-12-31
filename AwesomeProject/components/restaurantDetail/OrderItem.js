import React from "react";
import {View,Text, ScrollView} from 'react-native'

export default function OrderItem({item}){
    const {price,title}=item
    return(
     <View style={{  marginBottom:30}}>
         <View style={{
            justifyContent:"space-between",
            flexDirection:"row",
            padding:20,
            borderBottomWidth:1,
            borderBottomColor:"black",
            borderColor:"white"

         }}>
        
            <Text style={{fontWeight:"600",fontSize:16}}>{title}</Text>
            <Text style={{opacity:0.7,fontSize:16}}>{price}</Text>
            
         </View>
      </View>
         
    )
}