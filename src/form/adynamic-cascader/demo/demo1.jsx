import React from 'react';
import { Form, Button } from 'antd';
import ADynamicCascader from '..';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 20,
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
      <ADynamicCascader
        name="demo1"
        label="地址"
        form={form}
        rules={[
          {
            required: true,
            message: ' ADynamicCascader!',
          },
        ]}
        loadDataOptions={[
          {
            action: 'http://yapi.rebornauto.cn/mock/39/province_1',
          },
          {
            action: 'http://yapi.rebornauto.cn/mock/39/city_1',
            queryKey: 'id',
          },
          {
            action: 'http://yapi.rebornauto.cn/mock/39/region_1',
            queryKey: 'id',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择省市区',
          allowClear: true,
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
