import React from "react";
import { Card } from 'react-native-paper';
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
    background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
    padding: 10px;
    background-color: transparent;
`;
const Title = styled.Text`
    padding: 14px;
`;

interface RestaurantInfoCardProps {
    restaurant?: {
        name?: string;
        icon?: string;
        photos?: string[];
        address?: string;
        isOpenNow?: boolean;
        rating?: number;
        isClosedTemporarily?: boolean;
    };
}

export const RestaurantInfoCard: React.FC<RestaurantInfoCardProps> = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://a.cdn-hotels.com/gdcs/production107/d1469/cd36c828-5e95-440f-a8ca-2542627a6d67.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover source={{ uri: photos[0] }} />
            <Card.Content>
                <Title>{name}</Title>
            </Card.Content>
        </RestaurantCard>
    );
}