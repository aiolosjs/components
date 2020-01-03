import React, { useMemo } from 'react';
import { Form, Cascader } from 'antd';
import { CascaderProps, CascaderOptionType } from 'antd/lib/cascader';
import { IBaseWidgetProps } from '../types';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface ACascaderProps extends IBaseWidgetProps {
  selectOptions: CascaderOptionType[];
  formatter?: (value: Array<CascaderOptionType>) => Array<CascaderOptionType>;
  widgetProps?: Omit<CascaderProps, 'options'>;
}

const ACascader: React.FC<ACascaderProps> = ({
  name,
  label,
  form,
  selectOptions,
  widgetProps,
  formatter,
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

  function formatWrapper(value: Array<CascaderOptionType>) {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  const selectOptionsMemo = useMemo(() => formatWrapper(selectOptions), [selectOptions]);

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(<Cascader options={selectOptionsMemo} {...widgetProps} />)}
    </Form.Item>
  );
};

ACascader.defaultProps = {
  initialValue: undefined,
  selectOptions: [],
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ACascader;
