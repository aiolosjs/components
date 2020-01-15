import React from 'react';
import { Form, Button } from 'antd';
import ADynamicSelect from '..';

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
  function onChange(value, node) {
    console.log(value, node);
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
        name="name"
        label="姓名"
        form={form}
        action="http://yapi.rebornauto.cn/mock/39/dic"
        rules={[
          {
            required: true,
            message: ' 请选择姓名!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择姓名',
          allowClear: true,
          onChange,
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
