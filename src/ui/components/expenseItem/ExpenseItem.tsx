import { Text, View } from 'react-native';
import { styles } from './styles';
import { ExpenseItemProps } from './props.types';

export const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.description}>{expense.description}</Text>
        <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.date}>{expense.date.toLocaleDateString()}</Text>
    </View>
  );
};
