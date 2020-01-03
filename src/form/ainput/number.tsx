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
      form,
      widgetProps,
      formItemProps,
      rules,
      initialValue,
      fieldDecoratorOptions = {},
    } = this.props;

    const { getFieldDecorator } = form;
    const options = {
      rules,
      initialValue,
      ...fieldDecoratorOptions,
    };

    return (
      <Form.Item label={label} {...formItemProps}>
        {getFieldDecorator(name, options)(<InputNumber {...widgetProps} />)}
      </Form.Item>
    );
  }
}

export default Number;
