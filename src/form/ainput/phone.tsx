import React from 'react';
import AInput, { AInputProps } from './ainput';

const rule = {
  pattern: /^1[345678]\d{9}$/,
  message: ' 格式不正确',
};

class Phone extends React.PureComponent<AInputProps> {
  render() {
    const { name, form, widgetProps = {}, rules = [], ...rest } = this.props;
    const phoneRules = [rule, ...rules];

    return (
      <AInput
        name={name}
        form={form}
        rules={phoneRules}
        widgetProps={{ maxLength: 11, ...widgetProps }}
        {...rest}
      />
    );
  }
}

export default Phone;
