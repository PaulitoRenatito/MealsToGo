import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './tab-navigator.component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from '../../components/safe-area.component';
import { Text } from 'react-native';
import { RestaurantNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();
const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>

export const AppNavigator = () => {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
}