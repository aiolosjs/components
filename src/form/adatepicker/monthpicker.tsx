import React from 'react';
import { Form, DatePicker } from 'antd';
import { MonthPickerProps } from 'antd/lib/date-picker/interface';
import { IBaseWidgetProps } from '../types';

export interface AMonthPickerProps extends IBaseWidgetProps {
  widgetProps?: MonthPickerProps;
}

const MonthPicker: React.SFC<AMonthPickerProps> = ({
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
      {getFieldDecorator(name, options)(<DatePicker.MonthPicker {...widgetProps} />)}
    </Form.Item>
  );
};

MonthPicker.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default MonthPicker;
