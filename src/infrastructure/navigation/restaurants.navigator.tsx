
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurants-detail.screen";

const RestaurantStack = createStackNavigator();

export type RestaurantsStackParamList = {
    Restaurants: undefined,
    RestaurantDetail: { item: any },
}

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen
                name='RestaurantMain'
                component={RestaurantsScreen}
                options={{ headerShown: false }}
            />
            <RestaurantStack.Screen
                name='RestaurantDetail'
                component={RestaurantDetailScreen}
                options={{
                    ...TransitionPresets.ModalPresentationIOS
                }}
            />
        </RestaurantStack.Navigator>
    )
}
