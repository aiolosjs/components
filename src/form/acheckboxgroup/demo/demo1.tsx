import React from 'react';
import { Form, Button } from 'antd';
import ACheckboxGroup from '..';

const checkboxOptions = [
  {
    value: 1,
    label: '黑龙江省',
  },
  {
    value: 2,
    label: '海南省',
  },
  {
    value: 3,
    label: '湖北省',
  },
  {
    value: 4,
    label: '云南省',
  },
];

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 400,
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
      <ACheckboxGroup
        name="demo2"
        label="省份"
        form={form}
        // initialValue={3}
        rules={[
          {
            required: true,
            message: ' 请选择省份',
          },
        ]}
        checkboxOptions={checkboxOptions}
        widgetProps={{
          style: styles,
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
