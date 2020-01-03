import React, { useMemo } from 'react';
import { Select, Form } from 'antd';
import { SelectProps } from 'antd/lib/select';
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
  widgetProps?: SelectProps;
  formatter?: (value: any) => SelectOptGroupProps[];
}

const ASelectGroup: React.FC<ASelectOptGroupProps> = ({
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

  function formatWrapper(value: any): SelectOptGroupProps[] {
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
          {selectOptionsMemo.map(item => (
            <OptGroup label={item.label} key={item.key}>
              {item.children.map(({ key, value, disabled, ...rest }) => (
                <Option key={key} value={key} disabled={disabled} {...rest}>
                  {value}
                </Option>
              ))}
            </OptGroup>
          ))}
        </Select>,
      )}
    </Form.Item>
  );
};

ASelectGroup.defaultProps = {
  initialValue: undefined,
  selectOptions: [],
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ASelectGroup;
