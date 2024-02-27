import React from "react";
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Text } from "../../../components/typography/text.component";
import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    Rating,
    OpenIndicator,
} from "./restaurant-info-card.styles"

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
        address = '100 some random street',
        rating = 4,
        photos = [],
        isOpenNow = true,
        isClosedTemporarily = false,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_item, index) => (
                            <SvgXml key={index} xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <OpenIndicator>
                        {isClosedTemporarily &&
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        }
                        {isOpenNow && <SvgXml
                            xml={open}
                            width={30}
                            height={30}
                            fill={'transparent'}
                            stroke={'green'}
                            strokeWidth={3}
                        />}
                    </OpenIndicator>
                </Section>
                <Text variant="caption">{address}</Text>
            </Info>
        </RestaurantCard>
    );
}