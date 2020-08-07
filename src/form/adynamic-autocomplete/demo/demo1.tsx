/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { ADynamicAutoComplete } from '@aiolosjs/components';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const formatter = (data: [] = []) => data.map(v => ({ value: v }));

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}>
      <ADynamicAutoComplete
        name="demo1"
        label="节点"
        formatter={formatter}
        rules={[
          {
            required: true,
            message: ' ATree!',
          },
        ]}
        loadDataOption={{
          queryKey: 'id',
          action: 'http://yapi.rebornauto.cn/mock/39/autocomplete',
        }}
        widgetProps={{
          style: styles,
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
