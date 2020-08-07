/* eslint-disable no-console */

import React from 'react';
import { Form, Button } from 'antd';
import { AAutoComplete } from '@aiolosjs/components';

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

  const [options, setOptions] = React.useState<{ value: string }[]>([]);

  function onSearch(searchText: any) {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}>
      <AAutoComplete
        name="demo1"
        label="选择"
        rules={[
          {
            required: true,
            message: ' AAutoComplete!',
          },
        ]}
        options={options}
        widgetProps={{
          style: styles,
          placeholder: '请输入',
          onSearch,
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
