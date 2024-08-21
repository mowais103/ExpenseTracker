import {useBackHandler} from '@react-native-community/hooks';
import {useIsFocused} from '@react-navigation/native';

const useDisableBackHandler = () => {
  const isFocused = useIsFocused();

  // if this screen is focused, override Android's back handler.
  useBackHandler(() => isFocused);
};

export {useDisableBackHandler};
