(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    './src/form/aswitch/index.mdx': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return j;
        });
      var a = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        r = n('react'),
        l = n.n(r),
        s = n('./node_modules/@mdx-js/react/dist/esm.js'),
        o = n('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        i =
          (n('./node_modules/antd/es/form/style/index.js'),
          n('./node_modules/antd/es/form/index.js')),
        b =
          (n('./node_modules/antd/es/button/style/index.js'),
          n('./node_modules/antd/es/button/index.js')),
        c = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        m = n('./src/form/aswitch/index.tsx'),
        d = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        p = i.a.create()(function (e) {
          var t = e.form;
          return l.a.createElement(
            i.a,
            Object.assign({}, d, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            l.a.createElement(m.a, {
              name: 'switch',
              label: 'Switch',
              form: t,
              initialValue: !0,
              rules: [{ required: !0, message: '\u8bf7\u9009\u62e9' }],
              widgetProps: {
                onChange: function (e) {
                  console.log(e);
                },
              },
            }),
            l.a.createElement(
              i.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, d.wrapperCol), {}, { offset: 2 }) },
              l.a.createElement(b.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        u = {};
      function j(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components']);
        return Object(s.b)(
          'wrapper',
          Object.assign({}, u, n, { components: t, mdxType: 'MDXLayout' }),
          Object(s.b)('h1', { id: 'aswitch' }, 'ASwitch'),
          Object(s.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(s.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(s.b)(
            o.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ASwitch from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n}; // const styles: React.CSSProperties = {\n//   width: 260,\n// };\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value) {\n    console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ASwitch\n        name=\"switch\"\n        label=\"Switch\"\n        form={form}\n        initialValue={!!1}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u9009\u62e9',\n          },\n        ]}\n        widgetProps={{\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\n\nimport ASwitch from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\n// const styles: React.CSSProperties = {\n//   width: 260,\n// };\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value) {\n    console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ASwitch\n        name=\"switch\"\n        label=\"Switch\"\n        form={form}\n        initialValue={!!1}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u9009\u62e9',\n          },\n        ]}\n        widgetProps={{\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(s.b)(p, { mdxType: 'Demo1' }),
          ),
          Object(s.b)('h2', { id: 'api' }, 'API'),
          Object(s.b)('h3', { id: '\u516c\u5171\u5c5e\u6027' }, '\u516c\u5171\u5c5e\u6027'),
          Object(s.b)(
            'table',
            null,
            Object(s.b)(
              'thead',
              { parentName: 'table' },
              Object(s.b)(
                'tr',
                { parentName: 'thead' },
                Object(s.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u53c2\u6570',
                ),
                Object(s.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u8bf4\u660e',
                ),
                Object(s.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7c7b\u578b',
                ),
                Object(s.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'required'),
              ),
            ),
            Object(s.b)(
              'tbody',
              { parentName: 'table' },
              Object(s.b)(
                'tr',
                { parentName: 'tbody' },
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'name'),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'form \u4e2d id',
                ),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(s.b)(
                'tr',
                { parentName: 'tbody' },
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'form'),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.create()(\u7ec4\u4ef6) \u9ad8\u9636\u5c5e\u6027',
                ),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'AntdFormItemProps',
                ),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(s.b)(
                'tr',
                { parentName: 'tbody' },
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'label'),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.Item label \u5c5e\u6027',
                ),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'string ',
                  '|',
                  ' ReactNode',
                ),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(s.b)(
                'tr',
                { parentName: 'tbody' },
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'initialValue',
                ),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u5b50\u8282\u70b9\u7684\u521d\u59cb\u503c\uff0c\u7c7b\u578b\u3001\u53ef\u9009\u503c\u5747\u7531\u5b50\u8282\u70b9\u51b3\u5b9a',
                ),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'any'),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(s.b)(
                'tr',
                { parentName: 'tbody' },
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'rules'),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u6821\u9a8c\u89c4\u5219, ',
                  Object(s.b)(
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
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object[]'),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(s.b)(
                'tr',
                { parentName: 'tbody' },
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'formItemProps',
                ),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.Item \u5c5e\u6027',
                  Object(s.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/form-cn/#Form.Item' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(s.b)(
                'tr',
                { parentName: 'tbody' },
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'fieldDecoratorOptions',
                ),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'getFieldDecorator options \u53c2\u6570 ',
                  Object(s.b)(
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
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
          Object(s.b)('h3', { id: '\u7ec4\u4ef6\u5c5e\u6027' }, '\u7ec4\u4ef6\u5c5e\u6027'),
          Object(s.b)(
            'table',
            null,
            Object(s.b)(
              'thead',
              { parentName: 'table' },
              Object(s.b)(
                'tr',
                { parentName: 'thead' },
                Object(s.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u53c2\u6570',
                ),
                Object(s.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u8bf4\u660e',
                ),
                Object(s.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7c7b\u578b',
                ),
                Object(s.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'required'),
              ),
            ),
            Object(s.b)(
              'tbody',
              { parentName: 'table' },
              Object(s.b)(
                'tr',
                { parentName: 'tbody' },
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'widgetProps',
                ),
                Object(s.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(s.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/switch-cn/#API' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(s.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
        );
      }
      j &&
        j === Object(j) &&
        Object.isExtensible(j) &&
        Object.defineProperty(j, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/aswitch/index.mdx' },
        }),
        (j.isMDXComponent = !0);
    },
    './src/form/aswitch/index.tsx': function (e, t, n) {
      'use strict';
      n('./node_modules/antd/es/form/style/index.js');
      var a = n('./node_modules/antd/es/form/index.js'),
        r =
          (n('./node_modules/antd/es/switch/style/index.js'),
          n('./node_modules/antd/es/switch/index.js')),
        l = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        s = n('react'),
        o = n.n(s);
      'undefined' !== typeof ASwitchProps &&
        ASwitchProps &&
        ASwitchProps === Object(ASwitchProps) &&
        Object.isExtensible(ASwitchProps) &&
        Object.defineProperty(ASwitchProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ASwitchProps', filename: 'src/form/aswitch/index.tsx' },
        });
      var i = function (e) {
        var t = e.name,
          n = e.label,
          s = e.form,
          i = e.widgetProps,
          b = e.formItemProps,
          c = e.rules,
          m = e.initialValue,
          d = e.fieldDecoratorOptions,
          p = void 0 === d ? {} : d,
          u = s.getFieldDecorator,
          j = Object(l.a)({ rules: c, initialValue: m, valuePropName: 'checked' }, p);
        return o.a.createElement(
          a.a.Item,
          Object.assign({ label: n }, b),
          u(t, j)(o.a.createElement(r.a, i)),
        );
      };
      (i.defaultProps = {
        initialValue: void 0,
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (t.a = i),
        i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ASwitch', filename: 'src/form/aswitch/index.tsx' },
          });
    },
  },
]);
