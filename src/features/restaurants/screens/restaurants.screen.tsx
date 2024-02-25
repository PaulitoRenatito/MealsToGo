import { useState } from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/safe-area.component';

const SearchContainer = styled(View)`
    padding: ${({ theme }) => theme.space.px16};
`;

export const RestaurantsScreen = () => {

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
                data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
                renderItem={() => <RestaurantInfoCard />}
                keyExtractor={(item) => item.name.toString()}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
}