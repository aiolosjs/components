import React from 'react';
import { Form, Input, Button } from 'antd';
import ASelect from '..';

const selectOptions = [
  {
    key: 1,
    label: '等政力农',
    children: [
      {
        key: 1000,
        value: '乔刚',
      },
    ],
  },
  {
    key: 2,
    label: '导存十便龙',
    children: [
      {
        key: 1060,
        value: '卢娟',
      },
      {
        key: 1070,
        value: '康娟',
      },
    ],
  },
  {
    key: 3,
    label: '水达群厂每',
    children: [
      {
        key: 1080,
        value: '侯磊',
      },
      {
        key: 1090,
        value: '胡强',
      },
    ],
  },
];

const layout = {
  labelCol: { span: 4 },
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
        label="ASelectGroup"
        form={form}
        initialValue={1080}
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
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(WidgetWithForm);
