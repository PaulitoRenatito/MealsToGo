import { useContext, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { LocationKey } from "../../../services/location/types";


const SearchContainer = styled(View)`
    padding: ${({ theme }) => theme.space.px16};
`

export const Search = () => {

    const { keyword, search } = useContext(LocationContext)!;

    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                onChangeText={setSearchKeyword}
                value={searchKeyword}
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