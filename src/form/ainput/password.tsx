import React from 'react';
import { Form, Input } from 'antd';
import { PasswordProps } from 'antd/lib/input';
import { IBaseWidgetProps } from '../types';

export interface AInputPasswordProps extends IBaseWidgetProps {
  widgetProps?: PasswordProps;
}

class Password extends React.PureComponent<AInputPasswordProps> {
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
        {getFieldDecorator(name, options)(<Input.Password {...widgetProps} />)}
      </Form.Item>
    );
  }
}

export default Password;
