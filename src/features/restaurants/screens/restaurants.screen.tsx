import { useContext, useState } from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`

const LoadingContainer = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
`

export const RestaurantsScreen = () => {

    const { restaurants, isLoading, error } = useContext(RestaurantsContext)!;

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
            <Search/>
            <FlatList
                data={restaurants}
                renderItem={({item}) => {
                    return (
                        <RestaurantInfoCard restaurant={item}/>
                    );
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
}