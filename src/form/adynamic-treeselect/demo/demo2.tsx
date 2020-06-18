/* eslint-disable no-console */

import React from 'react';
import { Form, Button, Tag } from 'antd';
import { ADynamicTreeSelect } from '@aiolosjs/components';
import { DataNode } from 'rc-tree-select/lib/interface';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

function formatter(node: any[]): DataNode[] {
  return node.map((item) => {
    const { title } = item;

    const result = {
      ...item,
      title: item.children ? <Tag color="#f50">{title}</Tag> : <Tag color="#87d068">{title}</Tag>,
    };

    const child = item.children;
    if (child) {
      const children = formatter(child);
      result.children = children;
    }
    return result;
  });
}

export default () => {
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
      <ADynamicTreeSelect
        name="demo2"
        label="节点"
        action="http://yapi.suxf.cn/mock/84/treeselect_node"
        initialValue={102}
        formatter={formatter}
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
