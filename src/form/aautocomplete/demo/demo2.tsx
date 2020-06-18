/* eslint-disable no-console */

import React, { useState } from 'react';
import { Form, Button } from 'antd';
import { AAutoComplete } from '@aiolosjs/components';

const { Option } = AAutoComplete;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

const mockVal = (str: string, repeat: number = 1) => {
  return {
    value: str.repeat(repeat),
  };
};

export default () => {
  const [form] = Form.useForm();

  const [result, setResult] = useState<string[]>([]);
  const onSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }
    setResult(res);
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
        name="demo2"
        label="选择"
        rules={[
          {
            required: true,
            message: ' AAutoComplete!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请输入',
          onSearch,
        }}
      >
        {result.map((email: string) => (
          <Option key={email} value={email}>
            {email}
          </Option>
        ))}
      </AAutoComplete>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};
