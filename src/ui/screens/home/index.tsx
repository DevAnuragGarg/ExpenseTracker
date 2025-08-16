import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { HomeScreenProps } from './types/props.type';
import { UIButton } from '../../components/button/UIButton';
import { DUMMY_EXPENSES } from '../../helper/dummy_data';
import { ExpenseItem } from '../../components/expenseItem/ExpenseItem';

export const HomeScreen: React.FC<HomeScreenProps> = _ => {
  function onExpenseAdd() {
    console.log('Add Expense button clicked');
  }

  function renderExpenseItem(itemData: {
    item: { id: string; description: string; amount: number; date: Date };
  }) {
    return <ExpenseItem expense={itemData.item} />;
  }

  return (
    <View style={styles.root}>
      <View style={styles.listView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DUMMY_EXPENSES}
          renderItem={renderExpenseItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.buttonView}>
        <UIButton text="ADD EXPENSE" onClick={onExpenseAdd} />
      </View>
    </View>
  );
};
