import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput 
                placeholder='Enter City name'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <EvilIcons name="search" size={28} color="peru"  onPress={() => fetchWeatherData(cityName)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: "5%",
        // marginRight: "auto",
        // marginLeft: "auto",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "auto",
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal:"5%",
        paddingHorizontal: "5%",
        backgroundColor: 'lightgray',
        borderColor: 'peru',
        borderWidth: 2,
    }
})