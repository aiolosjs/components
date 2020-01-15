import React from 'react';
import { ConfigProvider, Form, Button } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './index.css';
import AUpload from '..';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};

const WidgetWithForm = ({ form }) => {
  const [locale] = React.useState(zhCN);

  function onChange(value) {
    // console.log(value);
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
    <ConfigProvider locale={locale}>
      <Form {...layout} onSubmit={handleSubmit}>
        <AUpload
          name="demo2"
          label="图片"
          form={form}
          rules={[
            {
              required: true,
              message: ' 请选择图片',
            },
          ]}
          widgetProps={{
            listType: 'picture-card',
            action: 'http://yapi.rebornauto.cn/mock/39/upload',
            onChange,
            multiple: true,
          }}
        />

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default Form.create()(WidgetWithForm);
