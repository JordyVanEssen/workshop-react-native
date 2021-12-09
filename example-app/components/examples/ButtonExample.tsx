import * as React from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Button, FlatList } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white
    },
});

export default function ButtonExample() {
    return (
        <View style={styles.container}>
            <Button
                title="Button"
                onPress={() => console.log("pressed")}
            />
        </View>
    );
}