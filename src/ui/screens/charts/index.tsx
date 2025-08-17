import { ChartScreenProps } from './props.type';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const ChartScreen: React.FC<ChartScreenProps> = () => {
  return (
    <View style={styles.root}>
      <View style={styles.chart}>
        <Text style={styles.title}>Pie Chart</Text>
      </View>
      <View style={styles.chart}>
        <Text style={styles.title}>Bar Chart</Text>
      </View>
    </View>
  );
};
