import { ChartScreenProps } from './props.type';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useExpense } from './useExpense.hook';
import { ExpensePieChart } from '../../components/charts/pieChart/ExpensePieChart';
import { ExpenseBarChart } from '../../components/charts/barChart/ExpenseBarChart';

export const ChartScreen: React.FC<ChartScreenProps> = () => {
  const categoryTotals = useExpense();

  return (
    <View style={styles.root}>
      <View style={styles.chart}>
        <Text style={styles.title}>Pie Chart</Text>
        <ExpensePieChart data={categoryTotals} />
      </View>
      <View style={styles.chart}>
        <Text style={styles.title}>Bar Chart</Text>
        <ExpenseBarChart data={categoryTotals} />
      </View>
    </View>
  );
};
