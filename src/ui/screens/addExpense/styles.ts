import { StyleSheet } from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../../helper/colors';

export const styles = StyleSheet.create({
  root: {
     flex: 1,
     backgroundColor: MAIN_COLOR,
     padding: 16,
     borderColor: 'black',
     borderWidth: 1,
   },
   textInput:{
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 6,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      elevation: 5,
      backgroundColor: SECONDARY_COLOR
   },
   title:{
      color: 'white',
      fontSize: 20,
   },
   buttonView:{
      marginTop: 64,
   },
});
