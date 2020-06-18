import React from 'react';
import { Form, InputNumber } from 'antd';
import { InputNumberProps } from 'antd/lib/input-number';
import { IBaseWidgetProps } from '../types';

export interface AInputNumberProps extends IBaseWidgetProps {
  widgetProps?: InputNumberProps;
}

class Number extends React.PureComponent<AInputNumberProps> {
  static defaultProps = {
    initialValue: undefined,
    widgetProps: {},
    formItemProps: {},
    rules: [],
    fieldDecoratorOptions: {},
  };

  render() {
    const {
      name,
      label,
      rules = [],
      initialValue,
      formItemProps = {},
      widgetProps = {},
    } = this.props;

    return (
      <Form.Item
        name={name}
        label={label}
        rules={rules}
        initialValue={initialValue}
        {...formItemProps}
      >
        <InputNumber {...widgetProps} />
      </Form.Item>
    );
  }
}

export default Number;
