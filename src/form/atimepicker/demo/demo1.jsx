import React from 'react';
import { Form, Button } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import ATimePicker from '..';

moment.locale('zh-cn');
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const styles = {
  width: 260,
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
      <ATimePicker
        name="demo2"
        label="时间"
        form={form}
        initialValue={moment()}
        rules={[
          {
            required: true,
            message: ' 请现在日期',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          allowClear: true,
          onChange,
          format: 'HH:mm:ss',
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
