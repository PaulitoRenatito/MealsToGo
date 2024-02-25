import { useContext, useState } from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled(View)`
    padding: ${({ theme }) => theme.space.px16};
`;

export const RestaurantsScreen = () => {

    const restaurantContext = useContext(RestaurantsContext);

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    mode='view'
                    elevation={1}
                    style={{ backgroundColor: 'white' }}
                />
            </SearchContainer>
            <FlatList
                data={restaurantContext.restaurants}
                renderItem={() => <RestaurantInfoCard />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
}