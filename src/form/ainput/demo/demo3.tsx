/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { AInput } from '@aiolosjs/components';

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
      <AInput.Phone
        name="demo3"
        label="手机"
        rules={[
          {
            required: true,
            message: ' 请输入',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          allowClear: true,
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
