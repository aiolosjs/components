/* eslint-disable no-nested-ternary */
import React from 'react';
import { Form, AutoComplete } from 'antd';
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import { LabeledValue } from 'antd/lib/select';
import { IBaseWidgetProps } from '../types';

export interface AAutoCompleteProps extends IBaseWidgetProps {
  options?: LabeledValue[];
  widgetProps?: Omit<AutoCompleteProps, 'options'>;
}

type staticComponent = {
  Option?: typeof AutoComplete.Option;
};

const AAutoComplete: React.FC<AAutoCompleteProps> & staticComponent = ({
  name,
  label,
  options = [],
  children,
  widgetProps = {},
  formItemProps = {},
  rules = [],
  initialValue,
}) => {
  Object.assign(formItemProps, {
    rules,
    initialValue,
  });

  const { ...rest } = widgetProps;

  return (
    <Form.Item name={name} label={label} {...formItemProps}>
      {React.isValidElement(children) ? (
        <AutoComplete options={options} {...rest}>
          {children as React.ReactElement}
        </AutoComplete>
      ) : children ? (
        <AutoComplete {...rest}>{children as React.ReactElement}</AutoComplete>
      ) : (
        <AutoComplete options={options} {...rest} />
      )}
    </Form.Item>
  );
};

AAutoComplete.Option = AutoComplete.Option;

export default AAutoComplete;
