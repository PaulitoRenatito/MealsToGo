import { useContext } from "react"
import { FavouritesContext } from "../../services/favourites/favourites.context"
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Restaurant } from "../../services/restaurants/mock/types";

const FavouriteButton = styled(TouchableOpacity)`
    background-color: transparent;
    border-color: #20232A;
    position: absolute;
    top: 20px;
    right: -10px;
    width: 64px;
    z-index: 9;
`

interface FavouriteProps {
    restaurant: Restaurant
}
export default function Favourite({ restaurant }: FavouriteProps) {

    const {
        favourites,
        addToFavourites,
        removeFromFavourites,
    } = useContext(FavouritesContext)!;

    const isFavourites = favourites.find((r: Restaurant) => r.name === restaurant.name);

    return (
        <FavouriteButton
            onPress={() => !isFavourites ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}
        >
            <AntDesign
                name={isFavourites ? 'heart' : 'hearto'}
                size={24}
                color={isFavourites ? 'red' : 'white'}
            />
        </FavouriteButton>
    )
}