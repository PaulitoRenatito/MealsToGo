import { TabNavigator } from './tab-navigator.component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from '../../components/safe-area.component';
import { Button, Text } from 'react-native';
import { RestaurantNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { useContext } from 'react';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

const Tab = createBottomTabNavigator();
const Settings = () => {

    const { logout } = useContext(AuthenticationContext)!;

    return (
        <SafeArea>
            <Text>Settings</Text>
            <Button title='logout' onPress={() => logout()} />
        </SafeArea>
    );
}

export const AppNavigator = () => {
    return (
        <TabNavigator Tab={Tab}>
            <Tab.Screen
                name='Restaurants'
                component={RestaurantNavigator}
                options={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray'
                }}
            />
            <Tab.Screen
                name='Map'
                component={MapScreen}
                options={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray'
                }}
            />
            <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray'
                }}
            />
        </TabNavigator>
    );
}