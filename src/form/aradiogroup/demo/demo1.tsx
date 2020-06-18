/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { ARadioGroup } from '@aiolosjs/components';

const radioOptions = [
  {
    value: 1,
    label: '黑龙江省',
  },
  {
    value: 2,
    label: '海南省',
  },
  {
    value: 3,
    label: '湖北省',
  },
  {
    value: 4,
    label: '云南省',
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
      <ARadioGroup
        name="demo1"
        label="省份"
        rules={[
          {
            required: true,
            message: ' ASelect!',
          },
        ]}
        radioOptions={radioOptions}
        widgetProps={{
          style: styles,
          placeholder: '请选择',
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
