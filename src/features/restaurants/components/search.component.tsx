import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { LocationKey } from "../../../services/location/types";


const SearchContainer = styled(View)`
    padding: ${({ theme }) => theme.space.px16};
`

interface SearchProps {
    isFavouritesToggled: boolean;
    onFavouritesToggled: () => void;
}
export const Search = ({ isFavouritesToggled, onFavouritesToggled }: SearchProps) => {

    const { keyword, search } = useContext(LocationContext)!;

    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                onChangeText={setSearchKeyword}
                value={searchKeyword}
                icon={isFavouritesToggled ? "heart" : "heart-outline"}
                onIconPress={onFavouritesToggled}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                mode='view'
                elevation={1}
                style={{ backgroundColor: 'white' }}
            />
        </SearchContainer>
    );
}