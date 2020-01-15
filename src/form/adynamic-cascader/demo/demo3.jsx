import React from 'react';
import { Form, Button } from 'antd';
import ADynamicCascader from '..';

const selectOptions = [
  {
    value: '10000',
    label: '江苏省',
    isLeaf: false,
  },
  {
    value: '10001',
    label: '湖南省',
    isLeaf: false,
  },
  {
    value: '10002',
    label: '云南省',
    isLeaf: false,
  },
  {
    value: '10003',
    label: '贵州省',
    isLeaf: false,
  },
  {
    value: '10004',
    label: '天津',
    isLeaf: false,
  },
  {
    value: '10005',
    label: '湖北省',
    isLeaf: false,
  },
];
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
        name="demo3"
        label="地址"
        form={form}
        rules={[
          {
            required: true,
            message: ' ADynamicCascader!',
          },
        ]}
        selectOptions={selectOptions}
        loadDataOptions={[
          null,
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
          placeholder: '请选择',
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
