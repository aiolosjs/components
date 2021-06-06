/* eslint-disable no-console */

import React from 'react';
import { Form, Button, Input } from 'antd';
import { ADynamicSelect } from '@aiolosjs/components';

const selectOptions = [
  {
    key: 1,
    value: '邓艳',
    age: 25,
  },
  {
    key: 2,
    value: '龙芳',
    disabled: true,
    age: 24,
  },
  {
    key: 3,
    value: '乔明',
    age: 25,
  },
];

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

const WidgetWithForm = () => {
  const [form] = Form.useForm();

  function onChange(value: any, option: any) {
    console.log(value, option);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}>
      <ADynamicSelect
        name="name2"
        label="姓名"
        action="http://yapi.yunxiaowei.cn/mock/60/dic"
        rules={[
          {
            required: true,
            message: ' 请选择姓名!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择姓名',
          allowClear: true,
          onChange,
        }}
      />
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WidgetWithForm;
