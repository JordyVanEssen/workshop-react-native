import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white
    },
});

export default function TextExample() {
    return (
        <View style={styles.container}>
            <Text>Text component</Text>
        </View>
    );
}