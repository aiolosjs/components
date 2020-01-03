import React from 'react';
import { Form, Input, Button } from 'antd';
import ASelect from '..';

const selectOptions = [
  {
    key: 1,
    value: '邓艳',
    age: 25,
  },
  {
    key: 2,
    value: '龙芳',
    disabled: true,
    age: 24,
  },
  {
    key: 3,
    value: '乔明',
    age: 25,
  },
];

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

const WidgetWithForm = ({ form }) => {
  const { getFieldDecorator } = form;

  function onChange(value, node) {
    console.log(value, node);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <Form.Item label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <ASelect
        name="demo2"
        label="ASelect"
        form={form}
        initialValue={3}
        rules={[
          {
            required: true,
            message: ' ASelect!',
          },
        ]}
        selectOptions={selectOptions}
        widgetProps={{
          placeholder: '请选择',
          allowClear: true,
          onChange,
        }}
      />
      <Form.Item label="name">
        {getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: 'Please input name!',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(WidgetWithForm);
