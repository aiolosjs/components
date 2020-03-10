import React from 'react';
import { Form, Tag, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import ATree from '..';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

const styles: React.CSSProperties = {
  width: '100%',
};

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function onChange(value, node) {
    // console.log(value, node);
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
      <ATree
        name="demo2"
        label="节点"
        form={form}
        rules={[
          {
            required: true,
            message: ' ATree!',
          },
        ]}
        action="http://yapi.rebornauto.cn/mock/39/tree_node"
        widgetProps={{
          style: styles,
          checkable: true,
          checkStrictly: true,
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
