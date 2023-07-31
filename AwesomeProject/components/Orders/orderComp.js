import React from 'react'
import {View,Text} from 'react-native'
import OrderItem from '../components/restaurantDetail/OrderItem'

export default function orderComp({items}){
    <View>
            {
                    items.map((item,index)=>(
                        <OrderItem key={index} item={item}/>
                    ))
                }
    </View>
}