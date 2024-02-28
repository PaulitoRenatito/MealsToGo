import { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";

type IconType = keyof typeof Ionicons.glyphMap;

const TAB_ICON: Record<string, Record<string, IconType>> = {
    Restaurants: { true: 'restaurant', false: 'restaurant-outline' },
    Map: { true: 'map', false: 'map-outline' },
    Settings: { true: 'settings', false: 'settings-outline' }
};

type IconProps = {
    focused: boolean;
    color: string;
    size: number;
};
const tabBarIcon = (icon: Record<string, IconType>) => ({ focused, color, size }: IconProps) => {

    const iconName = focused ? icon.true : icon.false;

    return (
        <Ionicons name={iconName} size={size} color={color} />
    );

};
const createScreenOptions = ({ route }: any) => {

    const icon = TAB_ICON[route.name];

    return {
        tabBarIcon: tabBarIcon(icon),
        headerShown: false,
    }
}

type TabNavigatorProps = {
    Tab: any,
    children: ReactNode,
}
export const TabNavigator = ({ Tab, children }: TabNavigatorProps) => {
    return (
        <Tab.Navigator screenOptions={createScreenOptions}>
            {children}
        </Tab.Navigator>
    );
}