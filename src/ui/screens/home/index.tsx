import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { HomeScreenProps } from './props.type';
import { UIButton } from '../../components/button/UIButton';
import { ExpenseItem } from '../../components/expenseItem/ExpenseItem';
import {
  ADD_EXPENSE_SCREEN,
  CHART_SCREEN,
} from '../../../navigation/screenName.constant';
import { useQuery } from '@realm/react';
import { Expense } from '../../../db/models/Expense';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // fetch all the values from the database
  const expenses = useQuery(Expense);

  function onExpenseAdd() {
    navigation.navigate(ADD_EXPENSE_SCREEN);
  }

  function showExpenseChart() {
    navigation.navigate(CHART_SCREEN);
  }

  function renderExpenseItem(itemData: { item: Expense }) {
    return <ExpenseItem expense={itemData.item} />;
  }

  return (
    <View style={styles.root}>
      <View style={styles.listView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={expenses}
          renderItem={renderExpenseItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.buttonView}>
        <UIButton text="SHOW EXPENSE CHARTS" onClick={showExpenseChart} />
      </View>

      <View style={styles.buttonView}>
        <UIButton text="ADD EXPENSE" onClick={onExpenseAdd} />
      </View>
    </View>
  );
};
