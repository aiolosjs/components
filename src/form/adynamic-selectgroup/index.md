---
title: ADynamicSelectGroup
nav:
  title: 组件
  path: /forms
---

# adynamic-select

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />


### ADynamicSelectGroup和Form.Item 混合使用

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
| selectOptions | Select组件下拉选项值 | object[{key: string \| number; value: string \| number; disabled?: boolean;[k: string]: any;}] | true     |
| widgetProps | Select组件默认属性 [参考文档](https://ant.design/components/select-cn/#Select-props) | object              | false    |
| formatter | 格式化数据格式 |      function(value: any): SelectOptionsProps[]        | false    |
| asyncFn | 异步请求函数 | (action: string) => Promise | false |
| swrOptions | useSwr [options](https://github.com/vercel/swr#options) | object | false |
