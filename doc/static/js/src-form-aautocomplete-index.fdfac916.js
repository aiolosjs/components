(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './src/form/aautocomplete/index.mdx': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return v;
        });
      var a = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        o = n('react'),
        r = n.n(o),
        l = n('./node_modules/@mdx-js/react/dist/esm.js'),
        s = n('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        m =
          (n('./node_modules/antd/es/form/style/index.js'),
          n('./node_modules/antd/es/form/index.js')),
        c =
          (n('./node_modules/antd/es/button/style/index.js'),
          n('./node_modules/antd/es/button/index.js')),
        i = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        u = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        p = n('./src/form/aautocomplete/index.tsx'),
        b = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        d = { width: '100%' },
        f = m.a.create()(function (e) {
          var t = e.form,
            n = r.a.useState([]),
            a = Object(u.a)(n, 2),
            o = a[0],
            l = a[1];
          return r.a.createElement(
            m.a,
            Object.assign({}, b, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            r.a.createElement(p.a, {
              name: 'demo1',
              label: '\u9009\u62e9',
              form: t,
              rules: [{ required: !0, message: ' AAutoComplete!' }],
              dataSource: o,
              widgetProps: {
                style: d,
                placeholder: '\u8bf7\u8f93\u5165',
                onSearch: function (e) {
                  l(e ? [e, e.repeat(2), e.repeat(3)] : []);
                },
              },
            }),
            r.a.createElement(
              m.a.Item,
              { wrapperCol: Object(i.a)(Object(i.a)({}, b.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        j = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        g = { width: '100%' },
        O = m.a.create()(function (e) {
          var t = e.form,
            n = r.a.useState([]),
            a = Object(u.a)(n, 2),
            o = a[0],
            l = a[1];
          var s = o.map(function (e) {
            return r.a.createElement(p.a.Option, { key: e }, e);
          });
          return r.a.createElement(
            m.a,
            Object.assign({}, j, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            r.a.createElement(
              p.a,
              {
                name: 'demo2',
                label: '\u9009\u62e9',
                form: t,
                rules: [{ required: !0, message: ' AAutoComplete!' }],
                widgetProps: {
                  style: g,
                  placeholder: '\u8bf7\u8f93\u5165',
                  onSearch: function (e) {
                    var t;
                    (t =
                      !e || e.indexOf('@') >= 0
                        ? []
                        : ['gmail.com', '163.com', 'qq.com'].map(function (t) {
                            return ''.concat(e, '@').concat(t);
                          })),
                      l(t);
                  },
                },
              },
              s,
            ),
            r.a.createElement(
              m.a.Item,
              { wrapperCol: Object(i.a)(Object(i.a)({}, j.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        h =
          (n('./node_modules/antd/es/input/style/index.js'),
          n('./node_modules/antd/es/input/index.js')),
        y = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        C = { width: '100%' },
        A = m.a.create()(function (e) {
          var t = e.form,
            n = r.a.useState([]),
            a = Object(u.a)(n, 2),
            o = a[0],
            l = a[1];
          return r.a.createElement(
            m.a,
            Object.assign({}, y, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            r.a.createElement(
              p.a,
              {
                name: 'demo3',
                label: '\u9009\u62e9',
                form: t,
                rules: [{ required: !0, message: ' AAutoComplete!' }],
                dataSource: o,
                widgetProps: {
                  style: C,
                  onSearch: function (e) {
                    l(e ? [e, e.repeat(2), e.repeat(3)] : []);
                  },
                },
              },
              r.a.createElement(h.a.TextArea, { placeholder: 'input here', style: { height: 50 } }),
            ),
            r.a.createElement(
              m.a.Item,
              { wrapperCol: Object(i.a)(Object(i.a)({}, y.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        S = {};
      function v(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components']);
        return Object(l.b)(
          'wrapper',
          Object.assign({}, S, n, { components: t, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'aautocomplete' }, 'AAutoComplete'),
          Object(l.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(l.b)('h3', { id: '\u57fa\u672c\u7528\u6cd5' }, '\u57fa\u672c\u7528\u6cd5'),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport AAutoComplete from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const [dataSource, setDataSource] = React.useState([]);\n\n  function onSearch(searchText) {\n    setDataSource(!searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)]);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AAutoComplete\n        name=\"demo1\"\n        label=\"\u9009\u62e9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' AAutoComplete!',\n          },\n        ]}\n        dataSource={dataSource} // initialValue={['0-0-0']}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165',\n          onSearch,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Tag, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport AAutoComplete from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  const [dataSource, setDataSource] = React.useState<string[]>([]);\n\n  function onSearch(searchText: any) {\n    setDataSource(!searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)]);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AAutoComplete\n        name=\"demo1\"\n        label=\"\u9009\u62e9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' AAutoComplete!',\n          },\n        ]}\n        dataSource={dataSource}\n        // initialValue={['0-0-0']}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165',\n          onSearch,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(f, { mdxType: 'Demo1' }),
          ),
          Object(l.b)(
            'h3',
            { id: '\u81ea\u5b9a\u4e49\u9009\u9879' },
            '\u81ea\u5b9a\u4e49\u9009\u9879',
          ),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport AAutoComplete from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const [dataSource, setDataSource] = React.useState([]);\n\n  function onSearch(value) {\n    let result;\n\n    if (!value || value.indexOf('@') >= 0) {\n      result = [];\n    } else {\n      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);\n    }\n\n    setDataSource(result);\n  }\n\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  const children = dataSource.map(email => (\n    <AAutoComplete.Option key={email}>{email}</AAutoComplete.Option>\n  ));\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AAutoComplete\n        name=\"demo2\"\n        label=\"\u9009\u62e9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' AAutoComplete!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165',\n          onSearch,\n        }}\n      >\n        {children}\n      </AAutoComplete>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Tag, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport AAutoComplete from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  const [dataSource, setDataSource] = React.useState<string[]>([]);\n\n  function onSearch(value: any) {\n    let result: string[];\n    if (!value || value.indexOf('@') >= 0) {\n      result = [];\n    } else {\n      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);\n    }\n\n    setDataSource(result);\n  }\n\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  const children = dataSource.map(email => (\n    <AAutoComplete.Option key={email}>{email}</AAutoComplete.Option>\n  ));\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AAutoComplete\n        name=\"demo2\"\n        label=\"\u9009\u62e9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' AAutoComplete!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165',\n          onSearch,\n        }}\n      >\n        {children}\n      </AAutoComplete>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u81ea\u5b9a\u4e49\u9009\u9879',
              description:
                '\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f20 AutoComplete.Option \u4f5c\u4e3a AutoComplete \u7684 children\uff0c\u800c\u975e\u4f7f\u7528 dataSource\u3002',
              mdxType: 'JackBox',
            },
            Object(l.b)(O, { mdxType: 'Demo2' }),
          ),
          Object(l.b)(
            'h3',
            { id: '\u81ea\u5b9a\u4e49\u8f93\u5165\u7ec4\u4ef6' },
            '\u81ea\u5b9a\u4e49\u8f93\u5165\u7ec4\u4ef6',
          ),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport AAutoComplete from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const [dataSource, setDataSource] = React.useState([]);\n\n  function onSearch(searchText) {\n    setDataSource(!searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)]);\n  }\n\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AAutoComplete\n        name=\"demo3\"\n        label=\"\u9009\u62e9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' AAutoComplete!',\n          },\n        ]}\n        dataSource={dataSource}\n        widgetProps={{\n          style: styles,\n          onSearch,\n        }}\n      >\n        <Input.TextArea\n          placeholder=\"input here\"\n          style={{\n            height: 50,\n          }}\n        />\n      </AAutoComplete>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport AAutoComplete from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  const [dataSource, setDataSource] = React.useState<string[]>([]);\n\n  function onSearch(searchText: any) {\n    setDataSource(!searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)]);\n  }\n\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AAutoComplete\n        name=\"demo3\"\n        label=\"\u9009\u62e9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' AAutoComplete!',\n          },\n        ]}\n        dataSource={dataSource}\n        widgetProps={{\n          style: styles,\n          onSearch,\n        }}\n      >\n        <Input.TextArea placeholder=\"input here\" style={{ height: 50 }} />\n      </AAutoComplete>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u81ea\u5b9a\u4e49\u8f93\u5165\u7ec4\u4ef6',
              description: '\u81ea\u5b9a\u4e49\u8f93\u5165\u7ec4\u4ef6',
              mdxType: 'JackBox',
            },
            Object(l.b)(A, { mdxType: 'Demo3' }),
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
                          'https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0%3E',
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
                  'dataSource',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u81ea\u52a8\u5b8c\u6210\u7684\u6570\u636e\u6e90',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'DataSourceItemType[]',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'formatter',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u683c\u5f0f\u5316\u6570\u636e\u683c\u5f0f',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'function(value: any): DataSourceItemType[]',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
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
                  'AutoComplete\u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/auto-complete-cn/#API' },
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
      v &&
        v === Object(v) &&
        Object.isExtensible(v) &&
        Object.defineProperty(v, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/aautocomplete/index.mdx' },
        }),
        (v.isMDXComponent = !0);
    },
    './src/form/aautocomplete/index.tsx': function (e, t, n) {
      'use strict';
      n('./node_modules/antd/es/form/style/index.js');
      var a = n('./node_modules/antd/es/form/index.js'),
        o = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        r =
          (n('./node_modules/antd/es/auto-complete/style/index.js'),
          n('./node_modules/antd/es/auto-complete/index.js')),
        l = n('react'),
        s = n.n(l),
        m = r.a.Option,
        c = r.a.OptGroup;
      'undefined' !== typeof AAutoCompleteProps &&
        AAutoCompleteProps &&
        AAutoCompleteProps === Object(AAutoCompleteProps) &&
        Object.isExtensible(AAutoCompleteProps) &&
        Object.defineProperty(AAutoCompleteProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AAutoCompleteProps', filename: 'src/form/aautocomplete/index.tsx' },
        });
      var i = function (e) {
        var t = e.name,
          n = e.label,
          m = e.form,
          c = e.dataSource,
          i = void 0 === c ? [] : c,
          u = e.formatter,
          p = e.children,
          b = e.widgetProps,
          d = void 0 === b ? {} : b,
          f = e.formItemProps,
          j = e.rules,
          g = e.initialValue,
          O = void 0 === g ? [] : g,
          h = e.fieldDecoratorOptions,
          y = void 0 === h ? {} : h,
          C = m.getFieldDecorator,
          A = Object(o.a)({ rules: j, initialValue: O }, y),
          S = Object.assign({}, d);
        var v = Object(l.useMemo)(
          function () {
            return (e = i), u ? u(e) : e;
            var e;
          },
          [i],
        );
        return s.a.createElement(
          a.a.Item,
          Object.assign({ label: n }, f),
          C(t, A)(s.a.createElement(r.a, Object.assign({ dataSource: v }, S), p)),
        );
      };
      (i.defaultProps = {
        initialValue: void 0,
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (i.Option = m),
        (i.OptGroup = c),
        (t.a = i),
        i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'AAutoComplete', filename: 'src/form/aautocomplete/index.tsx' },
          });
    },
  },
]);
