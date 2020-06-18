/* eslint-disable no-console */

import React, { useState } from 'react';
import { Form, Button } from 'antd';
import { ADynamicSelect } from '@aiolosjs/components';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

export default () => {
  const [form] = Form.useForm();

  const [cityAction, setCityAction] = useState<string | null>(null);

  function onProvinceChange(province: number | undefined) {
    if (province) {
      form.setFieldsValue({
        city1: undefined,
      });
      setCityAction(`http://yapi.suxf.cn/mock/84/city?province=${province}`);
    }
  }

  function onCityChange(city: number) {
    console.log('city', city);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}>
      <ADynamicSelect
        name="province"
        label="省份"
        action="http://yapi.suxf.cn/mock/84/province"
        rules={[
          {
            required: true,
            message: ' 请选择省份',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择省份',
          onChange: onProvinceChange,
        }}
      />
      <ADynamicSelect
        name="city1"
        label="城市"
        action={cityAction}
        rules={[
          {
            required: true,
            message: '请选择城市',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择城市',
          onChange: onCityChange,
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
