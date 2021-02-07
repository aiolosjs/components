import React from 'react';
import { Form, DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import { IBaseWidgetProps } from '../types';

export interface ADateRangePickerProps extends IBaseWidgetProps {
  widgetProps?: Omit<RangePickerProps, 'picker'>;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
}

const { RangePicker } = DatePicker;

const ADateRangePicker: React.SFC<ADateRangePickerProps> = ({
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
      <RangePicker picker={picker} {...widgetProps} />
    </Form.Item>
  );
};

export default ADateRangePicker;
