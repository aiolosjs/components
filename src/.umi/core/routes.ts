// @ts-nocheck
import { ApplyPluginsType } from '/Users/suxiangfeng/Documents/suxiangfeng/myProject/AiolosJs/components/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/demo1",
    "component": require('../../form/aautocomplete/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2",
    "component": require('../../form/aautocomplete/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3",
    "component": require('../../form/aautocomplete/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-1",
    "component": require('../../form/acascader/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-1",
    "component": require('../../form/acascader/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-2",
    "component": require('../../form/acheckboxgroup/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-2",
    "component": require('../../form/acheckboxgroup/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-3",
    "component": require('../../form/adatepicker/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-3",
    "component": require('../../form/adatepicker/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-1",
    "component": require('../../form/adatepicker/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo4",
    "component": require('../../form/adatepicker/demo/demo4.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo5",
    "component": require('../../form/adatepicker/demo/demo5.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-4",
    "component": require('../../form/adaterangepicker/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-4",
    "component": require('../../form/adaterangepicker/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-2",
    "component": require('../../form/adaterangepicker/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo4-1",
    "component": require('../../form/adaterangepicker/demo/demo4.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo5-1",
    "component": require('../../form/adaterangepicker/demo/demo5.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-5",
    "component": require('../../form/adynamic-autocomplete/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-5",
    "component": require('../../form/adynamic-autocomplete/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-6",
    "component": require('../../form/adynamic-cascader/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-6",
    "component": require('../../form/adynamic-cascader/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-3",
    "component": require('../../form/adynamic-cascader/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo4-2",
    "component": require('../../form/adynamic-cascader/demo/demo4.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo5-2",
    "component": require('../../form/adynamic-cascader/demo/demo5.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-7",
    "component": require('../../form/adynamic-select/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-7",
    "component": require('../../form/adynamic-select/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-4",
    "component": require('../../form/adynamic-select/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-8",
    "component": require('../../form/adynamic-selectgroup/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-8",
    "component": require('../../form/adynamic-selectgroup/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-9",
    "component": require('../../form/adynamic-tree/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-10",
    "component": require('../../form/adynamic-treeselect/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-9",
    "component": require('../../form/adynamic-treeselect/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-11",
    "component": require('../../form/ainput/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-10",
    "component": require('../../form/ainput/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-5",
    "component": require('../../form/ainput/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo4-3",
    "component": require('../../form/ainput/demo/demo4.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo5-3",
    "component": require('../../form/ainput/demo/demo5.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-12",
    "component": require('../../form/aradiogroup/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-13",
    "component": require('../../form/aselect/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-11",
    "component": require('../../form/aselect/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-14",
    "component": require('../../form/aselectgroup/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-12",
    "component": require('../../form/aselectgroup/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-15",
    "component": require('../../form/aswitch/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-16",
    "component": require('../../form/atimepicker/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-17",
    "component": require('../../form/atree/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-13",
    "component": require('../../form/atree/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-6",
    "component": require('../../form/atree/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo4-4",
    "component": require('../../form/atree/demo/demo4.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-18",
    "component": require('../../form/atreeselect/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-14",
    "component": require('../../form/atreeselect/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-7",
    "component": require('../../form/atreeselect/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-19",
    "component": require('../../form/aupload/demo/demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-15",
    "component": require('../../form/aupload/demo/demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-8",
    "component": require('../../form/aupload/demo/demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo4-5",
    "component": require('../../form/aupload/demo/demo4.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/forms":[{"title":"Form","path":"/forms/form","meta":{},"children":[{"path":"/forms/form/aautocomplete","title":"AAutoComplete","meta":{}},{"path":"/forms/form/acascader","title":"ACascader","meta":{}},{"path":"/forms/form/acheckboxgroup","title":"ACheckboxGroup","meta":{}},{"path":"/forms/form/adatepicker","title":"ADatePicker","meta":{}},{"path":"/forms/form/adaterangepicker","title":"ADateRangePicker","meta":{}},{"path":"/forms/form/adynamic-autocomplete","title":"ADynamicAutoComplete","meta":{}},{"path":"/forms/form/adynamic-cascader","title":"ADynamicCascader","meta":{}},{"path":"/forms/form/adynamic-select","title":"ADynamicSelect","meta":{}},{"path":"/forms/form/adynamic-selectgroup","title":"ADynamicSelectGroup","meta":{}},{"path":"/forms/form/adynamic-tree","title":"ADynamicTree","meta":{}},{"path":"/forms/form/adynamic-treeselect","title":"ADynamicTreeSelect","meta":{}},{"path":"/forms/form/ainput","title":"AInput","meta":{}},{"path":"/forms/form/aradiogroup","title":"ARadioGroup","meta":{}},{"path":"/forms/form/aselect","title":"ASelect","meta":{}},{"path":"/forms/form/aselectgroup","title":"ASelectGroup","meta":{}},{"path":"/forms/form/aswitch","title":"ASwitch","meta":{}},{"path":"/forms/form/atimepicker","title":"ATimePicker","meta":{}},{"path":"/forms/form/atree","title":"ATree","meta":{}},{"path":"/forms/form/atreeselect","title":"ATreeSelect","meta":{}},{"path":"/forms/form/aupload","title":"AUpload","meta":{}}]}],"*":[{"path":"/","title":"介绍","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"组件","path":"/forms"},{"title":"v1.x","path":"http://v1.aiolosjs.rebornauto.cn"},{"title":"GitHub","path":"https://github.com/aiolosjs/components.git"}]},"title":"aiolosjs forms","mode":"site","repoUrl":"https://github.com/aiolosjs/components"},
      ...props,
    }),
    "routes": [
      {
        "path": "/forms/form/aautocomplete",
        "component": require('../../form/aautocomplete/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/aautocomplete/index.md",
          "updatedTime": 1592449449442,
          "title": "AAutoComplete",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "AAutoComplete",
              "heading": "aautocomplete"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "自定义选项",
              "heading": "自定义选项"
            },
            {
              "depth": 3,
              "value": "自定义输入组件",
              "heading": "自定义输入组件"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "AAutoComplete"
      },
      {
        "path": "/forms/form/acascader",
        "component": require('../../form/acascader/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/acascader/index.md",
          "updatedTime": 1592447862442,
          "title": "ACascader",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ACascader",
              "heading": "acascader"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "ACascader和Form.Item 混合使用",
              "heading": "acascader和formitem-混合使用"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            },
            {
              "depth": 3,
              "value": "interface",
              "heading": "interface"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ACascader"
      },
      {
        "path": "/forms/form/acheckboxgroup",
        "component": require('../../form/acheckboxgroup/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/acheckboxgroup/index.md",
          "updatedTime": 1592447862443,
          "title": "ACheckboxGroup",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ACheckboxGroup",
              "heading": "acheckboxgroup"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "ACheckboxGroup和Form.Item 混合使用",
              "heading": "acheckboxgroup和formitem-混合使用"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            },
            {
              "depth": 3,
              "value": "interface",
              "heading": "interface"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ACheckboxGroup"
      },
      {
        "path": "/forms/form/adatepicker",
        "component": require('../../form/adatepicker/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/adatepicker/index.md",
          "updatedTime": 1592447862444,
          "title": "ADatePicker",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ADatePicker",
              "heading": "adatepicker"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "date用法",
              "heading": "date用法"
            },
            {
              "depth": 3,
              "value": "year用法",
              "heading": "year用法"
            },
            {
              "depth": 3,
              "value": "month用法",
              "heading": "month用法"
            },
            {
              "depth": 3,
              "value": "week用法",
              "heading": "week用法"
            },
            {
              "depth": 3,
              "value": "quarter用法",
              "heading": "quarter用法"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ADatePicker"
      },
      {
        "path": "/forms/form/adaterangepicker",
        "component": require('../../form/adaterangepicker/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/adaterangepicker/index.md",
          "updatedTime": 1592462780814,
          "title": "ADateRangePicker",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ADateRangePicker",
              "heading": "adaterangepicker"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "date用法",
              "heading": "date用法"
            },
            {
              "depth": 3,
              "value": "year用法",
              "heading": "year用法"
            },
            {
              "depth": 3,
              "value": "month用法",
              "heading": "month用法"
            },
            {
              "depth": 3,
              "value": "week用法",
              "heading": "week用法"
            },
            {
              "depth": 3,
              "value": "quarter用法",
              "heading": "quarter用法"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ADateRangePicker"
      },
      {
        "path": "/forms/form/adynamic-autocomplete",
        "component": require('../../form/adynamic-autocomplete/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/adynamic-autocomplete/index.md",
          "updatedTime": 1592449448558,
          "title": "ADynamicAutoComplete",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ADynamicAutoComplete",
              "heading": "adynamicautocomplete"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "自定义请求函数",
              "heading": "自定义请求函数"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            },
            {
              "depth": 3,
              "value": "interface",
              "heading": "interface"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ADynamicAutoComplete"
      },
      {
        "path": "/forms/form/adynamic-cascader",
        "component": require('../../form/adynamic-cascader/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/adynamic-cascader/index.md",
          "updatedTime": 1592449449442,
          "title": "ADynamicCascader",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ADynamicCascader",
              "heading": "adynamiccascader"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "设定初始值",
              "heading": "设定初始值"
            },
            {
              "depth": 3,
              "value": "默认初始第一列",
              "heading": "默认初始第一列"
            },
            {
              "depth": 3,
              "value": "自定义数据加载 url 和参数",
              "heading": "自定义数据加载-url-和参数"
            },
            {
              "depth": 3,
              "value": "formatter loadData",
              "heading": "formatter-loaddata"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            },
            {
              "depth": 3,
              "value": "interface",
              "heading": "interface"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ADynamicCascader"
      },
      {
        "path": "/forms/form/adynamic-select",
        "component": require('../../form/adynamic-select/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/adynamic-select/index.md",
          "updatedTime": 1592447862600,
          "title": "ADynamicSelect",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ADynamicSelect",
              "heading": "adynamicselect"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "ADynamicSelect和Form.Item 混合使用",
              "heading": "adynamicselect和formitem-混合使用"
            },
            {
              "depth": 3,
              "value": "联动用法",
              "heading": "联动用法"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ADynamicSelect"
      },
      {
        "path": "/forms/form/adynamic-selectgroup",
        "component": require('../../form/adynamic-selectgroup/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/adynamic-selectgroup/index.md",
          "updatedTime": 1592447862601,
          "title": "ADynamicSelectGroup",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "adynamic-select",
              "heading": "adynamic-select"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "ADynamicSelectGroup和Form.Item 混合使用",
              "heading": "adynamicselectgroup和formitem-混合使用"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ADynamicSelectGroup"
      },
      {
        "path": "/forms/form/adynamic-tree",
        "component": require('../../form/adynamic-tree/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/adynamic-tree/index.md",
          "updatedTime": 1592447686942,
          "title": "ADynamicTree",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ADynamicTree",
              "heading": "adynamictree"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ADynamicTree"
      },
      {
        "path": "/forms/form/adynamic-treeselect",
        "component": require('../../form/adynamic-treeselect/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/adynamic-treeselect/index.md",
          "updatedTime": 1592449449442,
          "title": "ADynamicTreeSelect",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ADynamicTreeSelect",
              "heading": "adynamictreeselect"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "自定义显示",
              "heading": "自定义显示"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ADynamicTreeSelect"
      },
      {
        "path": "/forms/form/ainput",
        "component": require('../../form/ainput/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/ainput/index.md",
          "updatedTime": 1592447862610,
          "title": "AInput",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "AInput",
              "heading": "ainput"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "AInput.Password使用",
              "heading": "ainputpassword使用"
            },
            {
              "depth": 3,
              "value": "AInput.Phone使用",
              "heading": "ainputphone使用"
            },
            {
              "depth": 3,
              "value": "AInput.Number使用",
              "heading": "ainputnumber使用"
            },
            {
              "depth": 3,
              "value": "AInput.TextArea使用",
              "heading": "ainputtextarea使用"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "AInput组件属性",
              "heading": "ainput组件属性"
            },
            {
              "depth": 3,
              "value": "AInput.Password组件属性",
              "heading": "ainputpassword组件属性"
            },
            {
              "depth": 3,
              "value": "AInput.Number组件属性",
              "heading": "ainputnumber组件属性"
            },
            {
              "depth": 3,
              "value": "AInput.TextArea组件属性",
              "heading": "ainputtextarea组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "AInput"
      },
      {
        "path": "/forms/form/aradiogroup",
        "component": require('../../form/aradiogroup/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/aradiogroup/index.md",
          "updatedTime": 1592447862602,
          "title": "ARadioGroup",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ARadioGroup",
              "heading": "aradiogroup"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            },
            {
              "depth": 3,
              "value": "interface",
              "heading": "interface"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ARadioGroup"
      },
      {
        "path": "/forms/form/aselect",
        "component": require('../../form/aselect/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/aselect/index.md",
          "updatedTime": 1592447862609,
          "title": "ASelect",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ASelect",
              "heading": "aselect"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "ASelect和Form.Item 混合使用",
              "heading": "aselect和formitem-混合使用"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ASelect"
      },
      {
        "path": "/forms/form/aselectgroup",
        "component": require('../../form/aselectgroup/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/aselectgroup/index.md",
          "updatedTime": 1592447867536,
          "title": "ASelectGroup",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ASelectGroup",
              "heading": "aselectgroup"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "ASelectGroup和Form.Item 混合使用",
              "heading": "aselectgroup和formitem-混合使用"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ASelectGroup"
      },
      {
        "path": "/forms/form/aswitch",
        "component": require('../../form/aswitch/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/aswitch/index.md",
          "updatedTime": 1592447867536,
          "title": "ASwitch",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ASwitch",
              "heading": "aswitch"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            },
            {
              "depth": 3,
              "value": "interface",
              "heading": "interface"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ASwitch"
      },
      {
        "path": "/forms/form/atimepicker",
        "component": require('../../form/atimepicker/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/atimepicker/index.md",
          "updatedTime": 1592447867536,
          "title": "ATimePicker",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ATimePicker",
              "heading": "atimepicker"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ATimePicker"
      },
      {
        "path": "/forms/form/atree",
        "component": require('../../form/atree/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/atree/index.md",
          "updatedTime": 1592447867537,
          "title": "ATree",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ATree",
              "heading": "atree"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "checkable勾选",
              "heading": "checkable勾选"
            },
            {
              "depth": 3,
              "value": "checkStrictly勾选",
              "heading": "checkstrictly勾选"
            },
            {
              "depth": 3,
              "value": "treeCheckParentStrictly勾选",
              "heading": "treecheckparentstrictly勾选"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ATree"
      },
      {
        "path": "/forms/form/atreeselect",
        "component": require('../../form/atreeselect/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/atreeselect/index.md",
          "updatedTime": 1592447867538,
          "title": "ATreeSelect",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "ATree",
              "heading": "atree"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "checkable勾选",
              "heading": "checkable勾选"
            },
            {
              "depth": 3,
              "value": "showCheckedStrategy勾选",
              "heading": "showcheckedstrategy勾选"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "ATreeSelect"
      },
      {
        "path": "/forms/form/aupload",
        "component": require('../../form/aupload/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/form/aupload/index.md",
          "updatedTime": 1592447867538,
          "title": "AUpload",
          "nav": {
            "title": "组件",
            "path": "/forms"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "AUpload",
              "heading": "aupload"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "初始化默认图片",
              "heading": "初始化默认图片"
            },
            {
              "depth": 3,
              "value": "文件上传大小和数量限制",
              "heading": "文件上传大小和数量限制"
            },
            {
              "depth": 3,
              "value": "自定义上传按钮",
              "heading": "自定义上传按钮"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "公共属性",
              "heading": "公共属性"
            },
            {
              "depth": 3,
              "value": "组件属性",
              "heading": "组件属性"
            }
          ],
          "group": {
            "path": "/forms/form",
            "title": "Form"
          }
        },
        "title": "AUpload"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1592451842512,
          "slugs": [
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 3,
              "value": "✨ 特性",
              "heading": "-特性"
            },
            {
              "depth": 3,
              "value": "📦 安装",
              "heading": "-安装"
            },
            {
              "depth": 3,
              "value": "🔨 使用",
              "heading": "-使用"
            },
            {
              "depth": 3,
              "value": "✅ License",
              "heading": "-license"
            }
          ],
          "title": "介绍"
        },
        "title": "介绍"
      },
      {
        "path": "/forms/form",
        "meta": {},
        "exact": true,
        "redirect": "/forms/form/aautocomplete"
      },
      {
        "path": "/forms",
        "meta": {},
        "exact": true,
        "redirect": "/forms/form"
      }
    ],
    "title": "aiolosjs forms"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
