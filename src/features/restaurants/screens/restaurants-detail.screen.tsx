import { RouteProp, useRoute } from "@react-navigation/native";
import { SafeArea } from "../../../components/safe-area.component"
import { RestaurantInfoCard } from "../components/restaurant-info-card.component"
import { RestaurantsStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";

type RestaurantDetailScreenRouteProp = RouteProp<RestaurantsStackParamList, 'RestaurantDetail'>;

export const RestaurantDetailScreen = () => {

    const route = useRoute<RestaurantDetailScreenRouteProp>();
    const restaurant = route.params.item;

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}/>
        </SafeArea>
    )
}