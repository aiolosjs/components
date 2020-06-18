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
  widgetProps = {},
  formItemProps = {},
  rules = [],
  initialValue,
}) => (
  <Form.Item
    name={name}
    label={label}
    rules={rules}
    initialValue={initialValue}
    valuePropName="checked"
    {...formItemProps}
  >
    <Switch {...widgetProps} />
  </Form.Item>
);

export default ASwitch;
