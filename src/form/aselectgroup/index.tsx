import React from 'react';
import { Select, Form } from 'antd';
import { SelectProps, SelectValue } from 'antd/lib/select';
import { IBaseWidgetProps } from '../types';
import { SelectOptionsProps } from '../aselect';

const { Option, OptGroup } = Select;

export interface SelectOptGroupProps {
  key: string | number;
  label: string;
  children: SelectOptionsProps[];
}

export interface ASelectOptGroupProps extends IBaseWidgetProps {
  selectOptions: SelectOptGroupProps[];
  widgetProps?: SelectProps<SelectValue>;
}

const ASelectGroup: React.FC<ASelectOptGroupProps> = ({
  name,
  label,
  selectOptions = [],
  widgetProps = {},
  formItemProps = {},
  rules = [],
  initialValue,
}) => (
  <Form.Item name={name} rules={rules} initialValue={initialValue} label={label} {...formItemProps}>
    <Select {...widgetProps}>
      {selectOptions.map(item => (
        <OptGroup label={item.label} key={item.key}>
          {item.children.map(({ key, value, disabled, ...rest }) => (
            <Option key={key} value={key} disabled={disabled} {...rest}>
              {value}
            </Option>
          ))}
        </OptGroup>
      ))}
    </Select>
  </Form.Item>
);

export default ASelectGroup;
