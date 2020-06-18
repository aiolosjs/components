/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { ASelectGroup } from '@aiolosjs/components';

const selectOptions = [
  {
    key: 1,
    label: '意部群难',
    children: [
      {
        key: 1000,
        value: '潘涛',
      },
      {
        key: 1010,
        value: '冯杰',
      },
    ],
  },
  {
    key: 2,
    label: '文铁眼东',
    children: [
      {
        key: 1020,
        value: '谭敏',
      },
    ],
  },
  {
    key: 3,
    label: '手青须从',
    children: [
      {
        key: 1060,
        value: '彭秀英',
      },
      {
        key: 1070,
        value: '黄勇',
      },
    ],
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
      <ASelectGroup
        name="demo1"
        label="姓名"
        rules={[
          {
            required: true,
            message: ' 请选择!',
          },
        ]}
        selectOptions={selectOptions}
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
