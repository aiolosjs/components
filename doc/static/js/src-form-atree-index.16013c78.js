(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    './src/form/atree/index.mdx': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return N;
        });
      var a = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        r = n('react'),
        l = n.n(r),
        o = n('./node_modules/@mdx-js/react/dist/esm.js'),
        i = n('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        d =
          (n('./node_modules/antd/es/form/style/index.js'),
          n('./node_modules/antd/es/form/index.js')),
        s =
          (n('./node_modules/antd/es/button/style/index.js'),
          n('./node_modules/antd/es/button/index.js')),
        c = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        b = n('./src/form/atree/index.tsx'),
        m = [
          {
            title: 'Node1',
            key: '0-0',
            children: [
              { title: 'Child Node1', key: '0-0-0' },
              { title: 'Child Node2', key: '0-0-1', disabled: !0 },
              {
                title: 'Child Node2',
                key: '0-0-2',
                children: [
                  { title: 'Child Node2-1', key: '0-0-2-1' },
                  { title: 'Child Node2-2', key: '0-0-2-2' },
                ],
              },
            ],
          },
          {
            title: 'Node2',
            key: '0-1',
            children: [
              { title: 'Child Node3', key: '0-1-0' },
              { title: 'Child Node4', key: '0-1-1' },
              { title: 'Child Node5', key: '0-1-2' },
            ],
          },
        ],
        u = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        p = { width: '100%' },
        j = d.a.create()(function (e) {
          var t = e.form;
          return l.a.createElement(
            d.a,
            Object.assign({}, u, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            l.a.createElement(b.a, {
              name: 'demo2',
              label: '\u8282\u70b9',
              form: t,
              rules: [{ required: !0, message: ' ATree!' }],
              treeData: m,
              initialValue: ['0-0-0'],
              widgetProps: { style: p, checkable: !0 },
            }),
            l.a.createElement(
              d.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, u.wrapperCol), {}, { offset: 2 }) },
              l.a.createElement(s.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        h = [
          {
            title: 'Node1',
            key: '0-0',
            children: [
              { title: 'Child Node1', key: '0-0-0' },
              { title: 'Child Node2', value: '0-0-1', key: '0-0-1', disabled: !0 },
              {
                title: 'Child Node2',
                key: '0-0-2',
                children: [
                  { title: 'Child Node2-1', key: '0-0-2-1' },
                  { title: 'Child Node2-2', key: '0-0-2-2' },
                ],
              },
            ],
          },
          {
            title: 'Node2',
            key: '0-1',
            children: [
              { title: 'Child Node3', key: '0-1-0' },
              { title: 'Child Node4', key: '0-1-1' },
              { title: 'Child Node5', key: '0-1-2' },
            ],
          },
        ],
        O = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        g = { width: '100%' },
        f = d.a.create()(function (e) {
          var t = e.form;
          return l.a.createElement(
            d.a,
            Object.assign({}, O, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            l.a.createElement(b.a, {
              name: 'demo3',
              label: '\u8282\u70b9',
              form: t,
              rules: [{ required: !0, message: ' ATree!' }],
              treeData: h,
              initialValue: ['0-0-0'],
              treeCheckParentStrictly: !0,
              widgetProps: { style: g, checkable: !0, checkStrictly: !0, selectable: !1 },
            }),
            l.a.createElement(
              d.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, O.wrapperCol), {}, { offset: 2 }) },
              l.a.createElement(s.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        y = {};
      function N(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object.assign({}, y, n, { components: t, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'atree' }, 'ATree'),
          Object(o.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(o.b)('h3', { id: '\u53ef\u52fe\u9009' }, '\u53ef\u52fe\u9009'),
          Object(o.b)(
            i.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ATree from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-2',\n        children: [\n          {\n            title: 'Child Node2-1',\n            key: '0-0-2-1',\n          },\n          {\n            title: 'Child Node2-2',\n            key: '0-0-2-2',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATree\n        name=\"demo2\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        treeData={treeData}\n        initialValue={['0-0-0']}\n        widgetProps={{\n          style: styles,\n          checkable: true, // autoExpandParent:true,\n          // checkStrictly:true\n          // checkStrictly:true,\n          // showCheckedStrategy: TreeSelect.SHOW_ALL,\n          // onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Tag, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ATree from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-2',\n        children: [\n          {\n            title: 'Child Node2-1',\n            key: '0-0-2-1',\n          },\n          {\n            title: 'Child Node2-2',\n            key: '0-0-2-2',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATree\n        name=\"demo2\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        treeData={treeData}\n        initialValue={['0-0-0']}\n        widgetProps={{\n          style: styles,\n          checkable: true,\n          // autoExpandParent:true,\n          // checkStrictly:true\n          // checkStrictly:true,\n          // showCheckedStrategy: TreeSelect.SHOW_ALL,\n          // onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u4f7f\u7528\u52fe\u9009\u6846\u5b9e\u73b0\u591a\u9009\u529f\u80fd',
              mdxType: 'JackBox',
            },
            Object(o.b)(j, { mdxType: 'Demo1' }),
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
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ATree from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-2',\n        children: [\n          {\n            title: 'Child Node2-1',\n            key: '0-0-2-1',\n          },\n          {\n            title: 'Child Node2-2',\n            key: '0-0-2-2',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATree\n        name=\"demo3\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        treeData={treeData}\n        initialValue={['0-0-0']}\n        treeCheckParentStrictly\n        widgetProps={{\n          style: styles,\n          checkable: true,\n          checkStrictly: true,\n          selectable: false,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Tag, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ATree from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-1',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-2',\n        children: [\n          {\n            title: 'Child Node2-1',\n            key: '0-0-2-1',\n          },\n          {\n            title: 'Child Node2-2',\n            key: '0-0-2-2',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATree\n        name=\"demo3\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        treeData={treeData}\n        initialValue={['0-0-0']}\n        treeCheckParentStrictly\n        widgetProps={{\n          style: styles,\n          checkable: true,\n          checkStrictly: true,\n          selectable: false,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName:
                '\u4f7f\u7528treeCheckParentStrictly\u52fe\u9009\u6846\u5b9e\u73b0\u591a\u9009\u529f\u80fd',
              mdxType: 'JackBox',
            },
            Object(o.b)(f, { mdxType: 'Demo2' }),
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
      N &&
        N === Object(N) &&
        Object.isExtensible(N) &&
        Object.defineProperty(N, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/atree/index.mdx' },
        }),
        (N.isMDXComponent = !0);
    },
    './src/form/atree/index.tsx': function (e, t, n) {
      'use strict';
      n('./node_modules/antd/es/form/style/index.js');
      var a = n('./node_modules/antd/es/form/index.js'),
        r =
          (n('./node_modules/antd/es/tree/style/index.js'),
          n('./node_modules/antd/es/tree/index.js')),
        l = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        o = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        i = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        d = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
        ),
        s = n('react'),
        c = n.n(s);
      'undefined' !== typeof ATreeProps &&
        ATreeProps &&
        ATreeProps === Object(ATreeProps) &&
        Object.isExtensible(ATreeProps) &&
        Object.defineProperty(ATreeProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ATreeProps', filename: 'src/form/atree/index.tsx' },
        });
      var b = function (e) {
        var t = e.name,
          n = e.label,
          b = e.form,
          m = e.treeData,
          u = e.formatter,
          p = e.widgetProps,
          j = void 0 === p ? {} : p,
          h = e.formItemProps,
          O = e.rules,
          g = e.initialValue,
          f = void 0 === g ? [] : g,
          y = e.treeCheckParentStrictly,
          N = e.fieldDecoratorOptions,
          C = void 0 === N ? {} : N,
          k = b.getFieldDecorator,
          v = Object(i.a)(
            {
              rules: O,
              initialValue: f,
              valuePropName: 'checked',
              validateTrigger: 'onCheck',
              getValueFromEvent: function (e, t) {
                if (!Array.isArray(e)) {
                  if (y && x) {
                    var n = t.node,
                      a = t.checked,
                      r = (function e(t) {
                        return t.reduce(function (t, n) {
                          var a = n.key,
                            r = n.props,
                            l = r.children;
                          return (
                            r.disabled || t.push(a),
                            l ? [].concat(Object(d.a)(t), Object(d.a)(e(l))) : t
                          );
                        }, []);
                      })(n.props.children);
                    if (a) {
                      var l = []
                        .concat(Object(d.a)(e.checked), Object(d.a)(r))
                        .filter(function (e, t, n) {
                          return (
                            n
                              .map(function (e) {
                                return e;
                              })
                              .indexOf(e) === t
                          );
                        });
                      return w(l), l;
                    }
                    var o =
                      ((i = e.checked),
                      r.reduce(function (e, t) {
                        return e.filter(function (e) {
                          return e !== t;
                        });
                      }, i));
                    return w(o), o;
                  }
                  return w(e), e.checked;
                }
                var i;
                return w(e), e;
              },
            },
            C,
          ),
          F = Object(s.useState)(f),
          S = Object(o.a)(F, 2),
          T = S[0],
          w = S[1],
          x = j.checkStrictly,
          P = Object(l.a)(j, ['checkStrictly']);
        var D = Object(s.useMemo)(
          function () {
            return (e = m), u ? u(e) : e;
            var e;
          },
          [m],
        );
        return c.a.createElement(
          a.a.Item,
          Object.assign({ label: n }, h),
          k(
            t,
            v,
          )(
            c.a.createElement(
              r.a,
              Object.assign(
                {
                  treeData: D,
                  defaultExpandedKeys: f,
                  checkedKeys: T,
                  checkStrictly: x,
                  selectable: !1,
                },
                P,
              ),
            ),
          ),
        );
      };
      (b.defaultProps = {
        initialValue: void 0,
        treeData: [],
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (t.a = b),
        b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ATree', filename: 'src/form/atree/index.tsx' },
          });
    },
  },
]);
