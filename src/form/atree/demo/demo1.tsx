import React from 'react';
import { Form, Tag, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import ATree from '..';

const treeData = [
  {
    title: 'Node1',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        key: '0-0-0',
      },
      {
        title: 'Child Node2',
        key: '0-0-1',
        disabled: true,
      },
      {
        title: 'Child Node2',
        key: '0-0-2',
        children: [
          {
            title: 'Child Node2-1',
            key: '0-0-2-1',
          },
          {
            title: 'Child Node2-2',
            key: '0-0-2-2',
          },
        ],
      },
    ],
  },
  {
    title: 'Node2',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        key: '0-1-2',
      },
    ],
  },
];

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

const styles: React.CSSProperties = {
  width: '100%',
};

const WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {
  function onChange(value, node) {
    // console.log(value, node);
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
    form.setFieldsValue({ demo2: undefined });
  }

  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <ATree
        name="demo2"
        label="节点"
        form={form}
        rules={[
          {
            required: true,
            message: ' ATree!',
          },
        ]}
        treeData={treeData}
        initialValue={['0-0-0']}
        widgetProps={{
          style: styles,
        }}
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
