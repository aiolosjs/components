import React from 'react';
import { Form, Button } from 'antd';
import request from 'umi-request';
import { FormComponentProps } from 'antd/es/form';
import { CascaderOptionType } from 'antd/lib/cascader';
import ADynamicCascader from '..';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

const styles: React.CSSProperties = {
  width: 260,
};

const fetch: <T>(url: string) => Promise<T> = url => request.get(url).then(res => res);

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

  function formatter(data: any): CascaderOptionType[] {
    return data.districts[0].districts.map(({ name, adcode, level }) => {
      if (level === 'district') {
        return { label: name, value: adcode };
      }
      return { label: name, value: adcode, isLeaf: false };
    });
  }

  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <ADynamicCascader
        name="demo5"
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
            action:
              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',
          },
          {
            action:
              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',
            // queryKey: 'keywords',
          },
          {
            action:
              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',
            // queryKey: 'keywords',
          },
        ]}
        asyncFn={fetch}
        formatter={formatter}
        customLoadDataParams={(selectedOptions, position) => {
          // console.log(selectedOptions,position)
          if (position !== 1 && selectedOptions.length > 0) {
            const { value } = selectedOptions[position - 2];
            return `https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429&keywords=${value}`;
          }
        }}
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
