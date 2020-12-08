(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    './src/form/aselectgroup/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return v;
        });
      var a = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        l = t('react'),
        r = t.n(l),
        o = t('./node_modules/@mdx-js/react/dist/esm.js'),
        s = t('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        i =
          (t('./node_modules/antd/es/form/style/index.js'),
          t('./node_modules/antd/es/form/index.js')),
        c =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        m = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        b = t('./src/form/aselectgroup/index.tsx'),
        u = [
          {
            key: 1,
            label: '\u610f\u90e8\u7fa4\u96be',
            children: [
              { key: 1e3, value: '\u6f58\u6d9b' },
              { key: 1010, value: '\u51af\u6770' },
            ],
          },
          {
            key: 2,
            label: '\u6587\u94c1\u773c\u4e1c',
            children: [{ key: 1020, value: '\u8c2d\u654f' }],
          },
          {
            key: 3,
            label: '\u624b\u9752\u987b\u4ece',
            children: [
              { key: 1060, value: '\u5f6d\u79c0\u82f1' },
              { key: 1070, value: '\u9ec4\u52c7' },
            ],
          },
        ],
        p = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
        d = { width: 260 },
        O = i.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            i.a,
            Object.assign({}, p, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(b.a, {
              name: 'class',
              label: 'ASelectGroup',
              form: n,
              rules: [{ required: !0, message: ' ASelect!' }],
              selectOptions: u,
              widgetProps: {
                style: d,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              i.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, p.wrapperCol), {}, { offset: 4 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        g =
          (t('./node_modules/antd/es/input/style/index.js'),
          t('./node_modules/antd/es/input/index.js')),
        j = [
          {
            key: 1,
            label: '\u7b49\u653f\u529b\u519c',
            children: [{ key: 1e3, value: '\u4e54\u521a' }],
          },
          {
            key: 2,
            label: '\u5bfc\u5b58\u5341\u4fbf\u9f99',
            children: [
              { key: 1060, value: '\u5362\u5a1f' },
              { key: 1070, value: '\u5eb7\u5a1f' },
            ],
          },
          {
            key: 3,
            label: '\u6c34\u8fbe\u7fa4\u5382\u6bcf',
            children: [
              { key: 1080, value: '\u4faf\u78ca' },
              { key: 1090, value: '\u80e1\u5f3a' },
            ],
          },
        ],
        f = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
        y = i.a.create()(function (e) {
          var n = e.form,
            t = n.getFieldDecorator;
          return r.a.createElement(
            i.a,
            Object.assign({}, f, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(
              i.a.Item,
              { label: 'E-mail' },
              t('email', {
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!' },
                  { required: !0, message: 'Please input your E-mail!' },
                ],
              })(r.a.createElement(g.a, null)),
            ),
            r.a.createElement(b.a, {
              name: 'demo2',
              label: 'ASelectGroup',
              form: n,
              initialValue: 1080,
              rules: [{ required: !0, message: ' ASelect!' }],
              selectOptions: j,
              widgetProps: {
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              i.a.Item,
              { label: 'name' },
              t('name', { rules: [{ required: !0, message: 'Please input name!' }] })(
                r.a.createElement(g.a, null),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, f.wrapperCol), {}, { offset: 4 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        h = {};
      function v(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object.assign({}, h, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'aselectgroup' }, 'ASelectGroup'),
          Object(o.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(o.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(o.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ASelectGroup from '..';\n\nconst selectOptions = [\n  {\n    key: 1,\n    label: '\u610f\u90e8\u7fa4\u96be',\n    children: [\n      {\n        key: 1000,\n        value: '\u6f58\u6d9b',\n      },\n      {\n        key: 1010,\n        value: '\u51af\u6770',\n      },\n    ],\n  },\n  {\n    key: 2,\n    label: '\u6587\u94c1\u773c\u4e1c',\n    children: [\n      {\n        key: 1020,\n        value: '\u8c2d\u654f',\n      },\n    ],\n  },\n  {\n    key: 3,\n    label: '\u624b\u9752\u987b\u4ece',\n    children: [\n      {\n        key: 1060,\n        value: '\u5f6d\u79c0\u82f1',\n      },\n      {\n        key: 1070,\n        value: '\u9ec4\u52c7',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 4,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ASelectGroup\n        name=\"class\"\n        label=\"ASelectGroup\"\n        form={form} // initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' ASelect!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ASelectGroup from '..';\n\nconst selectOptions = [\n  {\n    key: 1,\n    label: '\u610f\u90e8\u7fa4\u96be',\n    children: [\n      {\n        key: 1000,\n        value: '\u6f58\u6d9b',\n      },\n      {\n        key: 1010,\n        value: '\u51af\u6770',\n      },\n    ],\n  },\n  {\n    key: 2,\n    label: '\u6587\u94c1\u773c\u4e1c',\n    children: [\n      {\n        key: 1020,\n        value: '\u8c2d\u654f',\n      },\n    ],\n  },\n  {\n    key: 3,\n    label: '\u624b\u9752\u987b\u4ece',\n    children: [\n      {\n        key: 1060,\n        value: '\u5f6d\u79c0\u82f1',\n      },\n      {\n        key: 1070,\n        value: '\u9ec4\u52c7',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ASelectGroup\n        name=\"class\"\n        label=\"ASelectGroup\"\n        form={form}\n        // initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' ASelect!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(o.b)(O, { mdxType: 'Demo1' }),
          ),
          Object(o.b)(
            'h2',
            { id: 'aselect\u548cformitem-\u6df7\u5408\u4f7f\u7528' },
            'ASelect\u548cForm.Item \u6df7\u5408\u4f7f\u7528',
          ),
          Object(o.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport ASelect from '..';\n\nconst selectOptions = [\n  {\n    key: 1,\n    label: '\u7b49\u653f\u529b\u519c',\n    children: [\n      {\n        key: 1000,\n        value: '\u4e54\u521a',\n      },\n    ],\n  },\n  {\n    key: 2,\n    label: '\u5bfc\u5b58\u5341\u4fbf\u9f99',\n    children: [\n      {\n        key: 1060,\n        value: '\u5362\u5a1f',\n      },\n      {\n        key: 1070,\n        value: '\u5eb7\u5a1f',\n      },\n    ],\n  },\n  {\n    key: 3,\n    label: '\u6c34\u8fbe\u7fa4\u5382\u6bcf',\n    children: [\n      {\n        key: 1080,\n        value: '\u4faf\u78ca',\n      },\n      {\n        key: 1090,\n        value: '\u80e1\u5f3a',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 4,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const { getFieldDecorator } = form;\n\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <Form.Item label=\"E-mail\">\n        {getFieldDecorator('email', {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <ASelect\n        name=\"demo2\"\n        label=\"ASelectGroup\"\n        form={form}\n        initialValue={1080}\n        rules={[\n          {\n            required: true,\n            message: ' ASelect!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <Form.Item label=\"name\">\n        {getFieldDecorator('name', {\n          rules: [\n            {\n              required: true,\n              message: 'Please input name!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport ASelect from '..';\n\nconst selectOptions = [\n  {\n    key: 1,\n    label: '\u7b49\u653f\u529b\u519c',\n    children: [\n      {\n        key: 1000,\n        value: '\u4e54\u521a',\n      },\n    ],\n  },\n  {\n    key: 2,\n    label: '\u5bfc\u5b58\u5341\u4fbf\u9f99',\n    children: [\n      {\n        key: 1060,\n        value: '\u5362\u5a1f',\n      },\n      {\n        key: 1070,\n        value: '\u5eb7\u5a1f',\n      },\n    ],\n  },\n  {\n    key: 3,\n    label: '\u6c34\u8fbe\u7fa4\u5382\u6bcf',\n    children: [\n      {\n        key: 1080,\n        value: '\u4faf\u78ca',\n      },\n      {\n        key: 1090,\n        value: '\u80e1\u5f3a',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 16 },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const { getFieldDecorator } = form;\n\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <Form.Item label=\"E-mail\">\n        {getFieldDecorator('email', {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <ASelect\n        name=\"demo2\"\n        label=\"ASelectGroup\"\n        form={form}\n        initialValue={1080}\n        rules={[\n          {\n            required: true,\n            message: ' ASelect!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <Form.Item label=\"name\">\n        {getFieldDecorator('name', {\n          rules: [\n            {\n              required: true,\n              message: 'Please input name!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u6df7\u5408\u4f7f\u7528',
              mdxType: 'JackBox',
            },
            Object(o.b)(y, { mdxType: 'Demo2' }),
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
                  'selectOptions',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Select\u7ec4\u4ef6\u4e0b\u62c9\u9009\u9879\u503c',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'object[{key: string ',
                  '|',
                  ' number;label: string;children: SelectOptionsProps[];}]',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
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
                  'Select\u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(o.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/select-cn/#Select-props' },
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
                  'formatter',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u683c\u5f0f\u5316\u63a5\u53e3\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'function(value:any): SelectOptGroupProps[]',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
        );
      }
      v &&
        v === Object(v) &&
        Object.isExtensible(v) &&
        Object.defineProperty(v, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/aselectgroup/index.mdx' },
        }),
        (v.isMDXComponent = !0);
    },
    './src/form/aselectgroup/index.tsx': function (e, n, t) {
      'use strict';
      t('./node_modules/antd/es/form/style/index.js');
      var a = t('./node_modules/antd/es/form/index.js'),
        l = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        r = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        o =
          (t('./node_modules/antd/es/select/style/index.js'),
          t('./node_modules/antd/es/select/index.js')),
        s = t('react'),
        i = t.n(s),
        c = o.a.Option,
        m = o.a.OptGroup;
      'undefined' !== typeof SelectOptGroupProps &&
        SelectOptGroupProps &&
        SelectOptGroupProps === Object(SelectOptGroupProps) &&
        Object.isExtensible(SelectOptGroupProps) &&
        Object.defineProperty(SelectOptGroupProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'SelectOptGroupProps', filename: 'src/form/aselectgroup/index.tsx' },
        }),
        'undefined' !== typeof ASelectOptGroupProps &&
          ASelectOptGroupProps &&
          ASelectOptGroupProps === Object(ASelectOptGroupProps) &&
          Object.isExtensible(ASelectOptGroupProps) &&
          Object.defineProperty(ASelectOptGroupProps, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ASelectOptGroupProps', filename: 'src/form/aselectgroup/index.tsx' },
          });
      var b = function (e) {
        var n = e.name,
          t = e.label,
          b = e.form,
          u = e.selectOptions,
          p = e.widgetProps,
          d = e.formatter,
          O = e.formItemProps,
          g = e.rules,
          j = e.initialValue,
          f = e.fieldDecoratorOptions,
          y = void 0 === f ? {} : f,
          h = b.getFieldDecorator,
          v = Object(r.a)({ rules: g, initialValue: j }, y);
        var N = Object(s.useMemo)(
          function () {
            return (e = u), d ? d(e) : e;
            var e;
          },
          [u],
        );
        return i.a.createElement(
          a.a.Item,
          Object.assign({ label: t }, O),
          h(
            n,
            v,
          )(
            i.a.createElement(
              o.a,
              p,
              N.map(function (e) {
                return i.a.createElement(
                  m,
                  { label: e.label, key: e.key },
                  e.children.map(function (e) {
                    var n = e.key,
                      t = e.value,
                      a = e.disabled,
                      r = Object(l.a)(e, ['key', 'value', 'disabled']);
                    return i.a.createElement(
                      c,
                      Object.assign({ key: n, value: n, disabled: a }, r),
                      t,
                    );
                  }),
                );
              }),
            ),
          ),
        );
      };
      (b.defaultProps = {
        initialValue: void 0,
        selectOptions: [],
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (n.a = b),
        b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ASelectGroup', filename: 'src/form/aselectgroup/index.tsx' },
          });
    },
  },
]);
