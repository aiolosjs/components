(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    './src/form/atreeselect/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return D;
        });
      var l = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        a = t('react'),
        r = t.n(a),
        o = t('./node_modules/@mdx-js/react/dist/esm.js'),
        i = t('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        d =
          (t('./node_modules/antd/es/form/style/index.js'),
          t('./node_modules/antd/es/form/index.js')),
        s =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        c = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        m = t('./src/form/atreeselect/index.tsx'),
        u = [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              { title: 'Child Node1', value: '0-0-0', key: '0-0-0' },
              { title: 'Child Node2', value: '0-0-1', key: '0-0-1' },
              { title: 'Child Node2', value: '0-0-2', key: '0-0-2' },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
              { title: 'Child Node3', value: '0-1-0', key: '0-1-0' },
              { title: 'Child Node4', value: '0-1-1', key: '0-1-1' },
              { title: 'Child Node5', value: '0-1-2', key: '0-1-2' },
            ],
          },
        ],
        b = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        p = { width: '100%' },
        h = d.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            d.a,
            Object.assign({}, b, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(m.a, {
              name: 'demo1',
              label: '\u8282\u70b9',
              form: n,
              rules: [{ required: !0, message: ' ATreeSelect!' }],
              treeData: u,
              widgetProps: {
                style: p,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              d.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, b.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(s.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        f = [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              { title: 'Child Node1', value: '0-0-0', key: '0-0-0' },
              { title: 'Child Node2', value: '0-0-1', key: '0-0-1', disabled: !0 },
              { title: 'Child Node2', value: '0-0-2', key: '0-0-2' },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
              { title: 'Child Node3', value: '0-1-0', key: '0-1-0' },
              { title: 'Child Node4', value: '0-1-1', key: '0-1-1' },
              { title: 'Child Node5', value: '0-1-2', key: '0-1-2' },
            ],
          },
        ],
        y = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        g = { width: '100%' },
        C = d.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            d.a,
            Object.assign({}, y, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(m.a, {
              name: 'demo2',
              label: '\u8282\u70b9',
              form: n,
              rules: [{ required: !0, message: ' ATreeSelect!' }],
              treeData: f,
              widgetProps: {
                style: g,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                searchPlaceholder: 'Please select',
                treeCheckable: !0,
                treeCheckStrictly: !0,
                onChange: function (e, n) {},
              },
            }),
            r.a.createElement(
              d.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, y.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(s.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        j = [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              { title: 'Child Node1', value: '0-0-0', key: '0-0-0' },
              { title: 'Child Node2', value: '0-0-1', key: '0-0-1', disabled: !0 },
              { title: 'Child Node2', value: '0-0-2', key: '0-0-2' },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
              { title: 'Child Node3', value: '0-1-0', key: '0-1-0' },
              { title: 'Child Node4', value: '0-1-1', key: '0-1-1' },
              { title: 'Child Node5', value: '0-1-2', key: '0-1-2' },
            ],
          },
        ],
        v = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        O = { width: '100%' },
        N = d.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            d.a,
            Object.assign({}, v, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(m.a, {
              name: 'demo3',
              label: '\u8282\u70b9',
              form: n,
              rules: [{ required: !0, message: ' ATreeSelect!' }],
              treeData: j,
              treeCheckParentStrictly: !0,
              widgetProps: {
                style: O,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                searchPlaceholder: 'Please select',
                treeCheckable: !0,
                treeCheckStrictly: !0,
                onChange: function (e, n) {},
              },
            }),
            r.a.createElement(
              d.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, v.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(s.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        k =
          (t('./node_modules/antd/es/tree-select/style/index.js'),
          t('./node_modules/antd/es/tree-select/index.js')),
        S = [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              { title: 'Child Node1', value: '0-0-0', key: '0-0-0' },
              { title: 'Child Node2', value: '0-0-1', key: '0-0-1', disabled: !0 },
              { title: 'Child Node2', value: '0-0-2', key: '0-0-2' },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
              { title: 'Child Node3', value: '0-1-0', key: '0-1-0' },
              { title: 'Child Node4', value: '0-1-1', key: '0-1-1' },
              { title: 'Child Node5', value: '0-1-2', key: '0-1-2' },
            ],
          },
        ],
        F = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        w = { width: '100%' },
        T = d.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            d.a,
            Object.assign({}, F, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(m.a, {
              name: 'demo4',
              label: '\u8282\u70b9',
              form: n,
              rules: [{ required: !0, message: ' ATreeSelect!' }],
              treeData: S,
              widgetProps: {
                style: w,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                searchPlaceholder: 'Please select',
                treeCheckable: !0,
                showCheckedStrategy: k.a.SHOW_ALL,
                onChange: function (e, n) {},
              },
            }),
            r.a.createElement(
              d.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, F.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(s.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        P = {};
      function D(e) {
        var n = e.components,
          t = Object(l.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object.assign({}, P, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'atreeselect' }, 'ATreeSelect'),
          Object(o.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(o.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(o.b)(
            i.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ATreeSelect from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATreeSelect\n        name=\"demo1\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATreeSelect!',\n          },\n        ]}\n        treeData={treeData}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Tag, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ATreeSelect from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATreeSelect\n        name=\"demo1\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATreeSelect!',\n          },\n        ]}\n        treeData={treeData}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(o.b)(h, { mdxType: 'Demo1' }),
          ),
          Object(o.b)('h3', { id: '\u53ef\u52fe\u9009' }, '\u53ef\u52fe\u9009'),
          Object(o.b)(
            i.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ATreeSelect from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATreeSelect\n        name=\"demo2\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATreeSelect!',\n          },\n        ]}\n        treeData={treeData}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          searchPlaceholder: 'Please select',\n          treeCheckable: true,\n          treeCheckStrictly: true,\n          // showCheckedStrategy: TreeSelect.SHOW_ALL,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Tag, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ATreeSelect from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATreeSelect\n        name=\"demo2\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATreeSelect!',\n          },\n        ]}\n        treeData={treeData}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          searchPlaceholder: 'Please select',\n          treeCheckable: true,\n          treeCheckStrictly: true,\n          // showCheckedStrategy: TreeSelect.SHOW_ALL,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u4f7f\u7528\u52fe\u9009\u6846\u5b9e\u73b0\u591a\u9009\u529f\u80fd',
              mdxType: 'JackBox',
            },
            Object(o.b)(C, { mdxType: 'Demo2' }),
          ),
          Object(o.b)(
            'h3',
            { id: 'treecheckparentstrictly\u52fe\u9009' },
            'treeCheckParentStrictly\u52fe\u9009',
          ),
          Object(o.b)(
            i.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ATreeSelect from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATreeSelect\n        name=\"demo3\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATreeSelect!',\n          },\n        ]}\n        treeData={treeData}\n        treeCheckParentStrictly\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          searchPlaceholder: 'Please select',\n          treeCheckable: true,\n          treeCheckStrictly: true,\n          // showCheckedStrategy: TreeSelect.SHOW_ALL,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Tag, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ATreeSelect from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATreeSelect\n        name=\"demo3\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATreeSelect!',\n          },\n        ]}\n        treeData={treeData}\n        treeCheckParentStrictly\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          searchPlaceholder: 'Please select',\n          treeCheckable: true,\n          treeCheckStrictly: true,\n          // showCheckedStrategy: TreeSelect.SHOW_ALL,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName:
                '\u4f7f\u7528treeCheckParentStrictly\u52fe\u9009\u6846\u5b9e\u73b0\u591a\u9009\u529f\u80fd',
              mdxType: 'JackBox',
            },
            Object(o.b)(N, { mdxType: 'Demo3' }),
          ),
          Object(o.b)(
            'h3',
            { id: 'showcheckedstrategy\u4e3ashow_all\u52fe\u9009' },
            'showCheckedStrategy\u4e3aSHOW_ALL\u52fe\u9009',
          ),
          Object(o.b)(
            i.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, TreeSelect, Button } from 'antd';\nimport ATreeSelect from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATreeSelect\n        name=\"demo4\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATreeSelect!',\n          },\n        ]}\n        treeData={treeData}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          searchPlaceholder: 'Please select',\n          treeCheckable: true,\n          showCheckedStrategy: TreeSelect.SHOW_ALL,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, TreeSelect, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ATreeSelect from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATreeSelect\n        name=\"demo4\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATreeSelect!',\n          },\n        ]}\n        treeData={treeData}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          searchPlaceholder: 'Please select',\n          treeCheckable: true,\n          showCheckedStrategy: TreeSelect.SHOW_ALL,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName:
                '\u4f7f\u7528treeCheckParentStrictly\u52fe\u9009\u6846\u5b9e\u73b0\u591a\u9009\u529f\u80fd',
              mdxType: 'JackBox',
            },
            Object(o.b)(T, { mdxType: 'Demo4' }),
          ),
          Object(o.b)('h3', { id: '\u516c\u5171\u5c5e\u6027' }, '\u516c\u5171\u5c5e\u6027'),
          Object(o.b)(
            'table',
            null,
            Object(o.b)(
              'thead',
              { parentName: 'table' },
              Object(o.b)(
                'tr',
                { parentName: 'thead' },
                Object(o.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u53c2\u6570',
                ),
                Object(o.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u8bf4\u660e',
                ),
                Object(o.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7c7b\u578b',
                ),
                Object(o.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'required'),
              ),
            ),
            Object(o.b)(
              'tbody',
              { parentName: 'table' },
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'name'),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'form \u4e2d id',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'form'),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.create()(\u7ec4\u4ef6) \u9ad8\u9636\u5c5e\u6027',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'AntdFormItemProps',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'label'),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.Item label \u5c5e\u6027',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'string ',
                  '|',
                  ' ReactNode',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'initialValue',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u5b50\u8282\u70b9\u7684\u521d\u59cb\u503c\uff0c\u7c7b\u578b\u3001\u53ef\u9009\u503c\u5747\u7531\u5b50\u8282\u70b9\u51b3\u5b9a',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'any'),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'rules'),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u6821\u9a8c\u89c4\u5219, ',
                  Object(o.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      {
                        href:
                          'https://ant.design/components/form-cn/#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99',
                      },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object[]'),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'formItemProps',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.Item \u5c5e\u6027',
                  Object(o.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/form-cn/#Form.Item' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'fieldDecoratorOptions',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'getFieldDecorator options \u53c2\u6570 ',
                  Object(o.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      {
                        href:
                          'https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0%3E',
                      },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
          Object(o.b)('h3', { id: '\u7ec4\u4ef6\u5c5e\u6027' }, '\u7ec4\u4ef6\u5c5e\u6027'),
          Object(o.b)(
            'table',
            null,
            Object(o.b)(
              'thead',
              { parentName: 'table' },
              Object(o.b)(
                'tr',
                { parentName: 'thead' },
                Object(o.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u53c2\u6570',
                ),
                Object(o.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u8bf4\u660e',
                ),
                Object(o.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7c7b\u578b',
                ),
                Object(o.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'required'),
              ),
            ),
            Object(o.b)(
              'tbody',
              { parentName: 'table' },
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'widgetProps',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'treeData\u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(o.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/tree-select-cn/#Tree-props' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'treeCheckParentStrictly',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'treeCheckStrictly\u4e3atrue,\u60f3\u901a\u8fc7\u7236\u8282\u70b9\u63a7\u5236\u5b50\u8282\u70b9\u7684\u5168\u9009\u548c\u53d6\u6d88\uff0c\u5e76\u4e14\u7236\u5b50\u8282\u70b9\u9009\u4e2d\u72b6\u6001\u4e0d\u4f1a\u5173\u8054',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'boolean'),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'formatter',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u6307\u5b9a\u8f93\u5165\u6846\u5c55\u793a\u503c\u7684\u683c\u5f0f',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'function(nodes:TreeNode[]): TreeNode[]',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'treeData'),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'treeData\u7ec4\u4ef6\u4e0b\u62c9\u9009\u9879\u503c',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'array<{value, title, children, ',
                  '[disabled, disableCheckbox, checkable]',
                  '}>',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
            ),
          ),
        );
      }
      D &&
        D === Object(D) &&
        Object.isExtensible(D) &&
        Object.defineProperty(D, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/atreeselect/index.mdx' },
        }),
        (D.isMDXComponent = !0);
    },
    './src/form/atreeselect/index.tsx': function (e, n, t) {
      'use strict';
      t('./node_modules/antd/es/form/style/index.js');
      var l = t('./node_modules/antd/es/form/index.js'),
        a =
          (t('./node_modules/antd/es/tree-select/style/index.js'),
          t('./node_modules/antd/es/tree-select/index.js')),
        r = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        o = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        i = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
        ),
        d = t('react'),
        s = t.n(d);
      'undefined' !== typeof ATreeSelectProps &&
        ATreeSelectProps &&
        ATreeSelectProps === Object(ATreeSelectProps) &&
        Object.isExtensible(ATreeSelectProps) &&
        Object.defineProperty(ATreeSelectProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ATreeSelectProps', filename: 'src/form/atreeselect/index.tsx' },
        });
      var c = function (e) {
        var n = e.name,
          t = e.label,
          c = e.form,
          m = e.treeData,
          u = e.formatter,
          b = e.widgetProps,
          p = void 0 === b ? {} : b,
          h = e.formItemProps,
          f = e.rules,
          y = e.initialValue,
          g = e.treeCheckParentStrictly,
          C = void 0 !== g && g,
          j = e.fieldDecoratorOptions,
          v = void 0 === j ? {} : j,
          O = c.getFieldDecorator,
          N = Object(o.a)(
            {
              rules: f,
              initialValue: y,
              getValueFromEvent: function (e, n, t) {
                if (Array.isArray(e)) {
                  if (C && k) {
                    var l = t.triggerNode,
                      a = t.checked;
                    if (l) {
                      var r = (function e(n) {
                        return n.reduce(function (n, t) {
                          var l = t.props,
                            a = l.title,
                            r = l.value,
                            o = l.disabled,
                            d = l.children;
                          return (
                            o || n.push({ label: a, value: r }),
                            d ? [].concat(Object(i.a)(n), Object(i.a)(e(d))) : n
                          );
                        }, []);
                      })(l.props.children);
                      return a
                        ? ((d = [].concat(Object(i.a)(e), Object(i.a)(r))),
                          (s = 'value'),
                          d.filter(function (e, n, t) {
                            return (
                              t
                                .map(function (e) {
                                  return e[s];
                                })
                                .indexOf(e[s]) === n
                            );
                          }))
                        : ((o = e),
                          r.reduce(function (e, n) {
                            return e.filter(function (e) {
                              return e.value !== n.value;
                            });
                          }, o));
                    }
                    return e;
                  }
                  return e;
                }
                var o;
                var d, s;
                return e;
              },
            },
            v,
          ),
          k = p.treeCheckStrictly,
          S = Object(r.a)(p, ['treeCheckStrictly']);
        var F = Object(d.useMemo)(
          function () {
            return (e = m), u ? u(e) : e;
            var e;
          },
          [m],
        );
        return s.a.createElement(
          l.a.Item,
          Object.assign({ label: t }, h),
          O(n, N)(s.a.createElement(a.a, Object.assign({ treeData: F, treeCheckStrictly: k }, S))),
        );
      };
      (c.defaultProps = {
        initialValue: void 0,
        treeData: [],
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (n.a = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ATreeSelect', filename: 'src/form/atreeselect/index.tsx' },
          });
    },
  },
]);
