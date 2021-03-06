import React from 'react';
import { Radio, Form } from 'antd';
import { CheckboxOptionType } from 'antd/lib/checkbox';
import { RadioGroupProps } from 'antd/lib/radio';
import { IBaseWidgetProps } from '../types';

export interface ARadioGroupProps extends IBaseWidgetProps {
  radioOptions: CheckboxOptionType[];
  widgetProps?: RadioGroupProps;
}

const ARadioGroup: React.FC<ARadioGroupProps> = ({
  name,
  label,
  radioOptions = [],
  widgetProps = {},
  formItemProps = {},
  rules = [],
  initialValue,
}) => {
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }
  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <Radio.Group options={radioOptions} {...widgetProps} />
    </Form.Item>
  );
};

export default ARadioGroup;
