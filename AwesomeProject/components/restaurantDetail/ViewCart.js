import React,{useState} from 'react'
import {View,Text,TouchableOpacity,Modal, StyleSheet, ScrollView} from 'react-native'
import OrderItem from '../restaurantDetail/OrderItem'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'

export default function ViewCart({navigation}){
    const [loading,setLoading]=useState(false)
    const [modalVisible,setModalVisible]=useState(false)
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
   
  console.log(totalUSD)
    



  const styles=StyleSheet.create({
     modalContainer:{
      backgroundColor: 'rgb(0, 0, 0)',
    
      flex:1,
      justifyContent:"flex-end"
     },
     
     
     checkoutModalContainer:{
        backgroundColor:"white",
      
        padding:16,
        borderWidth:1,
        height:500

     },
     restaurantName:{
        textAlign:"center",
        fontSize:16,
        fontWeight:600,
        marginBottom:10,

     },
     subtotalContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15
     },
     subtotalText:{
        fontSize:15,
        fontWeight:600,
        textAlign:"left",
        marginBottom:10

     }
  })
  const fakeloading=()=>{
    setLoading(true)
    setTimeout(()=>{
       
        setLoading(false)
        navigation.navigate("Order")
    },2500)
  }

  const checkoutModalContent=()=>{
    return(
        <>
        <View style={styles.modalContainer}>
            <View style={styles.checkoutModalContainer}>
                <Text style={styles.restaurantName}>
                    {restaurantName}
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                {
                    items.map((item,index)=>(
                        <OrderItem key={index} item={item}/>
                    ))
                }
              
                <View style={styles.subtotalContainer}>
                    <Text style={styles.subtotalText}>SubTotal</Text>
                    <Text>{totalUSD}</Text>
                </View>
                <View
                style={{
                    justifyContent:"center",
                    flexDirection:"row"
                }}>
                    <TouchableOpacity style={{
                        marginTop:30,
                        width:300,
                        borderRadius:30,
                        backgroundColor:"black",
                        alignItems:"center",
                        padding:13,
                        position:"relative",
                        marginBottom:30
                    }}
                    onPress={()=>{
                    fakeloading()
                    setModalVisible(false)
                    }}
                    >
                        <Text style={{color:"white",fontSize:20}}>CheckOut</Text>
                        <Text style={{position:"absolute",fontSize:15,
                    right:20,color:"white",top:17}}>{total?totalUSD:""}</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        </View>
        </>
  
    )
  }



    
    return(
        <>
        <Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}
        >
            {checkoutModalContent()}
        </Modal>
        {total?(
        <View
        style={{
            flex:1,
            position:"absolute",
            alignItems:"center",
            flexDirection:"row",
            marginTop:700,
            zIndex:999
        }}>
        {/* // by this view by the help of justifycontent and flexdirection both together the button will move to center */}
        <View
        style={{
            flexDirection:"row",
           justifyContent:"center",
           width:"100%"
        }}>
        {/* // by touchableopacity a button on left side with view cart text in center will be created */}
        <TouchableOpacity
        style={{
            backgroundColor:"black",
            flexDirection:"row",
           justifyContent:"flex-end",
           padding:15,
            borderRadius:30,
           alignItems:"center",  // text will come in center
           width:300,
           padding:15,
           position:"relative"
        }}
        onPress={()=>{
            setModalVisible(true)
        }}
        >
        <Text style={{color:"white",fontSize:20,marginRight:30}}>View Cart</Text>
        <Text style={{color:"white",fontSize:20}}>{totalUSD}</Text>
        </TouchableOpacity>
        </View>
        </View>
        ):
    (<></>)}
    {loading?( 
                <View
                style={{
                  backgroundColor: "black",
                  position: "absolute",
                  opacity: 0.6,
                  alignItems:"center",
                  
                  height: "100%",
                  width: "100%",
                }}
              >
                <LottieView
                  style={{ height: 200 ,marginTop:150}}
                  source={require("../../assets/animations/scanner.json")}
                  autoPlay
                  speed={3}
                />
              </View>
            ) :(<></>)}
    </>
    )
}


