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
    input: {
        borderRadius: 20,
        borderWidth: 1,
        padding: 5,
    },
    select: {
        width: 150
    },
    item: {
        backgroundColor: Colors.lightblue200,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

export default function FlatListExample() {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}