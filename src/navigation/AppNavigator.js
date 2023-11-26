import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "../Screen/Feed";
import Addnewpost from "../Screen/Addnewpost";
const Stack = createNativeStackNavigator()
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen  options={{headerShown:false}} name="Feed" component={Feed} />
            <Stack.Screen  options={{headerShown:false}} name="Addnewpost" component={Addnewpost} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator