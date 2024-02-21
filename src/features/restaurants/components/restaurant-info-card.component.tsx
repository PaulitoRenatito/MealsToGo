import React from "react";
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

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
        <Card elevation={5} style={styles.card}>
            <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
            <Card.Content>
                <Text variant="titleLarge">{name}</Text>
                <Text variant="bodyMedium">{address}</Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white'
    },
    cover: {
        padding: 10,
        backgroundColor: 'transparent',
    },
});