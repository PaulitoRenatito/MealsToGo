import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
    flex: 1;
    height: 100%;
`

export const MapScreen = () => {

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
                    return <Marker coordinate={{
                        latitude: 0,
                        longitude: 0
                    }} />;
                })}
            </Map>
        </>
    );
};