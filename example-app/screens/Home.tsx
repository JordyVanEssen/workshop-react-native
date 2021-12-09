import * as React from 'react';
import { Dimensions, StyleSheet, View, Text, Button } from 'react-native';
import LineChart from 'react-native-chart-kit/dist/line-chart';
import colors from '../constants/colors';
import { RootTabScreenProps } from '../types';
import { Picker } from '@react-native-community/picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  chartContainer: {
    margin: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 5
  },
  legendContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  titleSelect: {
    width: 150,
    margin: 50
  }
});

/*

Opdracht 1:
  Vraag de data op tijdens het renderen van de app

Opdracht 2:
  Voeg een dropdown toe die de titel van de grafiek bepaalt
  en
  laat de titel van de grafiek de getoonde data bepalen

Opdracht 3:
  Voeg een knop toe die de grafiek refresht

Opdracht 4:
  Los component maken van de grafiek, met de volgende parameters: 
  - data, een array van getallen
  - title, een string

Opdracht 5:
  Maak een lijst, FlatList, van 2 grafieken, 1 voor de temperature en de andere voor de humidity.

*/

interface Item {
  [key: string]: number; // item["temperature"] of item["humidity"]
}

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const [data, setData] = React.useState<number[]>([]);

  const chartConfig = {
    backgroundGradientFrom: colors.grey200,
    backgroundGradientTo: colors.grey200,
    color: () => colors.red300,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  const fetchData = React.useCallback(async () => {
    await fetch("")
            .then(res => res.json())
            .then(json => {
              setData(json.map((item: Item) => item["temperature"]))
            });

  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <View style={styles.titleContainer}>
          <Text>Temperatuur</Text>
        </View>
        <LineChart
          data={{
            labels: [],
            datasets: [{
              data: data
            }]
          }}
          width={Dimensions.get("window").width * 0.9}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
}
