import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import AInput from '..';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 300,
};

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
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
      <AInput.Password
        name="ainput2"
        label="AInput"
        form={form}
        initialValue={3}
        rules={[
          {
            required: true,
            message: ' AInput!',
          },
        ]}
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
