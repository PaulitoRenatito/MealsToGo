import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Restaurant } from "../../services/restaurants/mock/types";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled(View)`
    padding: 10px;
`

interface FavouritesBarProps {
    favourites: Restaurant[]
    onItemPress: (name: any, params: { item: any }) => void
}
export default function FavouritesBar({ favourites, onItemPress }: FavouritesBarProps) {

    const isAnyFavourite = favourites.length > 0;

    return (
        <FavouritesWrapper>
            <Text>Favourites</Text>
            {isAnyFavourite ?
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {favourites.map((restaurant => {
                        const key = restaurant.name;
                        return (
                            <View key={key} style={{ marginRight: 10 }}>
                                <TouchableOpacity
                                    onPress={() =>
                                        onItemPress(
                                            "RestaurantDetail",
                                            { item: restaurant }
                                        )}>
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>
                            </View>
                        );
                    }))}
                </ScrollView>
                :
                <Text>There is no favourite yet!</Text>
            }
        </FavouritesWrapper>
    )
}