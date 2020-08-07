import React from 'react';
import { Checkbox, Form } from 'antd';
import { CheckboxGroupProps, CheckboxOptionType } from 'antd/lib/checkbox';
import { IBaseWidgetProps } from '../types';

export interface ACheckboxGroupProps extends IBaseWidgetProps {
  checkboxOptions: CheckboxOptionType[];
  widgetProps?: CheckboxGroupProps;
}

const ACheckboxGroup: React.FC<ACheckboxGroupProps> = ({
  name,
  label,
  checkboxOptions = [],
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
      <Checkbox.Group options={checkboxOptions} {...widgetProps} />
    </Form.Item>
  );
};

export default ACheckboxGroup;
