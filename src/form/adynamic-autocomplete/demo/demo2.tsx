/* eslint-disable no-console */

import React, { useState } from 'react';
import { Form, Button } from 'antd';
import jsonp from 'jsonp';
import { ADynamicAutoComplete } from '@aiolosjs/components';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

export default () => {
  const [form] = Form.useForm();

  function asyncFn(params: string) {
    return new Promise((resolve, reject) => {
      jsonp(params, (err: any, data: any) => {
        if (err) reject(err);
        resolve(data.result.map((item: any) => item[0]));
      });
    });
  }

  const formatter = (data: [] = []) => {
    return data.map((v) => ({ value: v }));
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}>
      <ADynamicAutoComplete
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
        }}
        loadDataOption={{
          queryKey: 'q',
          action: 'https://suggest.taobao.com/sug',
          otherData: { code: 'utf-8' },
        }}
        asyncFn={asyncFn}
        formatter={formatter}
      />

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};
