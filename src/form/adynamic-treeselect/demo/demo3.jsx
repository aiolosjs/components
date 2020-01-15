import React from 'react';
import { Form, TreeSelect, Button } from 'antd';
import ADynamicTreeSelect from '..';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const styles = {
  width: '100%',
};

const WidgetWithForm = ({ form }) => {
  function onChange(value, node) {
    console.log(value, node);
  }

  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <ADynamicTreeSelect
        name="demo2"
        label="姓名"
        form={form}
        action="http://yapi.rebornauto.cn/mock/39/node"
        rules={[
          {
            required: true,
            message: ' 请选择!',
          },
        ]}
        treeCheckParentStrictly
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          allowClear: true,
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_ALL,
          treeCheckStrictly: true,
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
