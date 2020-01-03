import React from 'react';
import { Form, Switch } from 'antd';
import { SwitchProps } from 'antd/lib/switch';
import { IBaseWidgetProps } from '../types';

export interface ASwitchProps extends IBaseWidgetProps {
  widgetProps?: SwitchProps;
}

const ASwitch: React.SFC<ASwitchProps> = ({
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
    valuePropName: 'checked',
    ...fieldDecoratorOptions,
  };

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(<Switch {...widgetProps} />)}
    </Form.Item>
  );
};

ASwitch.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ASwitch;
