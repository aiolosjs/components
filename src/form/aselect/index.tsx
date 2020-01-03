import React, { useMemo } from 'react';
import { Select, Form } from 'antd';
import { SelectProps } from 'antd/lib/select';
import { IBaseWidgetProps } from '../types';

const { Option } = Select;

export interface SelectOptionsProps {
  key: string | number;
  value: string | number;
  disabled?: boolean;
  [k: string]: any;
}

export interface ASelectProps extends IBaseWidgetProps {
  selectOptions: SelectOptionsProps[];
  formatter?: (value: any) => SelectOptionsProps[];
  widgetProps?: SelectProps;
}

const ASelect: React.FC<ASelectProps> = ({
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

  function formatWrapper(value: any): SelectOptionsProps[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  const selectOptionsMemo = useMemo(() => formatWrapper(selectOptions), [selectOptions]);

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(
        <Select {...widgetProps}>
          {selectOptionsMemo.map(({ key, value, disabled, ...rest }) => (
            <Option key={key} value={key} disabled={disabled} {...rest}>
              {value}
            </Option>
          ))}
        </Select>,
      )}
    </Form.Item>
  );
};

ASelect.defaultProps = {
  initialValue: undefined,
  selectOptions: [],
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ASelect;
