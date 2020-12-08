(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    './src/form/aautocomplete/index.tsx': function (e, t, n) {
      'use strict';
      n('./node_modules/antd/es/form/style/index.js');
      var a = n('./node_modules/antd/es/form/index.js'),
        r = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        o =
          (n('./node_modules/antd/es/auto-complete/style/index.js'),
          n('./node_modules/antd/es/auto-complete/index.js')),
        l = n('react'),
        s = n.n(l),
        i = o.a.Option,
        m = o.a.OptGroup;
      'undefined' !== typeof AAutoCompleteProps &&
        AAutoCompleteProps &&
        AAutoCompleteProps === Object(AAutoCompleteProps) &&
        Object.isExtensible(AAutoCompleteProps) &&
        Object.defineProperty(AAutoCompleteProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AAutoCompleteProps', filename: 'src/form/aautocomplete/index.tsx' },
        });
      var c = function (e) {
        var t = e.name,
          n = e.label,
          i = e.form,
          m = e.dataSource,
          c = void 0 === m ? [] : m,
          u = e.formatter,
          b = e.children,
          p = e.widgetProps,
          d = void 0 === p ? {} : p,
          j = e.formItemProps,
          f = e.rules,
          O = e.initialValue,
          g = void 0 === O ? [] : O,
          y = e.fieldDecoratorOptions,
          h = void 0 === y ? {} : y,
          v = i.getFieldDecorator,
          N = Object(r.a)({ rules: f, initialValue: g }, h),
          C = Object.assign({}, d);
        var F = Object(l.useMemo)(
          function () {
            return (e = c), u ? u(e) : e;
            var e;
          },
          [c],
        );
        return s.a.createElement(
          a.a.Item,
          Object.assign({ label: n }, j),
          v(t, N)(s.a.createElement(o.a, Object.assign({ dataSource: F }, C), b)),
        );
      };
      (c.defaultProps = {
        initialValue: void 0,
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (c.Option = i),
        (c.OptGroup = m),
        (t.a = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'AAutoComplete', filename: 'src/form/aautocomplete/index.tsx' },
          });
    },
    './src/form/adynamic-autocomplete/index.mdx': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return v;
        });
      var a = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        r = n('react'),
        o = n.n(r),
        l = n('./node_modules/@mdx-js/react/dist/esm.js'),
        s = n('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        i =
          (n('./node_modules/antd/es/form/style/index.js'),
          n('./node_modules/antd/es/form/index.js')),
        m =
          (n('./node_modules/antd/es/button/style/index.js'),
          n('./node_modules/antd/es/button/index.js')),
        c = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        u = n('./src/form/adynamic-autocomplete/index.tsx'),
        b = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        p = { width: '100%' },
        d = i.a.create()(function (e) {
          var t = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, b, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            o.a.createElement(u.a, {
              name: 'demo1',
              label: '\u8282\u70b9',
              form: t,
              rules: [{ required: !0, message: ' ATree!' }],
              loadDataOption: {
                queryKey: 'id',
                action: 'http://yapi.rebornauto.cn/mock/39/autocomplete',
              },
              widgetProps: {
                style: p,
                onSearch: function (e) {
                  console.log(e);
                },
              },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, b.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        j = n('./node_modules/jsonp/index.js'),
        f = n.n(j),
        O = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        g = { width: '100%' },
        y = i.a.create()(function (e) {
          var t = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, O, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            o.a.createElement(u.a, {
              name: 'demo2',
              label: '\u8282\u70b9',
              form: t,
              rules: [{ required: !0, message: ' ATree!' }],
              loadDataOption: {
                queryKey: 'q',
                action: 'https://suggest.taobao.com/sug',
                otherData: { code: 'utf-8' },
              },
              asyncFn: function (e) {
                return new Promise(function (t, n) {
                  f()(e, function (e, a) {
                    e && n(e),
                      t(
                        a.result.map(function (e) {
                          return e[0];
                        }),
                      );
                  });
                });
              },
              formatter: function (e) {
                return e;
              },
              widgetProps: {
                style: g,
                onSearch: function (e) {
                  console.log(e);
                },
              },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, O.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        h = {};
      function v(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components']);
        return Object(l.b)(
          'wrapper',
          Object.assign({}, h, n, { components: t, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'adynamicautocomplete' }, 'ADynamicAutoComplete'),
          Object(l.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(l.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicAutoComplete from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onSearch(value) {\n    console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicAutoComplete\n        name=\"demo1\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        loadDataOption={{\n          queryKey: 'id',\n          action: 'http://yapi.rebornauto.cn/mock/39/autocomplete',\n        }}\n        widgetProps={{\n          style: styles,\n          onSearch,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, AutoComplete, Button } from 'antd';\nimport jsonp from 'jsonp';\nimport { FormComponentProps } from 'antd/es/form';\nimport ADynamicAutoComplete from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onSearch(value: any) {\n    console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicAutoComplete\n        name=\"demo1\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        loadDataOption={{\n          queryKey: 'id',\n          action: 'http://yapi.rebornauto.cn/mock/39/autocomplete',\n        }}\n        widgetProps={{\n          style: styles,\n          onSearch,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(d, { mdxType: 'Demo1' }),
          ),
          Object(l.b)(
            'h3',
            { id: '\u81ea\u5b9a\u4e49\u8bf7\u6c42\u51fd\u6570' },
            '\u81ea\u5b9a\u4e49\u8bf7\u6c42\u51fd\u6570',
          ),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport jsonp from 'jsonp';\nimport ADynamicAutoComplete from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function asyncFn(params) {\n    return new Promise((resolve, reject) => {\n      jsonp(params, (err, data) => {\n        if (err) reject(err);\n        resolve(data.result.map(item => item[0]));\n      });\n    });\n  }\n\n  function onSearch(value) {\n    console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  function formatter(data) {\n    return data;\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicAutoComplete\n        name=\"demo2\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        loadDataOption={{\n          queryKey: 'q',\n          action: 'https://suggest.taobao.com/sug',\n          otherData: {\n            code: 'utf-8',\n          },\n        }}\n        asyncFn={asyncFn}\n        formatter={formatter}\n        widgetProps={{\n          style: styles,\n          onSearch,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, AutoComplete, Button } from 'antd';\nimport jsonp from 'jsonp';\nimport { FormComponentProps } from 'antd/es/form';\nimport ADynamicAutoComplete from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function asyncFn(params) {\n    return new Promise((resolve, reject) => {\n      jsonp(params, (err, data) => {\n        if (err) reject(err);\n        resolve(data.result.map(item => item[0]));\n      });\n    });\n  }\n\n  function onSearch(value: any) {\n    console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  function formatter(data): string[] {\n    return data;\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicAutoComplete\n        name=\"demo2\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        loadDataOption={{\n          queryKey: 'q',\n          action: 'https://suggest.taobao.com/sug',\n          otherData: { code: 'utf-8' },\n        }}\n        asyncFn={asyncFn}\n        formatter={formatter}\n        widgetProps={{\n          style: styles,\n          onSearch,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
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
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'queryKey'),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u63a5\u53e3\u67e5\u8be2\u53c2\u6570\u5b57\u6bb5\u540d',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'otherData',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u5176\u4ed6\u63a5\u53e3\u67e5\u8be2\u53c2\u6570\u5b57\u6bb5\u540d',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '{',
                  '[key:string]',
                  ':string}',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
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
          value: { name: 'MDXContent', filename: 'src/form/adynamic-autocomplete/index.mdx' },
        }),
        (v.isMDXComponent = !0);
    },
    './src/form/adynamic-autocomplete/index.tsx': function (e, t, n) {
      'use strict';
      var a = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        r = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js',
        ),
        o = n.n(r),
        l = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js',
        ),
        s = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        i = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        m = n('react'),
        c = n.n(m),
        u = n('./node_modules/@umijs/hooks/es/index.js'),
        b = n('./src/utils.ts'),
        p = n('./src/form/aautocomplete/index.tsx');
      'undefined' !== typeof LoadDataOption &&
        LoadDataOption &&
        LoadDataOption === Object(LoadDataOption) &&
        Object.isExtensible(LoadDataOption) &&
        Object.defineProperty(LoadDataOption, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'LoadDataOption', filename: 'src/form/adynamic-autocomplete/index.tsx' },
        }),
        'undefined' !== typeof ADynamicAutoCompleteProps &&
          ADynamicAutoCompleteProps &&
          ADynamicAutoCompleteProps === Object(ADynamicAutoCompleteProps) &&
          Object.isExtensible(ADynamicAutoCompleteProps) &&
          Object.defineProperty(ADynamicAutoCompleteProps, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ADynamicAutoCompleteProps',
              filename: 'src/form/adynamic-autocomplete/index.tsx',
            },
          });
      var d = function (e) {
        var t = e.form,
          n = e.name,
          r = e.customLoadDataParams,
          d = e.loadDataOption,
          j = e.asyncFn,
          f = e.throttleWait,
          O = void 0 === f ? 300 : f,
          g = e.initialValue,
          y = e.widgetProps,
          h = void 0 === y ? {} : y,
          v = Object(i.a)(e, [
            'form',
            'name',
            'customLoadDataParams',
            'loadDataOption',
            'asyncFn',
            'throttleWait',
            'initialValue',
            'widgetProps',
          ]),
          N = h.onSearch,
          C = Object(i.a)(h, ['onSearch']),
          F = Object(m.useState)(''),
          A = Object(s.a)(F, 2),
          x = A[0],
          D = A[1],
          w = Object(m.useState)([]),
          P = Object(s.a)(w, 2),
          _ = P[0],
          S = P[1];
        function E(e) {
          return T.apply(this, arguments);
        }
        function T() {
          return (T = Object(l.a)(
            o.a.mark(function e(t) {
              var n, a, l, s, i, m, c;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = ''),
                        r
                          ? (n = r(t))
                          : ((a = d.queryKey),
                            (l = void 0 === a ? 'id' : a),
                            (s = d.action),
                            (i = d.otherData),
                            ((m = void 0 === i ? {} : i)[l] = t),
                            (c = new URLSearchParams(m).toString()),
                            (n = ''.concat(s, '?').concat(c))),
                        e.abrupt('return', j ? j(n) : Object(b.a)(n))
                      );
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return (
          Object(m.useEffect)(function () {
            Object(l.a)(
              o.a.mark(function e() {
                var t;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!g) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 3), E(g);
                      case 3:
                        (t = e.sent), S(t);
                      case 5:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          }, []),
          Object(u.a)(
            Object(l.a)(
              o.a.mark(function e() {
                var t;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), E(x);
                      case 2:
                        (t = e.sent), S(t), N && N(x);
                      case 5:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
            [x],
            O,
          ),
          c.a.createElement(
            p.a,
            Object.assign(
              {
                form: t,
                name: n,
                dataSource: _,
                initialValue: g,
                widgetProps: Object(a.a)(
                  {
                    onSearch: function (e) {
                      D(e);
                    },
                  },
                  C,
                ),
              },
              v,
            ),
          )
        );
      };
      (d.defaultProps = {}),
        (t.a = d),
        d &&
          d === Object(d) &&
          Object.isExtensible(d) &&
          Object.defineProperty(d, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ADynamicAutoComplete',
              filename: 'src/form/adynamic-autocomplete/index.tsx',
            },
          });
    },
    './src/utils.ts': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var a = n('./node_modules/umi-request/dist/index.es.js'),
        r = function (e) {
          return a.a.get(e).then(function (e) {
            return e.body;
          });
        };
      'undefined' !== typeof r &&
        r &&
        r === Object(r) &&
        Object.isExtensible(r) &&
        Object.defineProperty(r, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'fetch', filename: 'src/utils.ts' },
        });
    },
  },
]);
