import { Image, Platform, View } from "react-native"
import styled from "styled-components/native"
import { Text } from "../typography/text.component"
import WebView from "react-native-webview"
import { Restaurant } from "../../services/restaurants/mock/types"

const CompactImage = styled(Image)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`
const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`
const Item = styled(View)`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`

const isAndroid = Platform.OS === "android"

interface CompactRestaurantInfoProps {
    restaurant: Restaurant
    isMap?: boolean
}
export default function CompactRestaurantInfo({ restaurant, isMap = false }: CompactRestaurantInfoProps) {

    const ImageComponent = (isAndroid && isMap) ?
        <CompactWebview source={{ uri: restaurant.photos[0] }} />
        :
        <CompactImage source={{ uri: restaurant.photos[0] }} />;

    return (
        <Item>
            {ImageComponent}
            <Text variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}