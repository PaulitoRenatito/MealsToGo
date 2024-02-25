import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Ionicons } from "@expo/vector-icons";

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { Text } from 'react-native';
import { SafeArea } from './src/components/safe-area.component';
import { TabNavigator } from './src/components/navigation/tab-navigator.component';

const Tab = createBottomTabNavigator();

const Map = () => <SafeArea><Text>Map</Text></SafeArea>
const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <TabNavigator Tab={Tab}>
            <Tab.Screen
              name='Restaurants'
              component={RestaurantsScreen}
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
      </ThemeProvider >
      <ExpoStatusBar style='auto' />
    </>
  );
}
