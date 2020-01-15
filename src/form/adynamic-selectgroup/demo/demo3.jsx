import React, { useState } from 'react';
import { Form, Button } from 'antd';
import { ADynamicSelect } from '../../../index';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const styles = {
  width: 260,
};

const WidgetWithForm = ({ form }) => {
  const [cityAction, setCityAction] = useState(null);

  function onProvinceChange(province) {
    if (province) {
      setCityAction(`http://yapi.rebornauto.cn/mock/39/city?province=${province}`);
    } else {
      form.setFieldsValue({
        city: undefined,
      });
    }
  }

  function onCityChange(city) {
    console.log('city', city);
  }

  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <ADynamicSelect
        name="province"
        label="省份"
        form={form}
        action="http://yapi.rebornauto.cn/mock/39/province"
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
        name="city"
        label="城市"
        form={form}
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
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(WidgetWithForm);
