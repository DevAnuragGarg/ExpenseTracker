import { View, TextInput, Text, Alert } from 'react-native';
import { AddExpenseScreenProps } from './types/props.type';
import { styles } from './styles';
import { useState } from 'react';
import { ExpenseFormState } from './types/ExportFormState.type';
import { UIButton } from '../../components/button/UIButton';
import { useRealm } from '@realm/react';
import { Expense } from '../../../db/models/Expense';
import Realm from 'realm';

export const AddExpenseScreen: React.FC<AddExpenseScreenProps> = ({
  navigation,
}) => {
  // get the realm instance
  const realm = useRealm();

  const [expense, setExpense] = useState<ExpenseFormState>({
    description: '',
    amount: '',
    date: '',
  });

  function onAddExpenseButtonClick() {
    if (!expense.description || !expense.amount || !expense.date) {
      Alert.alert(
        'Invalid Input',
        'Kindly fill all the fields to add an expense.',
        [{ text: 'OK', style: 'default' }],
      );
      return;
    }

    // add the expense to the database
    realm.write(() => {
      realm.create(Expense, {
        id: new Realm.BSON.ObjectId(),
        description: expense.description,
        amount: parseFloat(expense.amount),
        date: new Date(expense.date),
      });
    });

    navigation.goBack(); // Navigate back after adding expense
  }

  function onDescriptionTextChange(text: string) {
    setExpense(prev => ({ ...prev, description: text }));
  }

  function onAmountTextChange(text: string) {
    setExpense(prev => ({ ...prev, amount: text }));
  }

  function onDateTextChange(text: string) {
    setExpense(prev => ({ ...prev, date: text }));
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Expense Item</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onDescriptionTextChange}
        value={expense.description}
        placeholder="Description"
      />
      <Text style={styles.title}>Expense Amount</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onAmountTextChange}
        value={expense.amount}
        placeholder="Amount"
        keyboardType="numeric"
      />
      <Text style={styles.title}>Expense Date</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onDateTextChange}
        value={expense.date}
        placeholder="Date (YYYY-MM-DD)"
      />

      <View style={styles.buttonView}>
        <UIButton text="ADD" onClick={onAddExpenseButtonClick} />
      </View>
    </View>
  );
};
