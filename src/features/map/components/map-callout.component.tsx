import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component"

interface MapCalloutProps {
    restaurant: any
}
export default function MapCallout({ restaurant }: MapCalloutProps) {
    return (
        <CompactRestaurantInfo restaurant={restaurant} isMap />
    )
}