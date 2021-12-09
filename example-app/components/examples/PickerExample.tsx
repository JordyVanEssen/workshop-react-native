import { Picker } from '@react-native-community/picker';
import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white
    },
});

export default function FlatListExample() {

    return (
        <View style={styles.container}>
            <Picker
                selectedValue=""
                onValueChange={() => null}
            >
                <Picker.Item label="Item1" value="item1" />
                <Picker.Item label="Item2" value="item2" />
            </Picker>
        </View>

    );
}