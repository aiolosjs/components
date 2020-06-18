/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { ATree } from '@aiolosjs/components';

const treeData = [
  {
    key: '1',
    title: '班级-1',
    children: [
      {
        title: '熊超',
        key: '100',
      },
      {
        title: '余洋',
        key: '101',
      },
      {
        title: '顾娟',
        key: '102',
      },
      {
        title: '刘秀英',
        key: '103',
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

  function onSelect(value: any) {
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
      <ATree
        name="demo1"
        label="节点"
        treeData={treeData}
        initialValue={['102']}
        rules={[
          {
            required: true,
            message: ' ASelect!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          // checkable: true,
          onSelect,
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
