import { RouteProp, useRoute } from "@react-navigation/native";
import { SafeArea } from "../../../components/safe-area.component"
import { RestaurantInfoCard } from "../components/restaurant-info-card.component"
import { RestaurantsStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";
import { List } from 'react-native-paper';
import { useState } from "react";
import { ScrollView } from "react-native";

type RestaurantDetailScreenRouteProp = RouteProp<RestaurantsStackParamList, 'RestaurantDetail'>;

export const RestaurantDetailScreen = () => {

    const route = useRoute<RestaurantDetailScreenRouteProp>();
    const restaurant = route.params.item;

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />

            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => <List.Icon {...props} icon="bread-slice" />}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon {...props} icon="hamburger" />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Burger w/ Fries" />
                    <List.Item title="Steak Sandwich" />
                    <List.Item title="Mushroom Soup" />
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    left={(props) => <List.Icon {...props} icon="food-variant" />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Steak Frites" />
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon {...props} icon="cup" />}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Coffe" />
                    <List.Item title="Tea" />
                    <List.Item title="Coke" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}