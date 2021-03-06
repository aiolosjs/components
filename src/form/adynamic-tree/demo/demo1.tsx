/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { ADynamicTree } from '@aiolosjs/components';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

export default () => {
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
      <ADynamicTree
        name="demo1"
        label="节点"
        action="http://yapi.yunxiaowei.cn/mock/60/tree_node"
        initialValue={[101]}
        rules={[
          {
            required: true,
            message: ' 请选择节点!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择节点',
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
//
