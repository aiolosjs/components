import React from 'react';
import { Form } from 'antd';
import { TreeProps, TreeNodeNormal } from 'antd/lib/tree/Tree';
import { IBaseWidgetProps } from '../types';
import ATreeForm,{ATreeFormBaseProps} from './tree';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface ATreeProps extends IBaseWidgetProps,ATreeFormBaseProps {

}

const ATree: React.FC<ATreeProps> = ({
  name,
  label,
  form,
  formItemProps,
  rules,
  initialValue = [],
  fieldDecoratorOptions = {},
  ...rest
}) => {
  const { getFieldDecorator } = form;
  const options = {
    rules,
    initialValue,
    ...fieldDecoratorOptions,
  };

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(<ATreeForm {...rest} />)}
    </Form.Item>
  );
};

ATree.defaultProps = {
  initialValue: undefined,
  treeData: [],
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ATree;
