import React from 'react';
import { FormItemProps as AntdFormItemProps, ValidationRule } from 'antd/lib/form';
import { GetFieldDecoratorOptions, WrappedFormUtils } from 'antd/lib/form/Form';

export interface IBaseWidgetProps {
  name: string;
  form: WrappedFormUtils;
  label?: React.ReactNode;
  // placeholder?: string;
  // required?: boolean;
  formItemProps?: AntdFormItemProps;
  initialValue?: any;
  rules?: ValidationRule[];
  fieldDecoratorOptions?: GetFieldDecoratorOptions;
}
