/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { ADynamicCascader } from '@aiolosjs/components';

const selectOptions = [
  {
    value: '10000',
    label: '江苏省',
    isLeaf: false,
  },
  {
    value: '10001',
    label: '湖南省',
    isLeaf: false,
  },
  {
    value: '10002',
    label: '云南省',
    isLeaf: false,
  },
  {
    value: '10003',
    label: '贵州省',
    isLeaf: false,
  },
  {
    value: '10004',
    label: '天津',
    isLeaf: false,
  },
  {
    value: '10005',
    label: '湖北省',
    isLeaf: false,
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
      <ADynamicCascader
        name="demo3"
        label="地址"
        selectOptions={selectOptions}
        loadDataOptions={[
          null,
          { action: 'http://yapi.yunxiaowei.cn/mock/60/city_1', queryKey: 'id' },
          { action: 'http://yapi.yunxiaowei.cn/mock/60/region_1', queryKey: 'id' },
        ]}
        rules={[
          {
            required: true,
            message: ' 请选择!',
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
