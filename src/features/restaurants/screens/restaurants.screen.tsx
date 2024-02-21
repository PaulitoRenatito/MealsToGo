import { useState } from 'react';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
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
    padding: 16px;
`;
const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: blue;
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
                    style={{backgroundColor: 'white'}}
                />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
        </SafeArea>
    );
}