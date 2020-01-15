import React from 'react';
import { Form, Button } from 'antd';
import AAutoComplete from '..';

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
  const [dataSource, setDataSource] = React.useState([]);

  function onSearch(value) {
    let result;

    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }

    setDataSource(result);
  }

  function onChange(value, node) {
    // console.log(value, node);
  }

  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  const children = dataSource.map(email => (
    <AAutoComplete.Option key={email}>{email}</AAutoComplete.Option>
  ));
  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <AAutoComplete
        name="demo2"
        label="选择"
        form={form}
        rules={[
          {
            required: true,
            message: ' AAutoComplete!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请输入',
          onSearch,
        }}
      >
        {children}
      </AAutoComplete>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(WidgetWithForm);
