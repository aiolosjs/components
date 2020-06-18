import AInput from './ainput';
import Password from './password';
import Phone from './phone';
import Number from './number';
import TextArea from './textarea';

export type { AInputProps } from './ainput';
export type { AInputPasswordProps } from './password';
export type { AInputNumberProps } from './number';
export type { AInputTextAreaProps } from './textarea';

AInput.Password = Password;
AInput.Phone = Phone;
AInput.Number = Number;
AInput.TextArea = TextArea;

export default AInput;
