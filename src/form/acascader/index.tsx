import React from 'react';
import { Form, Cascader } from 'antd';
import { CascaderProps, CascaderOptionType } from 'antd/lib/cascader';
import { IBaseWidgetProps } from '../types';

export interface ACascaderProps extends IBaseWidgetProps {
  selectOptions: CascaderOptionType[];
  widgetProps?: Omit<CascaderProps, 'options'>;
}

const ACascader: React.FC<ACascaderProps> = ({
  name,
  label,
  selectOptions = [],
  widgetProps = {},
  initialValue,
  formItemProps = {},
  rules = [],
}) => {
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }
  return (
    <Form.Item {...formItemProps} name={name} rules={rules} label={label}>
      <Cascader options={selectOptions} {...widgetProps} />
    </Form.Item>
  );
};

export default ACascader;
