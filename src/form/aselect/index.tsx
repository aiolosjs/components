import React from 'react';
import { Select, Form } from 'antd';
import { SelectProps, SelectValue } from 'antd/lib/select';
import { IBaseWidgetProps } from '../types';

const { Option } = Select;

type Key = string | number;

export interface SelectOptionsProps {
  key: Key;
  value: string;
  disabled?: boolean;
  [k: string]: any;
}

export interface ASelectProps extends IBaseWidgetProps {
  selectOptions: SelectOptionsProps[];
  formatter?: (value: any) => SelectOptionsProps[];
  widgetProps?: SelectProps<SelectValue>;
}

const ASelect: React.FC<ASelectProps> = ({
  name,
  label,
  selectOptions = [],
  widgetProps = {},
  formItemProps = {},
  initialValue,
  rules = [],
}) => {
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }
  return (
    <Form.Item name={name} label={label} rules={rules} {...formItemProps}>
      <Select {...widgetProps}>
        {selectOptions.map(({ key, value, disabled, ...rest }) => (
          <Option key={key} value={key} title={value} disabled={disabled} {...rest}>
            {value}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default ASelect;
