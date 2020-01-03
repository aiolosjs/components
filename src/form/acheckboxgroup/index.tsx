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
  form,
  checkboxOptions,
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
      {getFieldDecorator(name, options)(
        <Checkbox.Group options={checkboxOptions} {...widgetProps} />,
      )}
    </Form.Item>
  );
};

ACheckboxGroup.defaultProps = {
  initialValue: undefined,
  checkboxOptions: [],
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ACheckboxGroup;
