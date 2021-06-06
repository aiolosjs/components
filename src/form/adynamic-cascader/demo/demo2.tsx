/* eslint-disable no-console */

import React from 'react';
import { Form, Button, Input } from 'antd';
import { ADynamicCascader } from '@aiolosjs/components';

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
      <ADynamicCascader
        name="demo2"
        label="地址"
        initialValue={[10004, 20004, 30002]}
        rules={[
          {
            required: true,
            message: ' 请选择!',
          },
        ]}
        loadDataOptions={[
          { action: 'http://yapi.yunxiaowei.cn/mock/60/province_1' },
          { action: 'http://yapi.yunxiaowei.cn/mock/60/city_1', queryKey: 'id' },
          { action: 'http://yapi.yunxiaowei.cn/mock/60/region_1', queryKey: 'id' },
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
