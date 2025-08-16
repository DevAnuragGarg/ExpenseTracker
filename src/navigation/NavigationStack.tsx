import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/rootStackParamList.type';
import { HOME_SCREEN, ADD_EXPENSE_SCREEN } from './screenName.constant';
import { AddExpenseScreen } from '../ui/screens/addExpense/index';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../ui/screens/home/index';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{ title: 'All Expenses' }}
        />
        <Stack.Screen
          name={ADD_EXPENSE_SCREEN}
          component={AddExpenseScreen}
          options={{ title: 'Add new expense' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
