import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";

const AppStack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen
            name="Home"
            component={Home}
            options={
                {headerShown:false}}
            />
        
        </AppStack.Navigator>
    )
}