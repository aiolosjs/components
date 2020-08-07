---
title: ATreeSelect
nav:
  title: 组件
  path: /forms
---

# ATree

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />

### checkable勾选

<code src="./demo/demo2.tsx" />

### showCheckedStrategy勾选

<code src="./demo/demo3.tsx" />

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
| widgetProps |  组件默认属性 [参考文档](https://ant.design/components/tree-select-cn/#API) | object | false |
| treeData | treeData组件下拉选项值 | array<{value, title, children, [disabled, disableCheckbox, checkable]}> | true     |
