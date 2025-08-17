import { ADD_EXPENSE_SCREEN } from '../../../navigation/screenName.constant';
import { HomeScreenProps } from './props.type';

export const useHomeUI = (props: HomeScreenProps) => {
  console.log(JSON.stringify(props));
  const { navigation } = props;

  const onListClick = () => {
    navigation.navigate(ADD_EXPENSE_SCREEN);
  };

  return { onListClick };
};
