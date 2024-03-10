import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import MapCallout from "../components/map-callout.component";
import { RestaurantsStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Map = styled(MapView)`
    flex: 1;
    height: 100%;
`

type restaurantsScreenProps = StackNavigationProp<RestaurantsStackParamList, 'Restaurants'>;

export const MapScreen = () => {

    const navigation = useNavigation<restaurantsScreenProps>();

    const { location } = useContext(LocationContext)!;
    const { restaurants = [] } = useContext(RestaurantsContext)!;

    const [latDelta, setlatDelta] = useState(0);
    const { location: { lat, lng }, viewport } = location!;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwesttLat = viewport.southwest.lat;

        setlatDelta(northeastLat - southwesttLat);

    }, [location, viewport]);

    return (
        <>
            <Search />
            <Map region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.02,
            }}>
                {restaurants.map((restaurant) => {
                    return (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <Callout onPress={() => navigation.navigate(
                                "RestaurantDetail",
                                { item: restaurant },
                            )}>
                                <MapCallout restaurant={restaurant} />
                            </Callout>
                        </Marker>
                    );
                })}
            </Map>
        </>
    );
};