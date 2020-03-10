import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import './index.css';
import AUpload from '..';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

const initValue = [
  {
    uid: 10000,
    name: '以解.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: 10010,
    name: '报查.png',
    status: 'done',
    url: 'http://dummyimage.com/100x100/f2b379/FFF&text=报查.png',
    thumbUrl: 'http://dummyimage.com/100x100/9079f2/FFF&text=报查.png',
  },
  {
    uid: 10020,
    name: '林效层.png',
    status: 'done',
    url: 'http://dummyimage.com/100x100/85f279/FFF&text=林效层.png',
    thumbUrl: 'http://dummyimage.com/100x100/f279a8/FFF&text=林效层.png',
  },
];

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function onChange(value) {
    // console.log(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  function handleClear() {
    form.setFieldsValue({demo2:undefined})
  }


  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <AUpload
        name="demo2"
        label="图片"
        form={form}
        maxFileSize={1}
        maxFileCount={5}
        initialValue={initValue}
        rules={[
          {
            required: true,
            message: ' 请选择图片',
          },
        ]}
        widgetProps={{
          // style: styles,
          listType: 'picture-card',
          action: 'http://yapi.rebornauto.cn/mock/39/upload',
          onChange,
          multiple: true,
        }}
        // customUploadBtn={<div>123</div>}
      />

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
        <Button style={{ marginLeft: 12 }} onClick={handleClear}>
            clear
          </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(WidgetWithForm);
