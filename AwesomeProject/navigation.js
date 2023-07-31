import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store'
import OrderCompleted from './screens/OrderCompleted'
import Order from './screens/Order'

const store=configureStore()

export default function RootNavigation(){
//    this consts are inside the navigation function
    const screenOptions={
        headerShown:false
    }
    
    const Stack = createStackNavigator()
  return(
    <ReduxProvider store={store}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="OrderCompleted" component={OrderCompleted}/>
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail}/>
            <Stack.Screen name="Order" component={Order}/>
        </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  )
}