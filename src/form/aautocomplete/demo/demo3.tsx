/* eslint-disable no-console */

import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { AAutoComplete } from '@aiolosjs/components';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

export default () => {
  const [form] = Form.useForm();

  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (value: string) => {
    setOptions(
      !value ? [] : [{ value }, { value: value + value }, { value: value + value + value }],
    );
  };

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // console.log('handleKeyPress', ev);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}>
      <AAutoComplete
        name="demo3"
        label="选择"
        rules={[
          {
            required: true,
            message: ' AAutoComplete!',
          },
        ]}
        options={options}
        widgetProps={{
          style: styles,
          onSearch,
        }}
      >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{ height: 50 }}
          onKeyPress={handleKeyPress}
        />
      </AAutoComplete>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};
