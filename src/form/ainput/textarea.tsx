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
      form,
      widgetProps,
      formItemProps,
      rules,
      initialValue,
      fieldDecoratorOptions = {},
    } = this.props;

    const { getFieldDecorator } = form;
    const options = {
      rules,
      initialValue,
      ...fieldDecoratorOptions,
    };

    return (
      <Form.Item label={label} {...formItemProps}>
        {getFieldDecorator(name, options)(<Input.TextArea {...widgetProps} />)}
      </Form.Item>
    );
  }
}

export default TextArea;
