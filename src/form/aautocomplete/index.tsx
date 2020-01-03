import React, { useMemo } from 'react';
import { Form, AutoComplete } from 'antd';
import { AutoCompleteProps, DataSourceItemType } from 'antd/lib/auto-complete';
import { OptionProps, OptGroupProps } from 'antd/lib/select';
import { IBaseWidgetProps } from '../types';

const { Option, OptGroup } = AutoComplete;

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface AAutoCompleteProps extends IBaseWidgetProps {
  dataSource?: DataSourceItemType[];
  formatter?: (value: any) => DataSourceItemType[];
  widgetProps?: Omit<AutoCompleteProps, 'dataSource'>;
}

type staticComponent = {
  Option?: React.ClassicComponentClass<OptionProps>;
  OptGroup?: React.ClassicComponentClass<OptGroupProps>;
};

const AAutoComplete: React.FC<AAutoCompleteProps> & staticComponent = ({
  name,
  label,
  form,
  dataSource = [],
  formatter,
  children,
  widgetProps = {},
  formItemProps,
  rules,
  initialValue = [],
  fieldDecoratorOptions = {},
}) => {
  const { getFieldDecorator } = form;
  const options = {
    rules,
    initialValue,
    ...fieldDecoratorOptions,
  };

  const { ...rest } = widgetProps;

  function formatWrapper(value: any): DataSourceItemType[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  const dataSourceMemo = useMemo(() => formatWrapper(dataSource), [dataSource]);

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(
        <AutoComplete dataSource={dataSourceMemo} {...rest}>
          {children as React.ReactElement}
        </AutoComplete>,
      )}
    </Form.Item>
  );
};

AAutoComplete.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

AAutoComplete.Option = Option;
AAutoComplete.OptGroup = OptGroup;

export default AAutoComplete;
