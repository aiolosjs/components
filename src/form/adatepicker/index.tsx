import React from 'react';
import { Form, DatePicker } from 'antd';
import { DatePickerProps } from 'antd/lib/date-picker';
import { IBaseWidgetProps } from '../types';

export interface ADatePickerProps extends IBaseWidgetProps {
  widgetProps?: Omit<DatePickerProps, 'picker'>;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
}

const ADatePicker: React.SFC<ADatePickerProps> = ({
  name,
  label,
  widgetProps = {},
  formItemProps = {},
  rules = [],
  initialValue,
  picker = 'date',
}) => {
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }
  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <DatePicker picker={picker} {...widgetProps} />
    </Form.Item>
  );
};

export default ADatePicker;
