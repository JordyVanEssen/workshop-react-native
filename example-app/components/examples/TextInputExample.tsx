import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white
    },
    input: {
        borderRadius: 20,
        borderWidth: 1,
        padding: 5,
    },
});

export default function TextInputExample() {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="TextInput"
                style={styles.input} 
                onChangeText={(value) => console.log(value)}
            />
        </View>
    );
}