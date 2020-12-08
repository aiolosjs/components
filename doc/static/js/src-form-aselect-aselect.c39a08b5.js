(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    './src/form/aselect/aselect.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return h;
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
        m =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        c = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        b = t('./src/form/aselect/index.tsx'),
        u = [
          { key: 1, value: '\u9093\u8273', age: 25 },
          { key: 2, value: '\u9f99\u82b3', disabled: !0, age: 24 },
          { key: 3, value: '\u4e54\u660e', age: 25 },
        ],
        d = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        p = { width: 120 },
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
              name: 'demo2',
              label: 'ASelect',
              form: n,
              initialValue: 3,
              rules: [{ required: !0, message: ' ASelect!' }],
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
              { wrapperCol: Object(c.a)(Object(c.a)({}, d.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        j =
          (t('./node_modules/antd/es/input/style/index.js'),
          t('./node_modules/antd/es/input/index.js')),
        O = [
          { key: 1, value: '\u9093\u8273', age: 25 },
          { key: 2, value: '\u9f99\u82b3', disabled: !0, age: 24 },
          { key: 3, value: '\u4e54\u660e', age: 25 },
        ],
        f = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
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
              })(r.a.createElement(j.a, null)),
            ),
            r.a.createElement(b.a, {
              name: 'demo2',
              label: 'ASelect',
              form: n,
              initialValue: 3,
              rules: [{ required: !0, message: ' ASelect!' }],
              selectOptions: O,
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
                r.a.createElement(j.a, null),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, f.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        v = {};
      function h(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object.assign({}, v, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'aselect' }, 'ASelect'),
          Object(o.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(o.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(o.b)(
            s.a,
            {
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ASelect from '..';\n\nconst selectOptions = [\n  {\n    key: 1,\n    value: '\u9093\u8273',\n    age: 25,\n  },\n  {\n    key: 2,\n    value: '\u9f99\u82b3',\n    disabled: true,\n    age: 24,\n  },\n  {\n    key: 3,\n    value: '\u4e54\u660e',\n    age: 25,\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 120,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ASelect\n        name=\"demo2\"\n        label=\"ASelect\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' ASelect!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ASelect from '..';\n\nconst selectOptions = [\n  {\n    key: 1,\n    value: '\u9093\u8273',\n    age: 25,\n  },\n  {\n    key: 2,\n    value: '\u9f99\u82b3',\n    disabled: true,\n    age: 24,\n  },\n  {\n    key: 3,\n    value: '\u4e54\u660e',\n    age: 25,\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 120,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ASelect\n        name=\"demo2\"\n        label=\"ASelect\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' ASelect!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(o.b)(g, { mdxType: 'Demo1' }),
          ),
          Object(o.b)(
            'h2',
            { id: 'aselect\u548cformitem-\u6df7\u5408\u4f7f\u7528' },
            'ASelect\u548cForm.Item \u6df7\u5408\u4f7f\u7528',
          ),
          Object(o.b)(
            s.a,
            {
              tsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport ASelect from '..';\n\nconst selectOptions = [\n  {\n    key: 1,\n    value: '\u9093\u8273',\n    age: 25,\n  },\n  {\n    key: 2,\n    value: '\u9f99\u82b3',\n    disabled: true,\n    age: 24,\n  },\n  {\n    key: 3,\n    value: '\u4e54\u660e',\n    age: 25,\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const { getFieldDecorator } = form;\n\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <Form.Item label=\"E-mail\">\n        {getFieldDecorator('email', {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <ASelect\n        name=\"demo2\"\n        label=\"ASelect\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' ASelect!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <Form.Item label=\"name\">\n        {getFieldDecorator('name', {\n          rules: [\n            {\n              required: true,\n              message: 'Please input name!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              jsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport ASelect from '..';\n\nconst selectOptions = [\n  {\n    key: 1,\n    value: '\u9093\u8273',\n    age: 25,\n  },\n  {\n    key: 2,\n    value: '\u9f99\u82b3',\n    disabled: true,\n    age: 24,\n  },\n  {\n    key: 3,\n    value: '\u4e54\u660e',\n    age: 25,\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const { getFieldDecorator } = form;\n\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <Form.Item label=\"E-mail\">\n        {getFieldDecorator('email', {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <ASelect\n        name=\"demo2\"\n        label=\"ASelect\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' ASelect!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        widgetProps={{\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <Form.Item label=\"name\">\n        {getFieldDecorator('name', {\n          rules: [\n            {\n              required: true,\n              message: 'Please input name!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
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
                  ' number; value: string ',
                  '|',
                  ' number; disabled?: boolean;',
                  '[k: string]',
                  ': any;}]',
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
                  'function(value:any): SelectOptionsProps[]',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
        );
      }
      h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/aselect/aselect.mdx' },
        }),
        (h.isMDXComponent = !0);
    },
    './src/form/aselect/index.tsx': function (e, n, t) {
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
        m = o.a.Option;
      'undefined' !== typeof SelectOptionsProps &&
        SelectOptionsProps &&
        SelectOptionsProps === Object(SelectOptionsProps) &&
        Object.isExtensible(SelectOptionsProps) &&
        Object.defineProperty(SelectOptionsProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'SelectOptionsProps', filename: 'src/form/aselect/index.tsx' },
        }),
        'undefined' !== typeof ASelectProps &&
          ASelectProps &&
          ASelectProps === Object(ASelectProps) &&
          Object.isExtensible(ASelectProps) &&
          Object.defineProperty(ASelectProps, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ASelectProps', filename: 'src/form/aselect/index.tsx' },
          });
      var c = function (e) {
        var n = e.name,
          t = e.label,
          c = e.form,
          b = e.selectOptions,
          u = e.widgetProps,
          d = e.formatter,
          p = e.formItemProps,
          g = e.rules,
          j = e.initialValue,
          O = e.fieldDecoratorOptions,
          f = void 0 === O ? {} : O,
          y = c.getFieldDecorator,
          v = Object(r.a)({ rules: g, initialValue: j }, f);
        var h = Object(s.useMemo)(
          function () {
            return (e = b), d ? d(e) : e;
            var e;
          },
          [b],
        );
        return i.a.createElement(
          a.a.Item,
          Object.assign({ label: t }, p),
          y(
            n,
            v,
          )(
            i.a.createElement(
              o.a,
              u,
              h.map(function (e) {
                var n = e.key,
                  t = e.value,
                  a = e.disabled,
                  r = Object(l.a)(e, ['key', 'value', 'disabled']);
                return i.a.createElement(m, Object.assign({ key: n, value: n, disabled: a }, r), t);
              }),
            ),
          ),
        );
      };
      (c.defaultProps = {
        initialValue: void 0,
        selectOptions: [],
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
            value: { name: 'ASelect', filename: 'src/form/aselect/index.tsx' },
          });
    },
  },
]);
