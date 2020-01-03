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
      {getFieldDecorator(name, options)(<TimePicker {...widgetProps} />)}
    </Form.Item>
  );
};

ATimePicker.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ATimePicker;
