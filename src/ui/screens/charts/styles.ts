import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../helper/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    padding: 8,
  },
  chart: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
});
