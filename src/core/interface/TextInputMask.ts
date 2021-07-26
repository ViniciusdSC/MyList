import {TextInput} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

export interface MaskRef extends TextInputMask {
  getElement(): TextInput;
}
