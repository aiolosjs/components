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
      rules = [],
      initialValue,
      formItemProps = {},
      widgetProps = {},
    } = this.props;
    if (initialValue !== undefined) {
      formItemProps.initialValue = initialValue;
    }
    return (
      <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
        <Input.Password {...widgetProps} />
      </Form.Item>
    );
  }
}

export default Password;
