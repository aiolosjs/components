import React from 'react';
import { Form, Button, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';

import { ADynamicSelectGroup, AInput } from '../../../index';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 260,
};

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function onChange(value, node) {
    console.log(value, node);
    if (node) {
      const {
        props: { age, address },
      } = node;
      form.setFieldsValue({
        age,
        address,
      });
    } else {
      form.setFieldsValue({
        age: undefined,
        address: undefined,
      });
    }
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
      <ADynamicSelectGroup
        name="name1"
        label="姓名"
        form={form}
        action="http://yapi.rebornauto.cn/mock/39/selectGroup"
        rules={[
          {
            required: true,
            message: ' 请选择姓名!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          allowClear: true,
          onChange,
        }}
      />
      <AInput
        name="age"
        label="年龄"
        form={form}
        rules={[
          {
            required: true,
            message: ' 请输入年龄!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请输入年龄',
        }}
      />

      <Form.Item label="地址">
        {form.getFieldDecorator('address', {
          rules: [
            {
              required: true,
              message: ' 请输入地址',
            },
          ],
        })(<Input style={styles} placeholder="请输入地址" />)}
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
