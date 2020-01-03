import React from 'react';
import { Form, Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import { IBaseWidgetProps } from '../types';
import Password from './password';
import Phone from './phone';
import Number from './number';
import TextArea from './textarea';

export interface AInputProps extends IBaseWidgetProps {
  widgetProps?: InputProps;
}

type staticComponent = {
  Password?: typeof Password;
  Phone?: typeof Phone;
  Number?: typeof Number;
  TextArea?: typeof TextArea;
};

const AInput: React.SFC<AInputProps> & staticComponent = ({
  name,
  label,
  form,
  widgetProps,
  formItemProps,
  rules,
  initialValue,
  fieldDecoratorOptions = {},
}) => {
  const { getFieldDecorator } = form;
  const options = {
    rules,
    initialValue,
    ...fieldDecoratorOptions,
  };

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(<Input {...widgetProps} />)}
    </Form.Item>
  );
};

AInput.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

AInput.Password = Password;
AInput.Phone = Phone;
AInput.Number = Number;
AInput.TextArea = TextArea;

export default AInput;
