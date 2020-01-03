import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import AInput from '..';

const layout = {
  labelCol: { span: 4 },
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
      <AInput.Phone
        name="ainput.phone"
        label="AInput.Phone"
        form={form}
        rules={[
          {
            required: true,
            message: '请输入手机号',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请输入',
          allowClear: true,
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
