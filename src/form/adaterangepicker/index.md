---
title: ADateRangePicker
nav:
  title: 组件
  path: /forms
---

# ADateRangePicker

## 代码演示

### date用法

<code src="./demo/demo1.tsx" />


### year用法

<code src="./demo/demo2.tsx" />


### month用法

<code src="./demo/demo3.tsx" />


### week用法

<code src="./demo/demo4.tsx" />


### quarter用法

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

### 组件属性

| 参数          | 说明                  | 类型                                                                                           | required |
| ------------- | --------------------- | ---------------------------------------------------------------------------------------------- | -------- |
| widgetProps | 共同的 API [参考文档](https://ant.design/components/date-picker-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API)  [DatePicker](https://ant.design/components/date-picker-cn/#DatePicker)  [YearPicker](https://ant.design/components/date-picker-cn/#YearPicker)  [QuarterPicker](https://ant.design/components/date-picker-cn/#QuarterPicker)  [MonthPicker](https://ant.design/components/date-picker-cn/#MonthPicker)  [WeekPicker](https://ant.design/components/date-picker-cn/#WeekPicker) | object              | false    |
| picker                  | 设置选择器类型                                                                                                                            | `date` \| `week` \| `month` \| `quarter` \| `year`             | false     |  
