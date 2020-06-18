---
title: AInput
nav:
  title: 组件
  path: /forms
---

# AInput

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />


### AInput.Password使用

<code src="./demo/demo2.tsx" />


### AInput.Phone使用

<code src="./demo/demo3.tsx" />


### AInput.Number使用

<code src="./demo/demo4.tsx" />

### AInput.TextArea使用

<code src="./demo/demo5.tsx" />


## 属性

### 公共属性

| 参数                  | 说明                                                                                                                                  | 类型                | required |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- |
| name                  | Form.Item 中 name                                                                                                                            | string              | true     |
| label                 | Form.Item label 属性                                                                                                                  | string \| ReactNode | false    |
| initialValue          | 子节点的初始值，类型、可选值均由子节点决定                                                                                            | any                 | false    |
| rules                 | 校验规则, [参考文档](https://ant.design/components/form-cn/#Rule)                                     | object[]            | false    |
| formItemProps         | Form.Item 属性[参考文档](https://ant.design/components/form-cn/#Form.Item)                                                            | object              | false    |


### AInput组件属性

| 参数 | 说明 | 类型 | required |
| --- | --- | --- | --- |
| widgetProps | Input 组件默认属性 [参考文档](https://ant.design/components/input-cn/#Input) | object | false |

### AInput.Password组件属性

| 参数 | 说明 | 类型 | required |
| --- | --- | --- | --- |
| widgetProps | Input 组件默认属性 [参考文档](https://ant.design/components/input-cn/#Input.Password-(3.12.0-%E4%B8%AD%E6%96%B0%E5%A2%9E)) | object | false |

### AInput.Number组件属性

| 参数 | 说明 | 类型 | required |
| --- | --- | --- | --- |
| widgetProps | Input 组件默认属性 [参考文档](https://ant.design/components/input-number-cn/#API) | object | false |

### AInput.TextArea组件属性

| 参数 | 说明 | 类型 | required |
| --- | --- | --- | --- |
| widgetProps | Input 组件默认属性 [参考文档](https://ant.design/components/input-cn/#Input.TextArea) | object | false |


