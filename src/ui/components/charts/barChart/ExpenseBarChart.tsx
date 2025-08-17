import { Dimensions, View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { ExpenseBarChartProps } from './props.types';
import { styles } from './styles';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const ExpenseBarChart: React.FC<ExpenseBarChartProps> = ({ data }) => {
  const hasData = data && data.length > 0;

  if (!hasData) {
    return (
      <View style={styles.emptyRootView}>
        <Text style={styles.emptyButton}>No data available</Text>
      </View>
    );
  }

  const chartData = {
    labels: data.map(item => item.category), // x-axis labels
    datasets: [
      {
        data: data.map(item => item.total), // y-axis values
      },
    ],
  };

  return (
    <BarChart
      style={styles.chart}
      data={chartData}
      width={screenWidth - 20}
      height={screenHeight * 0.32}
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 8,
        },
      }}
      yAxisLabel="$"
      yAxisSuffix=""
      verticalLabelRotation={30}
    />
  );
};
