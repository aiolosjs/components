import React from 'react';
import AInput, { AInputProps } from './ainput';

const rule = {
  pattern: /^1[345678]\d{9}$/,
  message: ' 格式不正确',
};

class Phone extends React.PureComponent<AInputProps> {
  render() {
    const {
      name,
      widgetProps = {},
      initialValue,
      formItemProps = {},
      rules = [],
      ...rest
    } = this.props;
    const phoneRules = [rule, ...rules];
    if (initialValue !== undefined) {
      formItemProps.initialValue = initialValue;
    }

    return (
      <AInput
        name={name}
        rules={phoneRules}
        formItemProps={formItemProps}
        widgetProps={{ maxLength: 11, ...widgetProps }}
        {...rest}
      />
    );
  }
}

export default Phone;
