import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
    background-color: white;
    margin-bottom: ${({ theme }) => theme.space.px16};
`;
export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${({ theme }) => theme.space.px8};
    background-color: transparent;
`;
export const Info = styled(Card.Content)`
    padding: ${({ theme }) => theme.space.px16};
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: ${({ theme }) => theme.space.px8};
    padding-bottom: ${({ theme }) => theme.space.px8};
`;

export const Rating = styled.View`
    flex-direction: row;
`;

export const OpenIndicator = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;