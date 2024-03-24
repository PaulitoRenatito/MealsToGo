import { useContext } from 'react';
import {
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';
import { StackNavigationProp } from '@react-navigation/stack';
import { RestaurantsStackParamList } from '../../../infrastructure/navigation/restaurants.navigator';
import { useNavigation } from '@react-navigation/native';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`

const LoadingContainer = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
`

type restaurantsScreenProps = StackNavigationProp<RestaurantsStackParamList, 'Restaurants'>;

export const RestaurantsScreen = () => {

    const navigation = useNavigation<restaurantsScreenProps>();

    const { restaurants, isLoading } = useContext(RestaurantsContext)!;

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading
                        size={50}
                        animating={true}
                        color="tomato"
                    />
                </LoadingContainer>
            )}
            <Search />
            <FlatList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(
                                "RestaurantDetail",
                                { item }
                            )}
                        >
                            <RestaurantInfoCard restaurant={item} />
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
}