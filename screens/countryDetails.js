import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from "../styles/global";
import Card from '../shared/card';

export default function CountryDetails({navigation}) {

    
    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
           <Card>
                <Text>{navigation.getParam('country')}</Text>
                <Text>{navigation.getParam('cases')}</Text>
                <Text>{navigation.getParam('critical')}</Text>
                <Text>{navigation.getParam('deaths')}</Text>
                <Text>{navigation.getParam('recovered')}</Text>
               
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});