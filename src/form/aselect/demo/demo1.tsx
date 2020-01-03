import React from 'react';
import { Form, Button } from 'antd';
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

const styles: React.CSSProperties = {
  width: 120,
};

const WidgetWithForm = ({ form }) => {
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
          style: styles,
          placeholder: '请选择',
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
