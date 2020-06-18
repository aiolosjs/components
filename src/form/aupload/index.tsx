import React from 'react';
import { Form } from 'antd';
import AUploadFormItem, { UploadFormItemProps } from './upload';
import { IBaseWidgetProps } from '../types';

export interface AUploadProps
  extends IBaseWidgetProps,
    Omit<UploadFormItemProps, 'value' | 'onChange'> {}

const ATree: React.FC<AUploadProps> = props => {
  const { name, label, formItemProps = {}, rules = [], initialValue = [], ...rest } = props;

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      initialValue={initialValue}
      {...formItemProps}
    >
      <AUploadFormItem {...rest} />
    </Form.Item>
  );
};

export default ATree;
