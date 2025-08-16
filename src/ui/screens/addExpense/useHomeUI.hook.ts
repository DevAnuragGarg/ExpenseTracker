import {
  HOME_SCREEN
} from '../../../navigation/screenName.constant';
import { AddExpenseScreenProps } from './props.type';

export const useAddExpenseUI = (props: AddExpenseScreenProps) => {
  console.log(JSON.stringify(props));
  const {    navigation   } = props;

  const onListClick = () => {
    navigation.navigate(HOME_SCREEN);
  };

  return {
    onListClick
  };
};
