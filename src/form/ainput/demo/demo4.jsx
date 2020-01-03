import React from 'react';
import { Form, Button } from 'antd';
import AInput from '..';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const styles = {
  width: 300,
};

const WidgetWithForm = ({ form }) => {
  function onChange(value) {
    console.log(value);
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
      <AInput.Number
        name="ainput.number"
        label="AInput.number"
        form={form}
        rules={[
          {
            required: true,
            message: '请输入数字',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请输入数字',
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

export default Form.create()(WidgetWithForm);
