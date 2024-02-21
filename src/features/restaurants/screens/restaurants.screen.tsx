import { useState } from 'react';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const isAndroid = Platform.OS === 'android';

export const RestaurantsScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    mode='view'
                    elevation={1}
                    style={{backgroundColor: 'white'}}
                />
            </View>
            <View style={styles.list}>
                <RestaurantInfoCard />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    search: {
        padding: 16,
    },
    list: {
        flex: 1, 
        padding: 16, 
        backgroundColor: 'blue',
    },
});