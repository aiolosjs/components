import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import './index.css';
import AUpload from '..';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function onChange(value) {
    // console.log(value);
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
      <AUpload
        name="demo2"
        label="图片"
        form={form}
        rules={[
          {
            required: true,
            message: ' 请选择图片',
          },
        ]}
        widgetProps={{
          listType: 'text',
          action: 'http://yapi.rebornauto.cn/mock/39/upload',
          onChange,
          multiple: true,
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
