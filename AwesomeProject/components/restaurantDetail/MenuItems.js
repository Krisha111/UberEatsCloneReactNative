import React from 'react'
import { View, Text, Image } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {useDispatch, useSelector} from 'react-redux'


export default function MenuItems(props) {
   const dispatch = useDispatch()
   const selectItem=(checkboxValue,item)=>dispatch({
   type:"ADD_TO_CART",
   payload:{...item,restaurantName:props.restaurantName,checkboxValue:checkboxValue}
   })
   const  cartItems = useSelector(
    (state) => state.CartReducer.selectedItems.items
  );
const isFoodInCart=(food,cartItems)=> Boolean(cartItems.find((item)=>item.title==food.title))


    return (
      <View style={{marginBottom:300}}>
        
            {props.foods.map((food, index) => (
                
                <View style={{flex:1}} key={index}>
                    
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginHorizontal: 15 }}>
                   
                        {/* This width is used to size the content and give space to image in the screen  on the left side*/}
                        <BouncyCheckbox
                        iconStyle={{ borderRadius:0,borderColor:"lightgray"}} fillColor="green"
                        onPress={(checkboxValue)=>selectItem(checkboxValue,food)}
                        isChecked={isFoodInCart(food,cartItems)}
                        
                        
             />
                       
                        <View style={{ width: 240, justifyContent: "space-evenly" }} >
                            <RestTitle title={food.title} />

                            <RestDesc desc={food.description} price={food.price} />

                        </View>
                        <RestImage image={food.image} />
                    </View>
                </View>

            ))}
      </View>
    )
}
const RestTitle = (props) => (
    <Text style={{
        fontSize: 19,
        fontWeight: 600
    }}>
        {props.title}
    </Text>
)
const RestImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: 80, height: 80, borderRadius: 10 }} />
)
const RestDesc = (props) => (
    <View >
        <Text style={{ fontSize: 15 }}>{props.desc}</Text>
        <Text>{props.price}</Text>
    </View>
)