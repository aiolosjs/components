/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { ASwitch } from '@aiolosjs/components';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const WidgetWithForm = () => {
  const [form] = Form.useForm();

  function onChange(value: any) {
    console.log(value);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}>
      <ASwitch
        name="demo1"
        label="是否正确"
        // initialValue={!!1}
        rules={[
          {
            required: true,
            message: ' 请选择!',
          },
        ]}
        widgetProps={{
          placeholder: '请选择',
          onChange,
        }}
      />

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WidgetWithForm;
