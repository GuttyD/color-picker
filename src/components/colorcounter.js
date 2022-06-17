import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={styles.colorCounterContainer}>
            <Text style={styles.textoCor}> {color} </Text>
            
            <TouchableOpacity style={styles.button} onPress={() => onIncrease()}>
            <Text> {`Increase ${color}`} </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => onDecrease()}>
            <Text> {`Increase ${color}`} </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    colorCounterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 50,
        marginEnd: 50,
    },
    textoCor: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    button: {
        width: '30%',
        height: '35%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
});

export default ColorCounter;
