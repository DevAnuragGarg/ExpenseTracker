import { StyleSheet } from 'react-native';
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../../helper/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    justifyContent: 'space-between',
    borderWidth: 2,
    elevation: 5,
    backgroundColor: SECONDARY_COLOR,
  },
  innerContainer: {   
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: SECONDARY_COLOR,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TERTIARY_COLOR,
  },
  date: {
    fontSize: 14,
    color: 'white',
  },
});
