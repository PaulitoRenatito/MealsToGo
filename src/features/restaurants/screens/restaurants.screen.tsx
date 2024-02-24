import { useState } from 'react';
import {
    FlatList,
    Platform,
    SafeAreaView,
    StatusBar,
    View
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
const SearchContainer = styled(View)`
    padding: ${({ theme }) => theme.space.px16};
`;
// const RestaurantListContainer = styled(View)`
//     flex: 1;
//     padding: ${({ theme }) => theme.space.px16};
// `;

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