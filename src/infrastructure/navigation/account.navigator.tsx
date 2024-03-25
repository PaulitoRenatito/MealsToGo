import { createStackNavigator } from "@react-navigation/stack"


const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={() => null} />
            <Stack.Screen name="Login" component={() => null} />
        </Stack.Navigator>
    )
}