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

class AInput extends React.Component<AInputProps> {
  static Password: typeof Password;

  static Phone: typeof Phone;

  static Number: typeof Number;

  static TextArea: typeof TextArea;

  render() {
    const {
      name,
      label,
      rules = [],
      initialValue,
      formItemProps = {},
      widgetProps = {},
    } = this.props;

    if (initialValue !== undefined) {
      formItemProps.initialValue = initialValue;
    }
    return (
      <Form.Item name={name} label={label} rules={rules} {...formItemProps}>
        <Input {...widgetProps} />
      </Form.Item>
    );
  }
}

export default AInput;
