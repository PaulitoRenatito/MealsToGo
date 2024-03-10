import { Image, Platform, View } from "react-native"
import styled from "styled-components/native"
import { Text } from "../typography/text.component"
import WebView from "react-native-webview"

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
    restaurant: any
}
export default function CompactRestaurantInfo({ restaurant }: CompactRestaurantInfoProps) {

    const ImageComponent = isAndroid ?
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