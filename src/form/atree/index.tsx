import React from 'react';
import { Form } from 'antd';
import ATreeFormItem, { TreeNormalProps } from './atree';
import { IBaseWidgetProps } from '../types';

export interface ATreeProps extends IBaseWidgetProps, Omit<TreeNormalProps, 'value' | 'onChange'> {}

const ATree: React.FC<ATreeProps> = props => {
  const { name, label, formItemProps = {}, rules = [], initialValue, ...rest } = props;
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  return (
    <Form.Item name={name} label={label} rules={rules} {...formItemProps}>
      <ATreeFormItem {...rest} />
    </Form.Item>
  );
};

export default ATree;
