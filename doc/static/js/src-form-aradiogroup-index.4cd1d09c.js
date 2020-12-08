(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    './src/form/aradiogroup/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return h;
        });
      var a = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        r = t('react'),
        o = t.n(r),
        l = t('./node_modules/@mdx-js/react/dist/esm.js'),
        i = t('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        s =
          (t('./node_modules/antd/es/form/style/index.js'),
          t('./node_modules/antd/es/form/index.js')),
        m =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        b = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        u = t('./src/form/aradiogroup/index.tsx'),
        d = [
          { value: 1, label: '\u9ed1\u9f99\u6c5f\u7701' },
          { value: 2, label: '\u6d77\u5357\u7701' },
          { value: 3, label: '\u6e56\u5317\u7701' },
          { value: 4, label: '\u4e91\u5357\u7701' },
        ],
        c = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        p = { width: 400 },
        j = s.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            s.a,
            Object.assign({}, c, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a, {
              name: 'demo2',
              label: '\u7701\u4efd',
              form: n,
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u7701\u4efd' }],
              radioOptions: d,
              widgetProps: { style: p },
            }),
            o.a.createElement(
              s.a.Item,
              { wrapperCol: Object(b.a)(Object(b.a)({}, c.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        g =
          (t('./node_modules/antd/es/input/style/index.js'),
          t('./node_modules/antd/es/input/index.js')),
        O = [
          { value: 1, label: '\u9ed1\u9f99\u6c5f\u7701' },
          { value: 2, label: '\u6d77\u5357\u7701' },
          { value: 3, label: '\u6e56\u5317\u7701' },
          { value: 4, label: '\u4e91\u5357\u7701' },
        ],
        f = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        v = s.a.create()(function (e) {
          var n = e.form,
            t = n.getFieldDecorator;
          return o.a.createElement(
            s.a,
            Object.assign({}, f, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(
              s.a.Item,
              { label: 'E-mail' },
              t('email', {
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!' },
                  { required: !0, message: 'Please input your E-mail!' },
                ],
              })(o.a.createElement(g.a, null)),
            ),
            o.a.createElement(u.a, {
              name: 'demo2',
              label: '\u7701\u4efd',
              form: n,
              initialValue: 3,
              rules: [{ required: !0, message: '\u8bf7\u9009\u62e9\u7701\u4efd' }],
              radioOptions: O,
            }),
            o.a.createElement(
              s.a.Item,
              { label: '\u59d3\u540d' },
              t('name', { rules: [{ required: !0, message: '\u8bf7\u8f93\u5165\u59d3\u540d' }] })(
                o.a.createElement(g.a, null),
              ),
            ),
            o.a.createElement(
              s.a.Item,
              { wrapperCol: Object(b.a)(Object(b.a)({}, f.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        F = {};
      function h(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(l.b)(
          'wrapper',
          Object.assign({}, F, t, { components: n, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'aradiogroup' }, 'ARadioGroup'),
          Object(l.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(l.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(l.b)(
            i.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ACheckboxGroup from '..';\n\nconst radioOptions = [\n  {\n    value: 1,\n    label: '\u9ed1\u9f99\u6c5f\u7701',\n  },\n  {\n    value: 2,\n    label: '\u6d77\u5357\u7701',\n  },\n  {\n    value: 3,\n    label: '\u6e56\u5317\u7701',\n  },\n  {\n    value: 4,\n    label: '\u4e91\u5357\u7701',\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 400,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ACheckboxGroup\n        name=\"demo2\"\n        label=\"\u7701\u4efd\"\n        form={form} // initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u7701\u4efd',\n          },\n        ]}\n        radioOptions={radioOptions}\n        widgetProps={{\n          style: styles,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ACheckboxGroup from '..';\n\nconst radioOptions = [\n  {\n    value: 1,\n    label: '\u9ed1\u9f99\u6c5f\u7701',\n  },\n  {\n    value: 2,\n    label: '\u6d77\u5357\u7701',\n  },\n  {\n    value: 3,\n    label: '\u6e56\u5317\u7701',\n  },\n  {\n    value: 4,\n    label: '\u4e91\u5357\u7701',\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 400,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ACheckboxGroup\n        name=\"demo2\"\n        label=\"\u7701\u4efd\"\n        form={form}\n        // initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u7701\u4efd',\n          },\n        ]}\n        radioOptions={radioOptions}\n        widgetProps={{\n          style: styles,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(j, { mdxType: 'Demo1' }),
          ),
          Object(l.b)(
            'h2',
            { id: 'aradiogroup-\u548c-formitem-\u6df7\u5408\u4f7f\u7528' },
            'ARadioGroup \u548c Form.Item \u6df7\u5408\u4f7f\u7528',
          ),
          Object(l.b)(
            i.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport ACheckboxGroup from '..';\n\nconst radioOptions = [\n  {\n    value: 1,\n    label: '\u9ed1\u9f99\u6c5f\u7701',\n  },\n  {\n    value: 2,\n    label: '\u6d77\u5357\u7701',\n  },\n  {\n    value: 3,\n    label: '\u6e56\u5317\u7701',\n  },\n  {\n    value: 4,\n    label: '\u4e91\u5357\u7701',\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const { getFieldDecorator } = form;\n\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <Form.Item label=\"E-mail\">\n        {getFieldDecorator('email', {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <ACheckboxGroup\n        name=\"demo2\"\n        label=\"\u7701\u4efd\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u9009\u62e9\u7701\u4efd',\n          },\n        ]}\n        radioOptions={radioOptions}\n      />\n      <Form.Item label=\"\u59d3\u540d\">\n        {getFieldDecorator('name', {\n          rules: [\n            {\n              required: true,\n              message: '\u8bf7\u8f93\u5165\u59d3\u540d',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ACheckboxGroup from '..';\n\nconst radioOptions = [\n  {\n    value: 1,\n    label: '\u9ed1\u9f99\u6c5f\u7701',\n  },\n  {\n    value: 2,\n    label: '\u6d77\u5357\u7701',\n  },\n  {\n    value: 3,\n    label: '\u6e56\u5317\u7701',\n  },\n  {\n    value: 4,\n    label: '\u4e91\u5357\u7701',\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  const { getFieldDecorator } = form;\n\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <Form.Item label=\"E-mail\">\n        {getFieldDecorator('email', {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <ACheckboxGroup\n        name=\"demo2\"\n        label=\"\u7701\u4efd\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u9009\u62e9\u7701\u4efd',\n          },\n        ]}\n        radioOptions={radioOptions}\n      />\n      <Form.Item label=\"\u59d3\u540d\">\n        {getFieldDecorator('name', {\n          rules: [\n            {\n              required: true,\n              message: '\u8bf7\u8f93\u5165\u59d3\u540d',\n            },\n          ],\n        })(<Input />)}\n      </Form.Item>\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u6df7\u5408\u4f7f\u7528',
              mdxType: 'JackBox',
            },
            Object(l.b)(v, { mdxType: 'Demo2' }),
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
                          'https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0',
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
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'radioOptions',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Select \u7ec4\u4ef6\u4e0b\u62c9\u9009\u9879\u503c',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'object',
                  '[{label: React.ReactNode; value: string ',
                  '|',
                  ' number ',
                  '|',
                  ' boolean; disabled?: boolean}]',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'widgetProps',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Select \u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/select-cn/#Select-props' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
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
          value: { name: 'MDXContent', filename: 'src/form/aradiogroup/index.mdx' },
        }),
        (h.isMDXComponent = !0);
    },
    './src/form/aradiogroup/index.tsx': function (e, n, t) {
      'use strict';
      t('./node_modules/antd/es/form/style/index.js');
      var a = t('./node_modules/antd/es/form/index.js'),
        r =
          (t('./node_modules/antd/es/radio/style/index.js'),
          t('./node_modules/antd/es/radio/index.js')),
        o = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        l = t('react'),
        i = t.n(l);
      'undefined' !== typeof ARadioGroupProps &&
        ARadioGroupProps &&
        ARadioGroupProps === Object(ARadioGroupProps) &&
        Object.isExtensible(ARadioGroupProps) &&
        Object.defineProperty(ARadioGroupProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ARadioGroupProps', filename: 'src/form/aradiogroup/index.tsx' },
        });
      var s = function (e) {
        var n = e.name,
          t = e.label,
          l = e.form,
          s = e.radioOptions,
          m = e.widgetProps,
          b = e.formItemProps,
          u = e.rules,
          d = e.initialValue,
          c = e.fieldDecoratorOptions,
          p = void 0 === c ? {} : c,
          j = l.getFieldDecorator,
          g = Object(o.a)({ rules: u, initialValue: d }, p);
        return i.a.createElement(
          a.a.Item,
          Object.assign({ label: t }, b),
          j(n, g)(i.a.createElement(r.a.Group, Object.assign({ options: s }, m))),
        );
      };
      (s.defaultProps = {
        initialValue: void 0,
        radioOptions: [],
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (n.a = s),
        s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ARadioGroup', filename: 'src/form/aradiogroup/index.tsx' },
          });
    },
  },
]);
