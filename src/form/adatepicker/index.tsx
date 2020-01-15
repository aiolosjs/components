import React from 'react';
import { Form, DatePicker } from 'antd';
import { DatePickerProps } from 'antd/lib/date-picker/interface';
import { IBaseWidgetProps } from '../types';
import MonthPicker from './monthpicker';
import RangePicker from './rangepicker';
import WeekPicker from './weekpicker';

export interface ADatePickerProps extends IBaseWidgetProps {
  widgetProps?: DatePickerProps;
}

type staticComponent = {
  MonthPicker?: typeof MonthPicker;
  RangePicker?: typeof RangePicker;
  WeekPicker?: typeof WeekPicker;
};

const ADatePicker: React.SFC<ADatePickerProps> & staticComponent = ({
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
    ...fieldDecoratorOptions,
  };

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(<DatePicker {...widgetProps} />)}
    </Form.Item>
  );
};

ADatePicker.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

ADatePicker.MonthPicker = MonthPicker;
ADatePicker.RangePicker = RangePicker;
ADatePicker.WeekPicker = WeekPicker;

export default ADatePicker;
