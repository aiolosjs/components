---
title: ADynamicCascader
nav:
  title: 组件
  path: /forms
---

# ADynamicCascader

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />

### 设定初始值

<code src="./demo/demo2.tsx" />

### 默认初始第一列

<code src="./demo/demo3.tsx" />

### 自定义数据加载 url 和参数

<code src="./demo/demo4.tsx" />

### formatter loadData

<code src="./demo/demo5.tsx" />

## 属性

### 公共属性

| 参数                  | 说明                                                                                                                                  | 类型                | required |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- |
| name                  | Form. Item 中 name                                                                                                                            | string              | true     |
| label                 | Form. Item label 属性                                                                                                                  | string \| ReactNode | false    |
| initialValue          | 子节点的初始值，类型、可选值均由子节点决定                                                                                            | any                 | false    |
| rules                 | 校验规则, [参考文档](https://ant.design/components/form-cn/#Rule)                                     | object[]            | false    |
| formItemProps         | Form. Item 属性[参考文档](https://ant.design/components/form-cn/#Form.Item)                                                            | object              | false    |

### 组件属性

| 参数          | 说明                  | 类型                                                                                           | required |
| ------------- | --------------------- | ---------------------------------------------------------------------------------------------- | -------- |
| customLoadDataParams  | 自定义接口参数   | (selectedOptions?: CascaderOptionType[], position?:number) => string \| undefined  | true           |
| loadDataOptions  | 接口options   | Array<[LoadDataOptions](#interface) \| null \| undefined>   | true           |
| widgetProps | Cascader组件默认属性 [参考文档](https://ant.design/components/cascader-cn/#API) | object              | false    |
| selectOptions | Cascader组件下拉选项值 | [CascaderOptionType[]](#interface) | false     |
| asyncFn | 异步请求函数 | (action: string) => Promise<CascaderOptionType[]> | false |
| formatter | 格式化数据格式 |      function(value: any): CascaderOptionType[]        | false    |

### interface

``` javascript
interface LoadDataOptions {
    queryKey ? : string;
    action: string;
}

interface CascaderOptionType {
    value ? : string | number;
    label ? : React.ReactNode;
    disabled ? : boolean;
    isLeaf ? : boolean;
    loading ? : boolean;
    children ? : Array < CascaderOptionType > ;
    [key: string]: any;
}
```
