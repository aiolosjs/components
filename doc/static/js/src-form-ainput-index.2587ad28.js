(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    './src/form/ainput/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return A;
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
        p = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        u = t('./src/form/ainput/index.tsx'),
        b = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        c = { width: 120 },
        d = i.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, b, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a, {
              name: 'ainput1',
              label: 'AInput',
              form: n,
              initialValue: 3,
              rules: [{ required: !0, message: ' AInput!' }],
              widgetProps: {
                style: c,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e) {
                  console.log(e.target.value);
                },
              },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(p.a)(Object(p.a)({}, b.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        f = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        j = { width: 300 },
        g = i.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, f, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a.Password, {
              name: 'ainput2',
              label: 'AInput',
              form: n,
              initialValue: 3,
              rules: [{ required: !0, message: ' AInput!' }],
              widgetProps: {
                style: j,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e) {
                  console.log(e.target.value);
                },
              },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(p.a)(Object(p.a)({}, f.wrapperCol), {}, { offset: 2 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        O = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
        h = { width: 300 },
        y = i.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, O, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a.Phone, {
              name: 'ainput.phone',
              label: 'AInput.Phone',
              form: n,
              rules: [{ required: !0, message: '\u8bf7\u8f93\u5165\u624b\u673a\u53f7' }],
              widgetProps: {
                style: h,
                placeholder: '\u8bf7\u8f93\u5165',
                allowClear: !0,
                onChange: function (e) {
                  console.log(e.target.value);
                },
              },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(p.a)(Object(p.a)({}, O.wrapperCol), {}, { offset: 4 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        v = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
        F = { width: 300 },
        C = i.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, v, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a.Number, {
              name: 'ainput.number',
              label: 'AInput.number',
              form: n,
              rules: [{ required: !0, message: '\u8bf7\u8f93\u5165\u6570\u5b57' }],
              widgetProps: {
                style: F,
                placeholder: '\u8bf7\u8f93\u5165\u6570\u5b57',
                onChange: function (e) {
                  console.log(e);
                },
              },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(p.a)(Object(p.a)({}, v.wrapperCol), {}, { offset: 4 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        I = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
        P = { width: 300 },
        w = i.a.create()(function (e) {
          var n = e.form;
          return o.a.createElement(
            i.a,
            Object.assign({}, I, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            o.a.createElement(u.a.TextArea, {
              name: 'ainput.textarea',
              label: 'AInput.textarea',
              form: n,
              rules: [{ required: !0, message: '\u8bf7\u8f93\u5165\u5185\u5bb9' }],
              widgetProps: { style: P, placeholder: '\u8bf7\u8f93\u5165\u5185\u5bb9' },
            }),
            o.a.createElement(
              i.a.Item,
              { wrapperCol: Object(p.a)(Object(p.a)({}, I.wrapperCol), {}, { offset: 4 }) },
              o.a.createElement(m.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        N = {};
      function A(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(l.b)(
          'wrapper',
          Object.assign({}, N, t, { components: n, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'ainput' }, 'AInput'),
          Object(l.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(l.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(l.b)(
            s.a,
            {
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 120,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(e: React.ChangeEvent<HTMLInputElement>) {\n    console.log(e.target.value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput\n        name=\"ainput1\"\n        label=\"AInput\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' AInput!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 120,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(e) {\n    console.log(e.target.value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput\n        name=\"ainput1\"\n        label=\"AInput\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' AInput!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(d, { mdxType: 'Demo1' }),
          ),
          Object(l.b)(
            'h2',
            { id: 'ainputpassword-\u7684\u4f7f\u7528' },
            'AInput.Password \u7684\u4f7f\u7528',
          ),
          Object(l.b)(
            s.a,
            {
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 300,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(e: React.ChangeEvent<HTMLInputElement>) {\n    console.log(e.target.value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput.Password\n        name=\"ainput2\"\n        label=\"AInput\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' AInput!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 300,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(e) {\n    console.log(e.target.value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput.Password\n        name=\"ainput2\"\n        label=\"AInput\"\n        form={form}\n        initialValue={3}\n        rules={[\n          {\n            required: true,\n            message: ' AInput!',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u5bc6\u7801',
              mdxType: 'JackBox',
            },
            Object(l.b)(g, { mdxType: 'Demo2' }),
          ),
          Object(l.b)(
            'h2',
            { id: 'ainputphone-\u7684\u4f7f\u7528' },
            'AInput.Phone \u7684\u4f7f\u7528',
          ),
          Object(l.b)(
            s.a,
            {
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 300,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(e: React.ChangeEvent<HTMLInputElement>) {\n    console.log(e.target.value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput.Phone\n        name=\"ainput.phone\"\n        label=\"AInput.Phone\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u8f93\u5165\u624b\u673a\u53f7',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: {\n    span: 4,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 300,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(e) {\n    console.log(e.target.value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput.Phone\n        name=\"ainput.phone\"\n        label=\"AInput.Phone\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u8f93\u5165\u624b\u673a\u53f7',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u624b\u673a\u53f7',
              mdxType: 'JackBox',
            },
            Object(l.b)(y, { mdxType: 'Demo3' }),
          ),
          Object(l.b)(
            'h2',
            { id: 'ainputnumber-\u7684\u4f7f\u7528' },
            'AInput.Number \u7684\u4f7f\u7528',
          ),
          Object(l.b)(
            s.a,
            {
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 300,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value: number | undefined) {\n    console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput.Number\n        name=\"ainput.number\"\n        label=\"AInput.number\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u8f93\u5165\u6570\u5b57',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165\u6570\u5b57',\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: {\n    span: 4,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 300,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value) {\n    console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput.Number\n        name=\"ainput.number\"\n        label=\"AInput.number\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u8f93\u5165\u6570\u5b57',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165\u6570\u5b57',\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u6570\u5b57',
              mdxType: 'JackBox',
            },
            Object(l.b)(C, { mdxType: 'Demo4' }),
          ),
          Object(l.b)(
            'h2',
            { id: 'ainputtextarea-\u7684\u4f7f\u7528' },
            'AInput.TextArea \u7684\u4f7f\u7528',
          ),
          Object(l.b)(
            s.a,
            {
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 16 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 300,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput.TextArea\n        name=\"ainput.textarea\"\n        label=\"AInput.textarea\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u8f93\u5165\u5185\u5bb9',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165\u5185\u5bb9',\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport AInput from '..';\n\nconst layout = {\n  labelCol: {\n    span: 4,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst styles = {\n  width: 300,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AInput.TextArea\n        name=\"ainput.textarea\"\n        label=\"AInput.textarea\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: '\u8bf7\u8f93\u5165\u5185\u5bb9',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u8f93\u5165\u5185\u5bb9',\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u6570\u5b57',
              mdxType: 'JackBox',
            },
            Object(l.b)(w, { mdxType: 'Demo5' }),
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
                  '[\u53c2\u8003\u6587\u6863]',
                  '(',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      {
                        href:
                          'https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0',
                      },
                    ),
                    'https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0',
                  ),
                  '>)',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
          Object(l.b)(
            'h3',
            { id: 'ainput\u7ec4\u4ef6\u5c5e\u6027' },
            'AInput\u7ec4\u4ef6\u5c5e\u6027',
          ),
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
                  'widgetProps',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Input \u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/input-cn/#Input' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
          Object(l.b)(
            'h3',
            { id: 'ainputpassword\u7ec4\u4ef6\u5c5e\u6027' },
            'AInput.Password\u7ec4\u4ef6\u5c5e\u6027',
          ),
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
                  'widgetProps',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Input \u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      {
                        href:
                          'https://ant.design/components/input-cn/#Input.Password-(3.12.0-%E4%B8%AD%E6%96%B0%E5%A2%9E)',
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
          Object(l.b)(
            'h3',
            { id: 'ainputnumber\u7ec4\u4ef6\u5c5e\u6027' },
            'AInput.Number\u7ec4\u4ef6\u5c5e\u6027',
          ),
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
                  'widgetProps',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Input \u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/input-number-cn/#API' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
          Object(l.b)(
            'h3',
            { id: 'ainputtextarea\u7ec4\u4ef6\u5c5e\u6027' },
            'AInput.TextArea\u7ec4\u4ef6\u5c5e\u6027',
          ),
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
                  'widgetProps',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Input \u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/input-cn/#Input.TextArea' },
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
      A &&
        A === Object(A) &&
        Object.isExtensible(A) &&
        Object.defineProperty(A, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/ainput/index.mdx' },
        }),
        (A.isMDXComponent = !0);
    },
    './src/form/ainput/index.tsx': function (e, n, t) {
      'use strict';
      t('./node_modules/antd/es/form/style/index.js');
      var a = t('./node_modules/antd/es/form/index.js'),
        r =
          (t('./node_modules/antd/es/input/style/index.js'),
          t('./node_modules/antd/es/input/index.js')),
        o = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        l = t('react'),
        s = t.n(l),
        i = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js',
        ),
        m = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js',
        ),
        p = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js',
        ),
        u = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js',
        );
      'undefined' !== typeof AInputPasswordProps &&
        AInputPasswordProps &&
        AInputPasswordProps === Object(AInputPasswordProps) &&
        Object.isExtensible(AInputPasswordProps) &&
        Object.defineProperty(AInputPasswordProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AInputPasswordProps', filename: 'src/form/ainput/password.tsx' },
        });
      var b = (function (e) {
        Object(p.a)(t, e);
        var n = Object(u.a)(t);
        function t() {
          return Object(i.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(m.a)(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  n = e.name,
                  t = e.label,
                  l = e.form,
                  i = e.widgetProps,
                  m = e.formItemProps,
                  p = e.rules,
                  u = e.initialValue,
                  b = e.fieldDecoratorOptions,
                  c = void 0 === b ? {} : b,
                  d = l.getFieldDecorator,
                  f = Object(o.a)({ rules: p, initialValue: u }, c);
                return s.a.createElement(
                  a.a.Item,
                  Object.assign({ label: t }, m),
                  d(n, f)(s.a.createElement(r.a.Password, i)),
                );
              },
            },
          ]),
          t
        );
      })(s.a.PureComponent);
      b.defaultProps = {
        initialValue: void 0,
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      };
      var c = b;
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Password', filename: 'src/form/ainput/password.tsx' },
        });
      var d = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
        ),
        f = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        j = { pattern: /^1[345678]\d{9}$/, message: ' \u683c\u5f0f\u4e0d\u6b63\u786e' },
        g = (function (e) {
          Object(p.a)(t, e);
          var n = Object(u.a)(t);
          function t() {
            return Object(i.a)(this, t), n.apply(this, arguments);
          }
          return (
            Object(m.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.name,
                    t = e.form,
                    a = e.widgetProps,
                    r = void 0 === a ? {} : a,
                    l = e.rules,
                    i = void 0 === l ? [] : l,
                    m = Object(f.a)(e, ['name', 'form', 'widgetProps', 'rules']),
                    p = [j].concat(Object(d.a)(i));
                  return s.a.createElement(
                    P,
                    Object.assign(
                      {
                        name: n,
                        form: t,
                        rules: p,
                        widgetProps: Object(o.a)({ maxLength: 11 }, r),
                      },
                      m,
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(s.a.PureComponent),
        O = g;
      'undefined' !== typeof g &&
        g &&
        g === Object(g) &&
        Object.isExtensible(g) &&
        Object.defineProperty(g, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Phone', filename: 'src/form/ainput/phone.tsx' },
        });
      t('./node_modules/antd/es/input-number/style/index.js');
      var h = t('./node_modules/antd/es/input-number/index.js');
      'undefined' !== typeof AInputNumberProps &&
        AInputNumberProps &&
        AInputNumberProps === Object(AInputNumberProps) &&
        Object.isExtensible(AInputNumberProps) &&
        Object.defineProperty(AInputNumberProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AInputNumberProps', filename: 'src/form/ainput/number.tsx' },
        });
      var y = (function (e) {
        Object(p.a)(t, e);
        var n = Object(u.a)(t);
        function t() {
          return Object(i.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(m.a)(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  n = e.name,
                  t = e.label,
                  r = e.form,
                  l = e.widgetProps,
                  i = e.formItemProps,
                  m = e.rules,
                  p = e.initialValue,
                  u = e.fieldDecoratorOptions,
                  b = void 0 === u ? {} : u,
                  c = r.getFieldDecorator,
                  d = Object(o.a)({ rules: m, initialValue: p }, b);
                return s.a.createElement(
                  a.a.Item,
                  Object.assign({ label: t }, i),
                  c(n, d)(s.a.createElement(h.a, l)),
                );
              },
            },
          ]),
          t
        );
      })(s.a.PureComponent);
      y.defaultProps = {
        initialValue: void 0,
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      };
      var v = y;
      'undefined' !== typeof y &&
        y &&
        y === Object(y) &&
        Object.isExtensible(y) &&
        Object.defineProperty(y, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Number', filename: 'src/form/ainput/number.tsx' },
        }),
        'undefined' !== typeof AInputTextAreaProps &&
          AInputTextAreaProps &&
          AInputTextAreaProps === Object(AInputTextAreaProps) &&
          Object.isExtensible(AInputTextAreaProps) &&
          Object.defineProperty(AInputTextAreaProps, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'AInputTextAreaProps', filename: 'src/form/ainput/textarea.tsx' },
          });
      var F = (function (e) {
        Object(p.a)(t, e);
        var n = Object(u.a)(t);
        function t() {
          return Object(i.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(m.a)(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  n = e.name,
                  t = e.label,
                  l = e.form,
                  i = e.widgetProps,
                  m = e.formItemProps,
                  p = e.rules,
                  u = e.initialValue,
                  b = e.fieldDecoratorOptions,
                  c = void 0 === b ? {} : b,
                  d = l.getFieldDecorator,
                  f = Object(o.a)({ rules: p, initialValue: u }, c);
                return s.a.createElement(
                  a.a.Item,
                  Object.assign({ label: t }, m),
                  d(n, f)(s.a.createElement(r.a.TextArea, i)),
                );
              },
            },
          ]),
          t
        );
      })(s.a.PureComponent);
      F.defaultProps = {
        initialValue: void 0,
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      };
      var C = F;
      'undefined' !== typeof F &&
        F &&
        F === Object(F) &&
        Object.isExtensible(F) &&
        Object.defineProperty(F, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Password', filename: 'src/form/ainput/textarea.tsx' },
        }),
        'undefined' !== typeof AInputProps &&
          AInputProps &&
          AInputProps === Object(AInputProps) &&
          Object.isExtensible(AInputProps) &&
          Object.defineProperty(AInputProps, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'AInputProps', filename: 'src/form/ainput/ainput.tsx' },
          });
      var I = function (e) {
        var n = e.name,
          t = e.label,
          l = e.form,
          i = e.widgetProps,
          m = e.formItemProps,
          p = e.rules,
          u = e.initialValue,
          b = e.fieldDecoratorOptions,
          c = void 0 === b ? {} : b,
          d = l.getFieldDecorator,
          f = Object(o.a)({ rules: p, initialValue: u }, c);
        return s.a.createElement(
          a.a.Item,
          Object.assign({ label: t }, m),
          d(n, f)(s.a.createElement(r.a, i)),
        );
      };
      (I.defaultProps = {
        initialValue: void 0,
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (I.Password = c),
        (I.Phone = O),
        (I.Number = v),
        (I.TextArea = C);
      var P = I;
      I &&
        I === Object(I) &&
        Object.isExtensible(I) &&
        Object.defineProperty(I, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AInput', filename: 'src/form/ainput/ainput.tsx' },
        });
      n.a = P;
      'undefined' !== typeof P &&
        P &&
        P === Object(P) &&
        Object.isExtensible(P) &&
        Object.defineProperty(P, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AInput', filename: 'src/form/ainput/index.tsx' },
        });
    },
  },
]);
