import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Details from "../pages/Details";

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

            <AppStack.Screen
            name = "Details"
            component={Details}
            options={
                title="Detalhes"
            }
            />
        
        </AppStack.Navigator>
    )
}