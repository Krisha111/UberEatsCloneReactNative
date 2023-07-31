import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { SafeAreaView } from 'react-native-safe-area-context'
import RestaurantDetail from './screens/RestaurantDetail'
import RootNavigation from './navigation'

export default function App() {
    return (
        // <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
            
        //         {/* <Home /> */}
        //         <RestaurantDetail/>
          
        // </SafeAreaView>

        // when navigation is addes here the navigation function will render
        // and in navigation.js other components of the app will run 
        <RootNavigation/>
                )
}
