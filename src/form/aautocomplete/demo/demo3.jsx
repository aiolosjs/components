import React from 'react';
import { Form, Input, Button } from 'antd';
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

  function onSearch(searchText) {
    setDataSource(!searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)]);
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

  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <AAutoComplete
        name="demo3"
        label="选择"
        form={form}
        rules={[
          {
            required: true,
            message: ' AAutoComplete!',
          },
        ]}
        dataSource={dataSource}
        widgetProps={{
          style: styles,
          onSearch,
        }}
      >
        <Input.TextArea
          placeholder="input here"
          style={{
            height: 50,
          }}
        />
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
