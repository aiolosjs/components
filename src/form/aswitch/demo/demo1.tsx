import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';

import ASwitch from '..';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

// const styles: React.CSSProperties = {
//   width: 260,
// };

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function onChange(value) {
    console.log(value);
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
      <ASwitch
        name="switch"
        label="Switch"
        form={form}
        initialValue={!!1}
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        widgetProps={{
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
