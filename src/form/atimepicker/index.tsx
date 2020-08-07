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
}) => {
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }
  return (
    <Form.Item name={name} label={label} rules={rules} {...formItemProps}>
      <TimePicker {...widgetProps} />
    </Form.Item>
  );
};

export default ATimePicker;
