import React from 'react';
import { Form, Button } from 'antd';
import ADynamicAutoComplete from '..';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 20,
  },
};
const styles = {
  width: '100%',
};

const WidgetWithForm = ({ form }) => {
  function onSearch(value) {
    console.log(value);
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
      <ADynamicAutoComplete
        name="demo1"
        label="节点"
        form={form}
        rules={[
          {
            required: true,
            message: ' ATree!',
          },
        ]}
        loadDataOption={{
          queryKey: 'id',
          action: 'http://yapi.rebornauto.cn/mock/39/autocomplete',
        }}
        widgetProps={{
          style: styles,
          onSearch,
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
