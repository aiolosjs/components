(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    './src/form/adynamic-treeselect/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return N;
        });
      var r = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        a = t('react'),
        o = t.n(a),
        l = t('./node_modules/@mdx-js/react/dist/esm.js'),
        c = t('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        s =
          (t('./node_modules/antd/es/form/style/index.js'),
          t('./node_modules/antd/es/form/index.js')),
        i =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        m = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        u = t('./src/form/adynamic-treeselect/index.tsx'),
        d = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        b = { width: '100%' },
        p = s.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            s.a,
            Object.assign({}, d, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a, {
              name: 'name',
              label: '\u59d3\u540d',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/node',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9!' }],
              widgetProps: {
                style: b,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            o.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, d.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(i.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        f =
          (t('./node_modules/antd/es/tree-select/style/index.js'),
          t('./node_modules/antd/es/tree-select/index.js')),
        g = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        j = { width: '100%' },
        y = s.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            s.a,
            Object.assign({}, g, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a, {
              name: 'demo2',
              label: '\u59d3\u540d',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/node',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9!' }],
              initialValue: [{ value: 1 }],
              widgetProps: {
                style: j,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                treeCheckable: !0,
                showCheckedStrategy: f.a.SHOW_ALL,
                treeCheckStrictly: !0,
                treeDefaultExpandedKeys: ['1010'],
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            o.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, g.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(i.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        O = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        h = { width: '100%' },
        v = s.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            s.a,
            Object.assign({}, O, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a, {
              name: 'demo2',
              label: '\u59d3\u540d',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/node',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9!' }],
              treeCheckParentStrictly: !0,
              widgetProps: {
                style: h,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                treeCheckable: !0,
                showCheckedStrategy: f.a.SHOW_ALL,
                treeCheckStrictly: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            o.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, O.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(i.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        C =
          (t('./node_modules/antd/es/tag/style/index.js'),
          t('./node_modules/antd/es/tag/index.js')),
        S = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        F = { width: '100%' },
        w = s.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            s.a,
            Object.assign({}, S, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a, {
              name: 'demo4',
              label: '\u59d3\u540d',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/node',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9!' }],
              formatter: function (e) {
                return (
                  console.log('nodes', e),
                  e.map(function (e) {
                    var n = e.title,
                      t = Object(r.a)(e, ['title']);
                    return Object(m.a)(
                      Object(m.a)({}, t),
                      {},
                      { title: o.a.createElement(C.a, { color: 'magenta' }, n) },
                    );
                  })
                );
              },
              widgetProps: {
                style: F,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            o.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, S.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(i.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        T = {};
      function N(e) {
        var n = e.components,
          t = Object(r.a)(e, ['components']);
        return Object(l.b)(
          'wrapper',
          Object.assign({}, T, t, { components: n, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'adynamictreeselect' }, 'ADynamicTreeSelect'),
          Object(l.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(l.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(l.b)(
            c.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicTreeSelect from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicTreeSelect\n        name=\"name\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/node\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicTreeSelect from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicTreeSelect\n        name=\"name\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/node\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(p, { mdxType: 'Demo1' }),
          ),
          Object(l.b)('h3', { id: '\u53ef\u52fe\u9009' }, '\u53ef\u52fe\u9009'),
          Object(l.b)(
            c.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, TreeSelect, Button } from 'antd';\nimport ADynamicTreeSelect from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicTreeSelect\n        name=\"demo2\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/node\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9!',\n          },\n        ]}\n        initialValue={[\n          {\n            value: 1,\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          treeCheckable: true,\n          showCheckedStrategy: TreeSelect.SHOW_ALL,\n          treeCheckStrictly: true,\n          treeDefaultExpandedKeys: ['1010'],\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, TreeSelect, Button } from 'antd';\nimport ADynamicTreeSelect from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicTreeSelect\n        name=\"demo2\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/node\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9!',\n          },\n        ]}\n        initialValue={[{ value: 1 }]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          treeCheckable: true,\n          showCheckedStrategy: TreeSelect.SHOW_ALL,\n          treeCheckStrictly: true,\n          treeDefaultExpandedKeys: ['1010'],\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u4f7f\u7528\u52fe\u9009\u6846\u5b9e\u73b0\u591a\u9009\u529f\u80fd',
              mdxType: 'JackBox',
            },
            Object(l.b)(y, { mdxType: 'Demo2' }),
          ),
          Object(l.b)(
            'h3',
            { id: 'treecheckparentstrictly\u52fe\u9009' },
            'treeCheckParentStrictly\u52fe\u9009',
          ),
          Object(l.b)(
            c.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, TreeSelect, Button } from 'antd';\nimport ADynamicTreeSelect from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicTreeSelect\n        name=\"demo2\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/node\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9!',\n          },\n        ]}\n        treeCheckParentStrictly\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          treeCheckable: true,\n          showCheckedStrategy: TreeSelect.SHOW_ALL,\n          treeCheckStrictly: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, TreeSelect, Button } from 'antd';\nimport ADynamicTreeSelect from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicTreeSelect\n        name=\"demo2\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/node\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9!',\n          },\n        ]}\n        treeCheckParentStrictly\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          treeCheckable: true,\n          showCheckedStrategy: TreeSelect.SHOW_ALL,\n          treeCheckStrictly: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: 'treeCheckParentStrictly\u52fe\u9009',
              mdxType: 'JackBox',
            },
            Object(l.b)(v, { mdxType: 'Demo3' }),
          ),
          Object(l.b)(
            'h3',
            { id: '\u6570\u636e\u683c\u5f0f\u5316' },
            '\u6570\u636e\u683c\u5f0f\u5316',
          ),
          Object(l.b)(
            c.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button, Tag } from 'antd';\nimport ADynamicTreeSelect from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  function formatter(nodes) {\n    console.log('nodes', nodes);\n    return nodes.map(({ title, ...rest }) => ({\n      ...rest,\n      title: <Tag color=\"magenta\">{title}</Tag>,\n    }));\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicTreeSelect\n        name=\"demo4\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/node\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9!',\n          },\n        ]}\n        formatter={formatter}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button, Tag } from 'antd';\nimport { TreeNode } from 'antd/lib/tree-select/interface';\nimport ADynamicTreeSelect from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  function formatter(nodes: TreeNode[]) {\n    console.log('nodes', nodes);\n    return nodes.map(({ title, ...rest }) => ({\n      ...rest,\n      title: <Tag color=\"magenta\">{title}</Tag>,\n    }));\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicTreeSelect\n        name=\"demo4\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/node\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9!',\n          },\n        ]}\n        formatter={formatter}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u6570\u636e\u683c\u5f0f\u5316',
              mdxType: 'JackBox',
            },
            Object(l.b)(w, { mdxType: 'Demo4' }),
          ),
          Object(l.b)('h3', { id: '\u516c\u5171\u5c5e\u6027' }, '\u516c\u5171\u5c5e\u6027'),
          Object(l.b)(
            'table',
            null,
            Object(l.b)(
              'thead',
              { parentName: 'table' },
              Object(l.b)(
                'tr',
                { parentName: 'thead' },
                Object(l.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u53c2\u6570',
                ),
                Object(l.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u8bf4\u660e',
                ),
                Object(l.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7c7b\u578b',
                ),
                Object(l.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'required'),
              ),
            ),
            Object(l.b)(
              'tbody',
              { parentName: 'table' },
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'name'),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'form \u4e2d id',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'form'),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.create()(\u7ec4\u4ef6) \u9ad8\u9636\u5c5e\u6027',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'AntdFormItemProps',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'label'),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.Item label \u5c5e\u6027',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'string ',
                  '|',
                  ' ReactNode',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'initialValue',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u5b50\u8282\u70b9\u7684\u521d\u59cb\u503c\uff0c\u7c7b\u578b\u3001\u53ef\u9009\u503c\u5747\u7531\u5b50\u8282\u70b9\u51b3\u5b9a',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'any'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'rules'),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u6821\u9a8c\u89c4\u5219, ',
                  Object(l.b)(
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
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object[]'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'formItemProps',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.Item \u5c5e\u6027',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/form-cn/#Form.Item' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'fieldDecoratorOptions',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'getFieldDecorator options \u53c2\u6570 ',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      {
                        href:
                          'https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0%3E%3E',
                      },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
          Object(l.b)('h3', { id: '\u7ec4\u4ef6\u5c5e\u6027' }, '\u7ec4\u4ef6\u5c5e\u6027'),
          Object(l.b)(
            'table',
            null,
            Object(l.b)(
              'thead',
              { parentName: 'table' },
              Object(l.b)(
                'tr',
                { parentName: 'thead' },
                Object(l.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u53c2\u6570',
                ),
                Object(l.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u8bf4\u660e',
                ),
                Object(l.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7c7b\u578b',
                ),
                Object(l.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'required'),
              ),
            ),
            Object(l.b)(
              'tbody',
              { parentName: 'table' },
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'action'),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u63a5\u53e3\u5730\u5740,\u5982\u679c\u4e3anull \uff0c\u5219\u4e0d\u4f1a\u83b7\u53d6\u6570\u636e',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'string',
                  '|',
                  'null',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'asyncFn'),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u63a5\u53e3\u56de\u8c03\u51fd\u6570',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '(action: string)=> Promise',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
        );
      }
      N &&
        N === Object(N) &&
        Object.isExtensible(N) &&
        Object.defineProperty(N, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/adynamic-treeselect/index.mdx' },
        }),
        (N.isMDXComponent = !0);
    },
    './src/form/adynamic-treeselect/index.tsx': function (e, n, t) {
      'use strict';
      var r = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        a = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        o = t('react'),
        l = t.n(o),
        c = t('./node_modules/swr/esm/index.js'),
        s = t('./src/utils.ts'),
        i = t('./src/form/atreeselect/index.tsx');
      'undefined' !== typeof ADynamicTreeSelectProps &&
        ADynamicTreeSelectProps &&
        ADynamicTreeSelectProps === Object(ADynamicTreeSelectProps) &&
        Object.isExtensible(ADynamicTreeSelectProps) &&
        Object.defineProperty(ADynamicTreeSelectProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ADynamicTreeSelectProps',
            filename: 'src/form/adynamic-treeselect/index.tsx',
          },
        });
      var m = function (e) {
        var n = e.form,
          t = e.name,
          o = e.action,
          m = e.asyncFn,
          u = e.widgetProps,
          d = void 0 === u ? {} : u,
          b = Object(a.a)(e, ['form', 'name', 'action', 'asyncFn', 'widgetProps']),
          p = Object(c.a)(o, m || s.a),
          f = p.data,
          g = void 0 === f ? [] : f,
          j = p.isValidating;
        return l.a.createElement(
          i.a,
          Object.assign(
            { form: n, name: t, treeData: g, widgetProps: Object(r.a)({ loading: j }, d) },
            b,
          ),
        );
      };
      (m.defaultProps = {}),
        (n.a = m),
        m &&
          m === Object(m) &&
          Object.isExtensible(m) &&
          Object.defineProperty(m, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ADynamicTreeSelect',
              filename: 'src/form/adynamic-treeselect/index.tsx',
            },
          });
    },
    './src/form/atreeselect/index.tsx': function (e, n, t) {
      'use strict';
      t('./node_modules/antd/es/form/style/index.js');
      var r = t('./node_modules/antd/es/form/index.js'),
        a =
          (t('./node_modules/antd/es/tree-select/style/index.js'),
          t('./node_modules/antd/es/tree-select/index.js')),
        o = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        l = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        c = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
        ),
        s = t('react'),
        i = t.n(s);
      'undefined' !== typeof ATreeSelectProps &&
        ATreeSelectProps &&
        ATreeSelectProps === Object(ATreeSelectProps) &&
        Object.isExtensible(ATreeSelectProps) &&
        Object.defineProperty(ATreeSelectProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ATreeSelectProps', filename: 'src/form/atreeselect/index.tsx' },
        });
      var m = function (e) {
        var n = e.name,
          t = e.label,
          m = e.form,
          u = e.treeData,
          d = e.formatter,
          b = e.widgetProps,
          p = void 0 === b ? {} : b,
          f = e.formItemProps,
          g = e.rules,
          j = e.initialValue,
          y = e.treeCheckParentStrictly,
          O = void 0 !== y && y,
          h = e.fieldDecoratorOptions,
          v = void 0 === h ? {} : h,
          C = m.getFieldDecorator,
          S = Object(l.a)(
            {
              rules: g,
              initialValue: j,
              getValueFromEvent: function (e, n, t) {
                if (Array.isArray(e)) {
                  if (O && F) {
                    var r = t.triggerNode,
                      a = t.checked;
                    if (r) {
                      var o = (function e(n) {
                        return n.reduce(function (n, t) {
                          var r = t.props,
                            a = r.title,
                            o = r.value,
                            l = r.disabled,
                            s = r.children;
                          return (
                            l || n.push({ label: a, value: o }),
                            s ? [].concat(Object(c.a)(n), Object(c.a)(e(s))) : n
                          );
                        }, []);
                      })(r.props.children);
                      return a
                        ? ((s = [].concat(Object(c.a)(e), Object(c.a)(o))),
                          (i = 'value'),
                          s.filter(function (e, n, t) {
                            return (
                              t
                                .map(function (e) {
                                  return e[i];
                                })
                                .indexOf(e[i]) === n
                            );
                          }))
                        : ((l = e),
                          o.reduce(function (e, n) {
                            return e.filter(function (e) {
                              return e.value !== n.value;
                            });
                          }, l));
                    }
                    return e;
                  }
                  return e;
                }
                var l;
                var s, i;
                return e;
              },
            },
            v,
          ),
          F = p.treeCheckStrictly,
          w = Object(o.a)(p, ['treeCheckStrictly']);
        var T = Object(s.useMemo)(
          function () {
            return (e = u), d ? d(e) : e;
            var e;
          },
          [u],
        );
        return i.a.createElement(
          r.a.Item,
          Object.assign({ label: t }, f),
          C(n, S)(i.a.createElement(a.a, Object.assign({ treeData: T, treeCheckStrictly: F }, w))),
        );
      };
      (m.defaultProps = {
        initialValue: void 0,
        treeData: [],
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (n.a = m),
        m &&
          m === Object(m) &&
          Object.isExtensible(m) &&
          Object.defineProperty(m, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ATreeSelect', filename: 'src/form/atreeselect/index.tsx' },
          });
    },
    './src/utils.ts': function (e, n, t) {
      'use strict';
      t.d(n, 'a', function () {
        return a;
      });
      var r = t('./node_modules/umi-request/dist/index.es.js'),
        a = function (e) {
          return r.a.get(e).then(function (e) {
            return e.body;
          });
        };
      'undefined' !== typeof a &&
        a &&
        a === Object(a) &&
        Object.isExtensible(a) &&
        Object.defineProperty(a, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'fetch', filename: 'src/utils.ts' },
        });
    },
  },
]);
