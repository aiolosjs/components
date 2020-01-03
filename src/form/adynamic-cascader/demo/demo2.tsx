import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import ADynamicCascader from '..';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

const styles: React.CSSProperties = {
  width: 260,
};

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function onChange(value, node) {
    console.log(value, node);
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
      <ADynamicCascader
        name="demo2"
        label="地址"
        form={form}
        rules={[
          {
            required: true,
            message: ' ADynamicCascader!',
          },
        ]}
        initialValue={[10004, 20004, 30002]}
        loadDataOptions={[
          { action: 'http://yapi.rebornauto.cn/mock/39/province_1' },
          { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },
          { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },
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
