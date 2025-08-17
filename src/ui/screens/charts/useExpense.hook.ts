import { useQuery } from '@realm/react';
import { useMemo } from 'react';
import { Expense } from '../../../db/models/Expense';

export const useExpense = () => {
  const expenses = useQuery(Expense); // Live Realm query

  const categoryTotals = useMemo(() => {
    const map: Record<string, number> = {};

    expenses.forEach((exp: Expense) => {
      map[exp.category] = (map[exp.category] || 0) + exp.amount;
    });

    return Object.entries(map).map(([category, total]) => ({
      category,
      total,
    }));
  }, [expenses]);

  return categoryTotals;
};
