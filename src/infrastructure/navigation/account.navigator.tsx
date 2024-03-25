import { TransitionPresets, createStackNavigator } from "@react-navigation/stack"
import AccountScreen from "../../features/account/screens/account.screen";
import LoginScreen from "../../features/account/screens/login.screen";
import RegisterScreen from "../../features/account/screens/register.screen";


const Stack = createStackNavigator();

export type AccountStackParamList = {
    Account: undefined,
    Login: undefined,
    Register: undefined,
}

export const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
        </Stack.Navigator>
    )
}