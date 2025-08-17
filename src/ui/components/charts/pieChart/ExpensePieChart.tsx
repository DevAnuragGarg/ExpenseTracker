// import { Dimensions } from 'react-native';
// import { PieChart } from 'react-native-chart-kit';

// const screenWidth = Dimensions.get('window').width;

// export const ExpensePieChart: React.FC = () => {
//   const expenses = useSelector((state: RootState) => state.expenses);
//   const chartData = useMemo(() => {
//     const data = expenses.reduce((acc, expense) => {
//       acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
//       return acc;
//     }, {} as Record<string, number>);

//     return {
//       labels: Object.keys(data),
//       datasets: [
//         {
//           data: Object.values(data),
//         },
//       ],
//     };
//   }, [expenses]);

//   return (
//     <PieChart
//       data={chartData}
//       width={screenWidth - 40}
//       height={220}
//       chartConfig={{
//         backgroundColor: '#fff',
//         color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//         strokeWidth: 2,
//         useShadowColorFromDataset: false,
//         decimalPlaces: 0,
//         labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        
//       }}
//       accessor="data"
//       backgroundColor="transparent"
//       paddingLeft="15"
//     />
//   );
// };
