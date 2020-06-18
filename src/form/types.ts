import React from 'react';
import { FormItemProps as AntdFormItemProps, Rule } from 'antd/lib/form';

export interface IBaseWidgetProps {
  name: string;
  label?: React.ReactNode;
  formItemProps?: AntdFormItemProps;
  initialValue?: any;
  rules?: Rule[];
}
