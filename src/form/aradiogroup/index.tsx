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
  form,
  radioOptions,
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
      {getFieldDecorator(name, options)(<Radio.Group options={radioOptions} {...widgetProps} />)}
    </Form.Item>
  );
};

ARadioGroup.defaultProps = {
  initialValue: undefined,
  radioOptions: [],
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ARadioGroup;
