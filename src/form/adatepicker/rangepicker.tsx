import React from 'react';
import { Form, DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker/interface';
import { IBaseWidgetProps } from '../types';

export interface ARangePickerProps extends IBaseWidgetProps {
  widgetProps?: RangePickerProps;
}

const RangePicker: React.SFC<ARangePickerProps> = ({
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
      {getFieldDecorator(name, options)(<DatePicker.RangePicker {...widgetProps} />)}
    </Form.Item>
  );
};

RangePicker.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default RangePicker;
