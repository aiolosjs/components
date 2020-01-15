import React from 'react';
import { Form, Button } from 'antd';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
import ADatePicker from '..';

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
      <ADatePicker.MonthPicker
        name="demo2"
        label="日期"
        form={form}
        initialValue={moment()}
        rules={[
          {
            required: true,
            message: '请选择月份',
          },
        ]}
        widgetProps={{
          style: styles,
          allowClear: true,
          onChange,
          locale,
          format: 'YYYY-MM',
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
