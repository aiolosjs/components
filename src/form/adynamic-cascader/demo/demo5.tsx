import React from 'react';
import { Form, Button } from 'antd';
import request from 'umi-request';
import { CascaderOptionType } from 'antd/lib/cascader';
import { ADynamicCascader } from '@aiolosjs/components';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const styles: React.CSSProperties = {
  width: 260,
};

const fetch: <T>(url: string) => Promise<T> = (url) => request.get(url).then((res) => res);

const WidgetWithForm: React.FC = () => {
  function onChange(value: any, option: any) {
    console.log(value, option);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  function formatter(data: any): CascaderOptionType[] {
    return data.districts[0].districts.map(
      ({ name, adcode, level }: { name: string; adcode: string; level: string }) => {
        if (level === 'district') {
          return { label: name, value: adcode };
        }
        return { label: name, value: adcode, isLeaf: false };
      },
    );
  }

  function customLoadDataParams(
    selectedOptions: CascaderOptionType[],
    position: number,
  ): string | undefined {
    console.log('selectedOptions', selectedOptions);
    if (position !== 1 && selectedOptions.length > 0) {
      const { value } = selectedOptions[position - 2];
      return `https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429&keywords=${value}`;
    }
  }

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}>
      <ADynamicCascader
        name="demo5"
        label="地址"
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
        customLoadDataParams={customLoadDataParams}
        widgetProps={{
          style: styles,
          placeholder: '请选择省市区',
          allowClear: true,
          onChange,
        }}
      />

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WidgetWithForm;
