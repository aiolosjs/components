(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './src/form/acascader/index.mdx': function (e, n, a) {
      'use strict';
      a.r(n),
        a.d(n, 'default', function () {
          return C;
        });
      var t = a(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        l = a('react'),
        r = a.n(l),
        o = a('./node_modules/@mdx-js/react/dist/esm.js'),
        s = a('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        i =
          (a('./node_modules/antd/es/form/style/index.js'),
          a('./node_modules/antd/es/form/index.js')),
        c =
          (a('./node_modules/antd/es/button/style/index.js'),
          a('./node_modules/antd/es/button/index.js')),
        m = a(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        b = a('./src/form/acascader/index.tsx'),
        u = [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{ value: 'xihu', label: 'West Lake' }],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
              },
            ],
          },
        ],
        d = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        p = { width: 260 },
        g = i.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            i.a,
            Object.assign({}, d, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(b.a, {
              name: 'demo1',
              label: '\u5730\u5740',
              form: n,
              rules: [{ required: !0, message: ' ACascader!' }],
              selectOptions: u,
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
              i.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, d.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        j =
          (a('./node_modules/antd/es/input/style/index.js'),
          a('./node_modules/antd/es/input/index.js')),
        O = [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{ value: 'xihu', label: 'West Lake' }],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
              },
            ],
          },
        ],
        h = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        f = { width: 260 },
        v = i.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            i.a,
            Object.assign({}, h, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(b.a, {
              name: 'demo2',
              label: '\u5730\u5740',
              form: n,
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ required: !0, message: ' ACascader!' }],
              selectOptions: O,
              widgetProps: {
                style: f,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              i.a.Item,
              { label: 'E-mail' },
              n.getFieldDecorator('email', {
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!' },
                  { required: !0, message: 'Please input your E-mail!' },
                ],
              })(r.a.createElement(j.a, { style: f })),
            ),
            r.a.createElement(
              i.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, h.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        y = {};
      function C(e) {
        var n = e.components,
          a = Object(t.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object.assign({}, y, a, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'acascader' }, 'ACascader'),
          Object(o.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(o.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(o.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ACascader from '..';\n\nconst selectOptions = [\n  {\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [\n      {\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [\n          {\n            value: 'xihu',\n            label: 'West Lake',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [\n      {\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [\n          {\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n          },\n        ],\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ACascader\n        name=\"demo1\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ACascader!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ACascader from '..';\n\nconst selectOptions = [\n  {\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [\n      {\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [\n          {\n            value: 'xihu',\n            label: 'West Lake',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [\n      {\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [\n          {\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n          },\n        ],\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ACascader\n        name=\"demo1\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ACascader!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(o.b)(g, { mdxType: 'Demo1' }),
          ),
          Object(o.b)(
            'h2',
            { id: 'acascader\u548cformitem-\u6df7\u5408\u4f7f\u7528' },
            'ACascader\u548cForm.Item \u6df7\u5408\u4f7f\u7528',
          ),
          Object(o.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport ACascader from '..';\n\nconst selectOptions = [\n  {\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [\n      {\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [\n          {\n            value: 'xihu',\n            label: 'West Lake',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [\n      {\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [\n          {\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n          },\n        ],\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ACascader\n        name=\"demo2\"\n        label=\"\u5730\u5740\"\n        form={form}\n        initialValue={['zhejiang', 'hangzhou', 'xihu']}\n        rules={[\n          {\n            required: true,\n            message: ' ACascader!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <Form.Item label=\"E-mail\">\n        {form.getFieldDecorator('email', {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        })(<Input style={styles} />)}\n      </Form.Item>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ACascader from '..';\n\nconst selectOptions = [\n  {\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [\n      {\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [\n          {\n            value: 'xihu',\n            label: 'West Lake',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [\n      {\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [\n          {\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n          },\n        ],\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ACascader\n        name=\"demo2\"\n        label=\"\u5730\u5740\"\n        form={form}\n        initialValue={['zhejiang', 'hangzhou', 'xihu']}\n        rules={[\n          {\n            required: true,\n            message: ' ACascader!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <Form.Item label=\"E-mail\">\n        {form.getFieldDecorator('email', {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        })(<Input style={styles} />)}\n      </Form.Item>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u6df7\u5408\u4f7f\u7528',
              mdxType: 'JackBox',
            },
            Object(o.b)(v, { mdxType: 'Demo2' }),
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
                  'Cascader\u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(o.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/cascader-cn/#API' },
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
                  'selectOptions',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Cascader\u7ec4\u4ef6\u4e0b\u62c9\u9009\u9879\u503c',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'CascaderOptionType[]',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
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
                  '\u683c\u5f0f\u5316\u6570\u636e\u683c\u5f0f',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'function(value: CascaderOptionType[]): CascaderOptionType[]',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
        );
      }
      C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/acascader/index.mdx' },
        }),
        (C.isMDXComponent = !0);
    },
    './src/form/acascader/index.tsx': function (e, n, a) {
      'use strict';
      a('./node_modules/antd/es/form/style/index.js');
      var t = a('./node_modules/antd/es/form/index.js'),
        l =
          (a('./node_modules/antd/es/cascader/style/index.js'),
          a('./node_modules/antd/es/cascader/index.js')),
        r = a(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        o = a('react'),
        s = a.n(o);
      'undefined' !== typeof ACascaderProps &&
        ACascaderProps &&
        ACascaderProps === Object(ACascaderProps) &&
        Object.isExtensible(ACascaderProps) &&
        Object.defineProperty(ACascaderProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ACascaderProps', filename: 'src/form/acascader/index.tsx' },
        });
      var i = function (e) {
        var n = e.name,
          a = e.label,
          i = e.form,
          c = e.selectOptions,
          m = e.widgetProps,
          b = e.formatter,
          u = e.formItemProps,
          d = e.rules,
          p = e.initialValue,
          g = e.fieldDecoratorOptions,
          j = void 0 === g ? {} : g,
          O = i.getFieldDecorator,
          h = Object(r.a)({ rules: d, initialValue: p }, j);
        var f = Object(o.useMemo)(
          function () {
            return (e = c), b ? b(e) : e;
            var e;
          },
          [c],
        );
        return s.a.createElement(
          t.a.Item,
          Object.assign({ label: a }, u),
          O(n, h)(s.a.createElement(l.a, Object.assign({ options: f }, m))),
        );
      };
      (i.defaultProps = {
        initialValue: void 0,
        selectOptions: [],
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (n.a = i),
        i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ACascader', filename: 'src/form/acascader/index.tsx' },
          });
    },
  },
]);
