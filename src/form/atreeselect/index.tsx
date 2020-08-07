import React from 'react';
import { Form } from 'antd';
import ATreeSelectFormItem, { TreeSelectNormalProps } from './atreeselect';
import { IBaseWidgetProps } from '../types';

export interface ATreeSelectProps
  extends IBaseWidgetProps,
    Omit<TreeSelectNormalProps, 'value' | 'onChange'> {}

const ATreeSelect: React.FC<ATreeSelectProps> = props => {
  const { name, label, formItemProps = {}, initialValue, rules = [], ...rest } = props;
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  return (
    <Form.Item name={name} label={label} rules={rules} {...formItemProps}>
      <ATreeSelectFormItem {...rest} />
    </Form.Item>
  );
};

export default ATreeSelect;
