import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './tab-navigator.component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from '../../components/safe-area.component';
import { Text } from 'react-native';
import { RestaurantNavigator } from './restaurants.navigator';

const Tab = createBottomTabNavigator();

const Map = () => <SafeArea><Text>Map</Text></SafeArea>
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
                    component={Map}
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