/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { AUpload } from '@aiolosjs/components';

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
      <AUpload
        single
        name="demo5"
        label="图片"
        rules={[
          {
            required: true,
            message: '请上传图片!',
          },
        ]}
        maxFileCount={1}
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          multiple: true,
          action: 'http://yapi.suxf.cn/mock/84/upload',
          listType: 'picture-card',
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
