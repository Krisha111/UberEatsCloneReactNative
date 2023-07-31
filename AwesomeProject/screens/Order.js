import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native'
import { ScrollView } from 'react-native-gesture-handler'

import OrderItem from '../components/restaurantDetail/OrderItem';
import FinalItem from '../components/restaurantDetail/FinalItem';

export default function Order({navigation}) {
    const  {items,restaurantName} = useSelector(
        (state) => state.CartReducer.selectedItems
      );

  
      const total = items
      .map((item) =>  Number(item.price.replace("$", "")) )
      .reduce((prev, curr) => prev + curr,0);
    
      const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });
   
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
    <ScrollView >
     <View style={{ flex:1,backgroundColor:"white",alignItems:"center" }}>
        <LottieView style={{height:150}} 
        source={require('../assets/animations/check-mark.json')}
        autoPlay
        loop
        />
      <Text style={{fontSize:16,fontWeight:"bold"}}>Your order from {restaurantName} has been placed for {totalUSD}</Text>
      {
        items.map((item,index)=>(
          <View key={index} style={{
            justifyContent:"space-between",
            flexDirection:"row",
            padding:20,
            borderBottomWidth:1,
            borderBottomColor:"black",
            borderColor:"white",
            width:"100%"
         }}>
        
            <Text style={{fontWeight:"600",fontSize:16,marginLeft:10,maxWidth:90}}>{item.title}</Text>
            <Text style={{opacity:0.7,fontSize:16}}>{item.price}</Text>
            <Image source={{ uri: item.image }} style={{ width: 80, height: 80, borderRadius: 10 }} />
         </View>
        ))
    }
    <TouchableOpacity style={{
      backgroundColor:"black",
      marginTop:60,
      padding:10,
      paddingHorizontal:90,
      borderRadius:30
    }}
    //donot forget to write on press as function and to put a fat arror donot justt write it in a curly brackets it will give error
    onPress={()=>{navigation.navigate("Home")}}>
      <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>Home</Text>
      </TouchableOpacity>
      <LottieView style={{height:100,marginTop:30,marginBottom:30}} 
        source={require('../assets/animations/cooking.json')}
        autoPlay
        loop
        />
      
    </View>
 
  
    </ScrollView>
    </SafeAreaView>
  )
}