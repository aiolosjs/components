(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    './src/form/adynamic-select/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return w;
        });
      var a = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        r = t('react'),
        o = t.n(r),
        l = t('./node_modules/@mdx-js/react/dist/esm.js'),
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
        d = t('./src/form/adynamic-select/index.tsx'),
        p = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        u = { width: 260 },
        b = i.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, p, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(d.a, {
              name: 'name',
              label: '\u59d3\u540d',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/dic',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u59d3\u540d!' }],
              widgetProps: {
                style: u,
                placeholder: '\u8bf7\u9009\u62e9\u59d3\u540d',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, p.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        g =
          (t('./node_modules/antd/es/input/style/index.js'),
          t('./node_modules/antd/es/input/index.js')),
        f = t('./src/index.tsx'),
        y = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        j = { width: 260 },
        O = i.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, y, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(f.a, {
              name: 'name',
              label: '\u59d3\u540d',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/dic',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u59d3\u540d!' }],
              widgetProps: {
                style: j,
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
            o.a.createElement(f.c, {
              name: 'age',
              label: '\u5e74\u9f84',
              form: n,
              rules: [{ required: !0, message: ' \u8bf7\u8f93\u5165\u5e74\u9f84!' }],
              widgetProps: { style: j, placeholder: '\u8bf7\u8f93\u5165\u5e74\u9f84' },
            }),
            o.a.createElement(
              i.a.Item,
              { label: '\u5730\u5740' },
              n.getFieldDecorator('address', {
                rules: [{ required: !0, message: ' \u8bf7\u8f93\u5165\u5730\u5740' }],
              })(
                o.a.createElement(g.a, { style: j, placeholder: '\u8bf7\u8f93\u5165\u5730\u5740' }),
              ),
            ),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, y.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        h = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        F = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        C = { width: 260 },
        v = i.a.create()(function (e) {
          var n = e.form,
            t = Object(r.useState)(null),
            a = Object(h.a)(t, 2),
            l = a[0],
            s = a[1];
          return o.a.createElement(
            i.a,
            Object.assign({}, F, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(f.a, {
              name: 'province',
              label: '\u7701\u4efd',
              form: n,
              action: 'http://yapi.rebornauto.cn/mock/39/province',
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u7701\u4efd' }],
              widgetProps: {
                style: C,
                placeholder: '\u8bf7\u9009\u62e9\u7701\u4efd',
                onChange: function (e) {
                  e
                    ? s('http://yapi.rebornauto.cn/mock/39/city?province='.concat(e))
                    : n.setFieldsValue({ city: void 0 });
                },
              },
            }),
            o.a.createElement(f.a, {
              name: 'city',
              label: '\u57ce\u5e02',
              form: n,
              action: l,
              rules: [{ required: !0, message: '\u8bf7\u9009\u62e9\u57ce\u5e02' }],
              widgetProps: {
                style: C,
                placeholder: '\u8bf7\u9009\u62e9\u57ce\u5e02',
                onChange: function (e) {
                  console.log('city', e);
                },
              },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(c.a)(Object(c.a)({}, F.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        N = {};
      function w(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(l.b)(
          'wrapper',
          Object.assign({}, N, t, { components: n, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'adynamicselect' }, 'ADynamicSelect'),
          Object(l.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(l.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicSelect from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelect\n        name=\"name\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/dic\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u59d3\u540d!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u59d3\u540d',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicSelect from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelect\n        name=\"name\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/dic\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u59d3\u540d!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u59d3\u540d',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(b, { mdxType: 'Demo1' }),
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
                "import React from 'react';\nimport { Form, Button, Input } from 'antd';\nimport { ADynamicSelect, AInput } from '../../../index';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n\n    if (node) {\n      const {\n        props: { age, address },\n      } = node;\n      form.setFieldsValue({\n        age,\n        address,\n      });\n    } else {\n      form.setFieldsValue({\n        age: undefined,\n        address: undefined,\n      });\n    }\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelect\n        name=\"name\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/dic\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u59d3\u540d!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <AInput\n        name=\"age\"\n        label=\"\u5e74\u9f84\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u8f93\u5165\u5e74\u9f84!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165\u5e74\u9f84',\n        }}\n      />\n\n      <Form.Item label=\"\u5730\u5740\">\n        {form.getFieldDecorator('address', {\n          rules: [\n            {\n              required: true,\n              message: ' \u8bf7\u8f93\u5165\u5730\u5740',\n            },\n          ],\n        })(<Input style={styles} placeholder=\"\u8bf7\u8f93\u5165\u5730\u5740\" />)}\n      </Form.Item>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button, Input } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\n\nimport { ADynamicSelect, AInput } from '../../../index';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n    if (node) {\n      const {\n        props: { age, address },\n      } = node;\n      form.setFieldsValue({\n        age,\n        address,\n      });\n    } else {\n      form.setFieldsValue({\n        age: undefined,\n        address: undefined,\n      });\n    }\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelect\n        name=\"name\"\n        label=\"\u59d3\u540d\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/dic\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u59d3\u540d!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n      <AInput\n        name=\"age\"\n        label=\"\u5e74\u9f84\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u8f93\u5165\u5e74\u9f84!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165\u5e74\u9f84',\n        }}\n      />\n\n      <Form.Item label=\"\u5730\u5740\">\n        {form.getFieldDecorator('address', {\n          rules: [\n            {\n              required: true,\n              message: ' \u8bf7\u8f93\u5165\u5730\u5740',\n            },\n          ],\n        })(<Input style={styles} placeholder=\"\u8bf7\u8f93\u5165\u5730\u5740\" />)}\n      </Form.Item>\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(O, { mdxType: 'Demo2' }),
          ),
          Object(l.b)('h3', { id: '\u8054\u52a8\u7528\u6cd5' }, '\u8054\u52a8\u7528\u6cd5'),
          Object(l.b)(
            s.a,
            {
              jsCode:
                "import React, { useState } from 'react';\nimport { Form, Button } from 'antd';\nimport { ADynamicSelect } from '../../../index';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const [cityAction, setCityAction] = useState(null);\n\n  function onProvinceChange(province) {\n    if (province) {\n      setCityAction(`http://yapi.rebornauto.cn/mock/39/city?province=${province}`);\n    } else {\n      form.setFieldsValue({\n        city: undefined,\n      });\n    }\n  }\n\n  function onCityChange(city) {\n    console.log('city', city);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelect\n        name=\"province\"\n        label=\"\u7701\u4efd\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/province\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u7701\u4efd',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u7701\u4efd',\n          onChange: onProvinceChange,\n        }}\n      />\n      <ADynamicSelect\n        name=\"city\"\n        label=\"\u57ce\u5e02\"\n        form={form}\n        action={cityAction}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u9009\u62e9\u57ce\u5e02',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u57ce\u5e02',\n          onChange: onCityChange,\n        }}\n      />\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React, { useState } from 'react';\nimport { Form, Button, Input } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\n\nimport { ADynamicSelect, AInput } from '../../../index';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  const [cityAction, setCityAction] = useState<string | null>(null);\n\n  function onProvinceChange(province: number | undefined) {\n    if (province) {\n      setCityAction(`http://yapi.rebornauto.cn/mock/39/city?province=${province}`);\n    } else {\n      form.setFieldsValue({\n        city: undefined,\n      });\n    }\n  }\n\n  function onCityChange(city) {\n    console.log('city', city);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicSelect\n        name=\"province\"\n        label=\"\u7701\u4efd\"\n        form={form}\n        action=\"http://yapi.rebornauto.cn/mock/39/province\"\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u7701\u4efd',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u7701\u4efd',\n          onChange: onProvinceChange,\n        }}\n      />\n      <ADynamicSelect\n        name=\"city\"\n        label=\"\u57ce\u5e02\"\n        form={form}\n        action={cityAction}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u9009\u62e9\u57ce\u5e02',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u57ce\u5e02',\n          onChange: onCityChange,\n        }}\n      />\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(v, { mdxType: 'Demo3' }),
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
                  '\u5f02\u6b65\u8bf7\u6c42\u51fd\u6570',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '(...args: Args ',
                  '|',
                  ' any)=> Promise',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
        );
      }
      w &&
        w === Object(w) &&
        Object.isExtensible(w) &&
        Object.defineProperty(w, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/adynamic-select/index.mdx' },
        }),
        (w.isMDXComponent = !0);
    },
  },
]);
