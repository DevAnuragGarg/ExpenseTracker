import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { HomeScreenProps } from './types/props.type';
import { UIButton } from '../../components/button/UIButton';
import { DUMMY_EXPENSES } from '../../helper/dummy_data';
import { ExpenseItem } from '../../components/expenseItem/ExpenseItem';
import { ADD_EXPENSE_SCREEN } from '../../../navigation/screenName.constant';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  function onExpenseAdd() {
    navigation.navigate(ADD_EXPENSE_SCREEN);
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
