---
title: ADynamicAutoComplete
nav:
  title: 组件
  path: /forms
---

# ADynamicAutoComplete

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />


### 自定义请求函数

<code src="./demo/demo2.tsx" />

## 属性


### 公共属性

| 参数                  | 说明                                                                                                                                  | 类型                | required |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- |
| name                  | Form.Item 中 name                                                                                                                            | string              | true     |
| label                 | Form.Item label 属性                                                                                                                  | string \| ReactNode | false    |
| initialValue          | 子节点的初始值，类型、可选值均由子节点决定                                                                                            | any                 | false    |
| rules                 | 校验规则, [参考文档](https://ant.design/components/form-cn/#Rule)                                     | object[]            | false    |
| formItemProps         | Form.Item 属性[参考文档](https://ant.design/components/form-cn/#Form.Item)                                                            | object              | false    |

### 组件属性

| 参数          | 说明                  | 类型                                                                                           | required |
| ------------- | --------------------- | ---------------------------------------------------------------------------------------------- | -------- |
| widgetProps | AutoComplete组件默认属性 [参考文档](https://ant.design/components/auto-complete-cn/#API) | object              | false    |
| loadDataOption  | 接口options   | [LoadDataOption](#interface)   | true           |
| customLoadDataParams  | 自定义接口参数   | (searchValue: string) => string  | true           |
| asyncFn | 异步请求函数 | (action: string) => Promise | false |
| formatter | 格式化数据格式 |      function(value: any): LabeledValue[]        | false    |
| throttleWait | 节流间隔, 单位为毫秒，设置后，请求进入节流模式。 |      number        | false    |

### interface

```javascript

 interface LoadDataOption {
  action: string;
  queryKey?: string;
  otherData?: { [key: string]: string };
}

interface LabeledValue {
    key?: string;
    value: RawValue;
    label: React.ReactNode;
}

```

