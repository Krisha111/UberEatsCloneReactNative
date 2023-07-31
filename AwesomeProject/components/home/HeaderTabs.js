import {View,Text,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs(props){
    const [activeTab,setActiveTab]=useState("Delivery")
    return(
    <View style={{ alignSelf: "center",flexDirection:"row",marginTop:15 }}>
        <HeaderButton
         
          text="Delivery" 
          btnColor="black" 
          txtColor="white" 
          activeTab={activeTab}
           setActiveTab={setActiveTab}/>
        <HeaderButton text="Pick-up" btnColor="white" txtColor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
    )
}
const HeaderButton=(props)=>{
    return(
        <View >
            {/* //TouchableOpacity have an onpress method and text does not */}
            {/* <TouchableOpacity 
            onPress={()=>console.log("Pressesd")} style={{alignItems:"center" , marginLeft:20}}></TouchableOpacity> */}
            <TouchableOpacity 
              style={
                {backgroundColor:props.activeTab==props.text?"black":"white" , 
               
                borderRadius:30,
                paddingHorizontal:16,
                
                paddingVertical:6}}
                onPress={()=>props.setActiveTab(props.text)}
                >
    <Text style={{color:props.activeTab==props.text?"white":"black",fontSize:15,fontWeight:900}}>{props.text}</Text>
    </TouchableOpacity>
    </View>
    )
}