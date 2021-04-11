import React, { Component } from "react";
import {
    ScreenOne,
    ScreenTwo
} from '../Containers'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

const NavigationService =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "ScreenOne" component={ScreenOne}/>
                <Stack.Screen name = "ScreenTwo" component={ScreenTwo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationService