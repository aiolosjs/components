import React from 'react';
import { Form, Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import { IBaseWidgetProps } from '../types';

export interface AInputTextAreaProps extends IBaseWidgetProps {
  widgetProps?: TextAreaProps;
}

class TextArea extends React.PureComponent<AInputTextAreaProps> {
  static defaultProps = {
    initialValue: undefined,
    widgetProps: {},
    formItemProps: {},
    rules: [],
    fieldDecoratorOptions: {},
  };

  render() {
    const {
      name,
      label,
      rules = [],
      initialValue,
      formItemProps = {},
      widgetProps = {},
    } = this.props;

    if (initialValue !== undefined) {
      formItemProps.initialValue = initialValue;
    }

    return (
      <Form.Item name={name} label={label} rules={rules} {...formItemProps}>
        <Input.TextArea {...widgetProps} />
      </Form.Item>
    );
  }
}

export default TextArea;
