import React from 'react';
import { Form, TimePicker } from 'antd';
import { TimePickerProps } from 'antd/lib/time-picker';
import { IBaseWidgetProps } from '../types';

export interface ATimePickerProps extends IBaseWidgetProps {
  widgetProps?: TimePickerProps;
}

const ATimePicker: React.SFC<ATimePickerProps> = ({
  name,
  label,
  widgetProps = {},
  formItemProps = {},
  rules = [],
  initialValue,
}) => (
  <Form.Item name={name} label={label} initialValue={initialValue} rules={rules} {...formItemProps}>
    <TimePicker {...widgetProps} />
  </Form.Item>
);

export default ATimePicker;
