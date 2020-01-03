import React from 'react';
import { Form, DatePicker } from 'antd';
import { WeekPickerProps } from 'antd/lib/date-picker/interface';
import { IBaseWidgetProps } from '../types';

export interface AWeekPickerProps extends IBaseWidgetProps {
  widgetProps?: WeekPickerProps;
}

const WeekPicker: React.SFC<AWeekPickerProps> = ({
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
      {getFieldDecorator(name, options)(<DatePicker.WeekPicker {...widgetProps} />)}
    </Form.Item>
  );
};

WeekPicker.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default WeekPicker;
