---
title: ADynamicTree
nav:
  title: 组件
  path: /forms
---

# ADynamicTree

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />




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
| widgetProps | Select组件默认属性 [参考文档](https://ant.design/components/tree-cn/#API) | object              | false    |
| formatter | 格式化数据格式 |      function(value: any): TreeNodeNormal[]        | false    |
| asyncFn | 异步请求函数 | (action: string) => Promise | false |
| swrOptions | useSwr [options](https://github.com/vercel/swr#options) | object | false |
