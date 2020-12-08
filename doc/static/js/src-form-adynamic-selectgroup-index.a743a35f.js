(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    './src/form/adynamic-selectgroup/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return C;
        });
      var a = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        r = t('react'),
        o = t.n(r),
        l = t('./node_modules/@mdx-js/react/dist/esm.js'),
        s = t('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        m =
          (t('./node_modules/antd/es/form/style/index.js'),
          t('./node_modules/antd/es/form/index.js')),
        i =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        c = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        b = t('./src/form/adynamic-selectgroup/index.tsx'),
        d = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        p = { width: 260 },
        u = m.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            m.a,
            Object.assign({}, d, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(b.a, {
              name: 'name',
              label: '\u59d3\u540d',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/selectGroup',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u59d3\u540d!' }],
              widgetProps: {
                style: p,
                placeholder: '\u8bf7\u9009\u62e9\u59d3\u540d',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            o.a.createElement(
              m.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, d.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(i.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        g =
          (t('./node_modules/antd/es/input/style/index.js'),
          t('./node_modules/antd/es/input/index.js')),
        j = t('./src/index.tsx'),
        f = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        O = { width: 260 },
        y = m.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            m.a,
            Object.assign({}, f, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(j.b, {
              name: 'name1',
              label: '\u59d3\u540d',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/selectGroup',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u59d3\u540d!' }],
              widgetProps: {
                style: O,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, t) {
                  if ((console.log(e, t), t)) {
                    var a = t.props,
                      r = a.age,
                      o = a.address;
                    n.setFieldsValue({ age: r, address: o });
                  } else n.setFieldsValue({ age: void 0, address: void 0 });
                },
              },
            }),
            o.a.createElement(j.c, {
              name: 'age',
              label: '\u5e74\u9f84',
              form: n,
              rules: [{ required: !0, message: ' \u8bf7\u8f93\u5165\u5e74\u9f84!' }],
              widgetProps: { style: O, placeholder: '\u8bf7\u8f93\u5165\u5e74\u9f84' },
            }),
            o.a.createElement(
              m.a.Item,
              { label: '\u5730\u5740' },
              n.getFieldDecorator('address', {
                rules: [{ required: !0, message: ' \u8bf7\u8f93\u5165\u5730\u5740' }],
              })(
                o.a.createElement(g.a, { style: O, placeholder: '\u8bf7\u8f93\u5165\u5730\u5740' }),
              ),
            ),
            o.a.createElement(
              m.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, f.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(i.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        h = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        F = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        N = { width: 260 },
        v =
          (m.a.create()(function (e) {
            var n = e.form,
              t = Object(r.useState)(null),
              a = Object(h.a)(t, 2),
              l = a[0],
              s = a[1];
            return o.a.createElement(
              m.a,
              Object.assign({}, F, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    n.validateFields(function (e, n) {
                      e || console.log('Received values of form: ', n);
                    });
                },
              }),
              o.a.createElement(j.a, {
                name: 'province',
                label: '\u7701\u4efd',
                form: n,
                action: 'http://yapi.rebornauto.cn/mock/39/province',
                rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u7701\u4efd' }],
                widgetProps: {
                  style: N,
                  placeholder: '\u8bf7\u9009\u62e9\u7701\u4efd',
                  onChange: function (e) {
                    e
                      ? s('http://yapi.rebornauto.cn/mock/39/city?province='.concat(e))
                      : n.setFieldsValue({ city: void 0 });
                  },
                },
              }),
              o.a.createElement(j.a, {
                name: 'city',
                label: '\u57ce\u5e02',
                form: n,
                action: l,
                rules: [{ required: !0, message: '\u8bf7\u9009\u62e9\u57ce\u5e02' }],
                widgetProps: {
                  style: N,
                  placeholder: '\u8bf7\u9009\u62e9\u57ce\u5e02',
                  onChange: function (e) {
                    console.log('city', e);
                  },
                },
              }),
              o.a.createElement(
                m.a.Item,
                { wrapperCol: Object(c.a)(Object(c.a)({}, F.wrapperCol), {}, { offset: 2 }) },
                o.a.createElement(i.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
              ),
            );
          }),
          {});
      function C(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(l.b)(
          'wrapper',
          Object.assign({}, v, t, { components: n, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'adynamicselectgroup' }, 'ADynamicSelectGroup'),
          Object(l.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(l.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicSelectGroup from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelectGroup\n        name=\"name\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/selectGroup\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u59d3\u540d!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u59d3\u540d',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicSelectGroup from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelectGroup\n        name=\"name\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/selectGroup\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u59d3\u540d!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u59d3\u540d',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(u, { mdxType: 'Demo1' }),
          ),
          Object(l.b)(
            'h3',
            { id: 'formitem-\u6df7\u5408\u4f7f\u7528' },
            'Form.Item \u6df7\u5408\u4f7f\u7528',
          ),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button, Input } from 'antd';\nimport { ADynamicSelectGroup, AInput } from '../../../index';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n\n    if (node) {\n      const {\n        props: { age, address },\n      } = node;\n      form.setFieldsValue({\n        age,\n        address,\n      });\n    } else {\n      form.setFieldsValue({\n        age: undefined,\n        address: undefined,\n      });\n    }\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelectGroup\n        name=\"name1\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/selectGroup\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u59d3\u540d!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <AInput\n        name=\"age\"\n        label=\"\u5e74\u9f84\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u8f93\u5165\u5e74\u9f84!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165\u5e74\u9f84',\n        }}\n      />\n\n      <Form.Item label=\"\u5730\u5740\">\n        {form.getFieldDecorator('address', {\n          rules: [\n            {\n              required: true,\n              message: ' \u8bf7\u8f93\u5165\u5730\u5740',\n            },\n          ],\n        })(<Input style={styles} placeholder=\"\u8bf7\u8f93\u5165\u5730\u5740\" />)}\n      </Form.Item>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button, Input } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\n\nimport { ADynamicSelectGroup, AInput } from '../../../index';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n    if (node) {\n      const {\n        props: { age, address },\n      } = node;\n      form.setFieldsValue({\n        age,\n        address,\n      });\n    } else {\n      form.setFieldsValue({\n        age: undefined,\n        address: undefined,\n      });\n    }\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelectGroup\n        name=\"name1\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/selectGroup\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u59d3\u540d!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <AInput\n        name=\"age\"\n        label=\"\u5e74\u9f84\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u8f93\u5165\u5e74\u9f84!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165\u5e74\u9f84',\n        }}\n      />\n\n      <Form.Item label=\"\u5730\u5740\">\n        {form.getFieldDecorator('address', {\n          rules: [\n            {\n              required: true,\n              message: ' \u8bf7\u8f93\u5165\u5730\u5740',\n            },\n          ],\n        })(<Input style={styles} placeholder=\"\u8bf7\u8f93\u5165\u5730\u5740\" />)}\n      </Form.Item>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(y, { mdxType: 'Demo2' }),
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
      C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/adynamic-selectgroup/index.mdx' },
        }),
        (C.isMDXComponent = !0);
    },
  },
]);
