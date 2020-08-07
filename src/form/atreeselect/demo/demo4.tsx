/* eslint-disable no-console */

import React from 'react';
import { Form, Button, TreeSelect } from 'antd';
import { ATreeSelect } from '@aiolosjs/components';

const treeData = [
  {
    value: '1',
    title: '班级-1',
    children: [
      {
        title: '熊超',
        value: '100',
      },
      {
        title: '余洋',
        value: '101',
      },
      {
        title: '顾娟',
        value: 102,
      },
      {
        title: '刘秀英',
        value: '103',
      },
    ],
  },
  {
    value: '2',
    title: '班级-2',
    children: [
      {
        title: '张三',
        value: '200',
      },
      {
        title: '李四',
        value: '201',
      },
    ],
  },
];

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 400,
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
      <ATreeSelect
        name="demo4"
        label="节点"
        treeData={treeData}
        initialValue={[{ value: 102 }]}
        // initialValue={[102]}
        rules={[
          {
            required: true,
            message: ' ASelect!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          multiple: true,
          treeCheckable: true,
          treeCheckStrictly: true,
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
