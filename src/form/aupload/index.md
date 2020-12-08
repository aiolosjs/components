---
title: AUpload
nav:
  title: 组件
  path: /forms
---

# AUpload

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />

### 初始化默认图片

<code src="./demo/demo2.tsx" />

### 文件上传大小和数量限制

<code src="./demo/demo3.tsx" />

### 自定义上传按钮

<code src="./demo/demo4.tsx" />

### 只上传单张图片

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
| widgetProps | 组件默认属性 [参考文档](https://ant.design/components/upload-cn/#API) | object              | false    |
| maxFileSize | 文件上传最大数量, 默认10M | number              | false    |
| maxFileCount | 文件上传最大size, 默认10 | number              | false    |
| customUploadBtn | 自定义上传按钮 | React. ReactNode              | false    |
| single | 只上传单张图片 | boolean              | false    |
