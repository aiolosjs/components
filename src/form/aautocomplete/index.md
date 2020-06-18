---
title: AAutoComplete
nav:
  title: 组件
  path: /forms
---

# AAutoComplete

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />


### 自定义选项

<code src="./demo/demo2.tsx" />


### 自定义输入组件

<code src="./demo/demo3.tsx" />

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
| options | 自动完成的数据源 | LabeledValue[]              | false    |
| widgetProps | AutoComplete组件默认属性 [参考文档](https://ant.design/components/auto-complete-cn/#API) | object              | false    |

