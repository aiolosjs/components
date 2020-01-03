import React from 'react';
import { Form, AutoComplete, Button } from 'antd';
import jsonp from 'jsonp';
import { FormComponentProps } from 'antd/es/form';
import ADynamicAutoComplete from '..';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

const styles: React.CSSProperties = {
  width: '100%',
};

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function asyncFn(params) {
    return new Promise((resolve, reject) => {
      jsonp(params, (err, data) => {
        if (err) reject(err);
        resolve(data.result.map(item => item[0]));
      });
    });
  }

  function onSearch(value: any) {
    console.log(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  function formatter(data): string[] {
    return data;
  }

  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <ADynamicAutoComplete
        name="demo2"
        label="节点"
        form={form}
        rules={[
          {
            required: true,
            message: ' ATree!',
          },
        ]}
        loadDataOption={{
          queryKey: 'q',
          action: 'https://suggest.taobao.com/sug',
          otherData: { code: 'utf-8' },
        }}
        asyncFn={asyncFn}
        formatter={formatter}
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
