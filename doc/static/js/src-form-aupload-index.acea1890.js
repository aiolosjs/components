(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    './src/form/aupload/demo/index.css': function (e, n, t) {},
    './src/form/aupload/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return P;
        });
      var a = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        o = t('react'),
        r = t.n(o),
        l = t('./node_modules/@mdx-js/react/dist/esm.js'),
        m = t('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        i =
          (t('./node_modules/antd/es/config-provider/style/index.js'),
          t('./node_modules/antd/es/config-provider/index.js')),
        s =
          (t('./node_modules/antd/es/form/style/index.js'),
          t('./node_modules/antd/es/form/index.js')),
        u =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        p = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        c = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        d = t('./node_modules/antd/es/locale/zh_CN.js'),
        b = (t('./src/form/aupload/demo/index.css'), t('./src/form/aupload/index.tsx')),
        f = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        g = s.a.create()(function (e) {
          var n = e.form,
            t = r.a.useState(d.a),
            a = Object(c.a)(t, 1)[0];
          return r.a.createElement(
            i.a,
            { locale: a },
            r.a.createElement(
              s.a,
              Object.assign({}, f, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    n.validateFields(function (e, n) {
                      e || console.log('Received values of form: ', n);
                    });
                },
              }),
              r.a.createElement(b.a, {
                name: 'demo2',
                label: '\u56fe\u7247',
                form: n,
                rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u56fe\u7247' }],
                widgetProps: {
                  listType: 'picture-card',
                  action: 'http://yapi.rebornauto.cn/mock/39/upload',
                  onChange: function (e) {},
                  multiple: !0,
                },
              }),
              r.a.createElement(
                s.a.Item,
                { wrapperCol: Object(p.a)(Object(p.a)({}, f.wrapperCol), {}, { offset: 2 }) },
                r.a.createElement(u.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
              ),
            ),
          );
        }),
        j = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        O = [
          {
            uid: 1e4,
            name: '\u4ee5\u89e3.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: 10010,
            name: '\u62a5\u67e5.png',
            status: 'done',
            url: 'http://dummyimage.com/100x100/f2b379/FFF&text=\u62a5\u67e5.png',
            thumbUrl: 'http://dummyimage.com/100x100/9079f2/FFF&text=\u62a5\u67e5.png',
          },
          {
            uid: 10020,
            name: '\u6797\u6548\u5c42.png',
            status: 'done',
            url: 'http://dummyimage.com/100x100/85f279/FFF&text=\u6797\u6548\u5c42.png',
            thumbUrl: 'http://dummyimage.com/100x100/f279a8/FFF&text=\u6797\u6548\u5c42.png',
          },
        ],
        h = s.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            s.a,
            Object.assign({}, j, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(b.a, {
              name: 'demo2',
              label: '\u56fe\u7247',
              form: n,
              maxFileSize: 1,
              maxFileCount: 5,
              initialValue: O,
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u56fe\u7247' }],
              widgetProps: {
                listType: 'picture-card',
                action: 'http://yapi.rebornauto.cn/mock/39/upload',
                onChange: function (e) {},
                multiple: !0,
              },
            }),
            r.a.createElement(
              s.a.Item,
              { wrapperCol: Object(p.a)(Object(p.a)({}, j.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(u.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        y = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        F = s.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            s.a,
            Object.assign({}, y, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(b.a, {
              name: 'demo2',
              label: '\u56fe\u7247',
              form: n,
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u56fe\u7247' }],
              widgetProps: {
                listType: 'text',
                action: 'http://yapi.rebornauto.cn/mock/39/upload',
                onChange: function (e) {},
                multiple: !0,
              },
            }),
            r.a.createElement(
              s.a.Item,
              { wrapperCol: Object(p.a)(Object(p.a)({}, y.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(u.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        v = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        C = s.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            s.a,
            Object.assign({}, v, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(b.a, {
              name: 'demo2',
              label: '\u56fe\u7247',
              form: n,
              rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u56fe\u7247' }],
              widgetProps: {
                listType: 'text',
                action: 'http://yapi.rebornauto.cn/mock/39/upload',
                onChange: function (e) {},
                multiple: !0,
              },
              customUploadBtn: r.a.createElement(u.a, null, '\u81ea\u5b9a\u4e49\u4e0a\u4f20'),
            }),
            r.a.createElement(
              s.a.Item,
              { wrapperCol: Object(p.a)(Object(p.a)({}, v.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(u.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        x = { labelCol: { span: 2 }, wrapperCol: { span: 16 } },
        N = s.a.create()(function (e) {
          var n = e.form,
            t = r.a.useState(d.a),
            a = Object(c.a)(t, 1)[0];
          return r.a.createElement(
            i.a,
            { locale: a },
            r.a.createElement(
              s.a,
              Object.assign({}, x, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    n.validateFields(function (e, n) {
                      e || console.log('Received values of form: ', n);
                    });
                },
              }),
              r.a.createElement(b.a, {
                name: 'demo2',
                label: '\u56fe\u7247',
                form: n,
                rules: [{ required: !0, message: ' \u8bf7\u9009\u62e9\u56fe\u7247' }],
                widgetProps: {
                  listType: 'picture-card',
                  action: 'http://yapi.rebornauto.cn/mock/39/upload',
                  onChange: function (e) {},
                  multiple: !0,
                  accept: 'image/*',
                },
              }),
              r.a.createElement(
                s.a.Item,
                { wrapperCol: Object(p.a)(Object(p.a)({}, x.wrapperCol), {}, { offset: 2 }) },
                r.a.createElement(u.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
              ),
            ),
          );
        }),
        w = {};
      function P(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(l.b)(
          'wrapper',
          Object.assign({}, w, t, { components: n, mdxType: 'MDXLayout' }),
          Object(l.b)('h1', { id: 'aupload' }, 'AUpload'),
          Object(l.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(l.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(l.b)(
            m.a,
            {
              jsCode:
                "import React from 'react';\nimport { ConfigProvider, Form, Button } from 'antd';\nimport zhCN from 'antd/es/locale/zh_CN';\nimport './index.css';\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const [locale] = React.useState(zhCN);\n\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <ConfigProvider locale={locale}>\n      <Form {...layout} onSubmit={handleSubmit}>\n        <AUpload\n          name=\"demo2\"\n          label=\"\u56fe\u7247\"\n          form={form}\n          rules={[\n            {\n              required: true,\n              message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n            },\n          ]}\n          widgetProps={{\n            listType: 'picture-card',\n            action: 'http://yapi.rebornauto.cn/mock/39/upload',\n            onChange,\n            multiple: true,\n          }}\n        />\n\n        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n          <Button type=\"primary\" htmlType=\"submit\">\n            \u786e\u5b9a\n          </Button>\n        </Form.Item>\n      </Form>\n    </ConfigProvider>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { ConfigProvider, Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport zhCN from 'antd/es/locale/zh_CN';\n\nimport './index.css';\n\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  const [locale] = React.useState(zhCN);\n\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <ConfigProvider locale={locale}>\n      <Form {...layout} onSubmit={handleSubmit}>\n        <AUpload\n          name=\"demo2\"\n          label=\"\u56fe\u7247\"\n          form={form}\n          rules={[\n            {\n              required: true,\n              message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n            },\n          ]}\n          widgetProps={{\n            listType: 'picture-card',\n            action: 'http://yapi.rebornauto.cn/mock/39/upload',\n            onChange,\n            multiple: true,\n          }}\n        />\n\n        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n          <Button type=\"primary\" htmlType=\"submit\">\n            \u786e\u5b9a\n          </Button>\n        </Form.Item>\n      </Form>\n    </ConfigProvider>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(l.b)(g, { mdxType: 'Demo1' }),
          ),
          Object(l.b)(
            'h3',
            { id: '\u521d\u59cb\u5316\u9ed8\u8ba4\u56fe\u7247' },
            '\u521d\u59cb\u5316\u9ed8\u8ba4\u56fe\u7247',
          ),
          Object(l.b)(
            m.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport './index.css';\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\nconst initValue = [\n  {\n    uid: 10000,\n    name: '\u4ee5\u89e3.png',\n    status: 'done',\n    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',\n    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',\n  },\n  {\n    uid: 10010,\n    name: '\u62a5\u67e5.png',\n    status: 'done',\n    url: 'http://dummyimage.com/100x100/f2b379/FFF&text=\u62a5\u67e5.png',\n    thumbUrl: 'http://dummyimage.com/100x100/9079f2/FFF&text=\u62a5\u67e5.png',\n  },\n  {\n    uid: 10020,\n    name: '\u6797\u6548\u5c42.png',\n    status: 'done',\n    url: 'http://dummyimage.com/100x100/85f279/FFF&text=\u6797\u6548\u5c42.png',\n    thumbUrl: 'http://dummyimage.com/100x100/f279a8/FFF&text=\u6797\u6548\u5c42.png',\n  },\n];\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AUpload\n        name=\"demo2\"\n        label=\"\u56fe\u7247\"\n        form={form}\n        maxFileSize={1}\n        maxFileCount={5}\n        initialValue={initValue}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n          },\n        ]}\n        widgetProps={{\n          // style: styles,\n          listType: 'picture-card',\n          action: 'http://yapi.rebornauto.cn/mock/39/upload',\n          onChange,\n          multiple: true,\n        }} // customUploadBtn={<div>123</div>}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport './index.css';\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst initValue = [\n  {\n    uid: 10000,\n    name: '\u4ee5\u89e3.png',\n    status: 'done',\n    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',\n    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',\n  },\n  {\n    uid: 10010,\n    name: '\u62a5\u67e5.png',\n    status: 'done',\n    url: 'http://dummyimage.com/100x100/f2b379/FFF&text=\u62a5\u67e5.png',\n    thumbUrl: 'http://dummyimage.com/100x100/9079f2/FFF&text=\u62a5\u67e5.png',\n  },\n  {\n    uid: 10020,\n    name: '\u6797\u6548\u5c42.png',\n    status: 'done',\n    url: 'http://dummyimage.com/100x100/85f279/FFF&text=\u6797\u6548\u5c42.png',\n    thumbUrl: 'http://dummyimage.com/100x100/f279a8/FFF&text=\u6797\u6548\u5c42.png',\n  },\n];\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AUpload\n        name=\"demo2\"\n        label=\"\u56fe\u7247\"\n        form={form}\n        maxFileSize={1}\n        maxFileCount={5}\n        initialValue={initValue}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n          },\n        ]}\n        widgetProps={{\n          // style: styles,\n          listType: 'picture-card',\n          action: 'http://yapi.rebornauto.cn/mock/39/upload',\n          onChange,\n          multiple: true,\n        }}\n        // customUploadBtn={<div>123</div>}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u521d\u59cb\u5316\u9ed8\u8ba4\u56fe\u7247',
              mdxType: 'JackBox',
            },
            Object(l.b)(h, { mdxType: 'Demo2' }),
          ),
          Object(l.b)(
            'h3',
            { id: '\u8bbe\u7f6e\u4e0a\u4f20\u6309\u94ae' },
            '\u8bbe\u7f6e\u4e0a\u4f20\u6309\u94ae',
          ),
          Object(l.b)(
            m.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport './index.css';\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AUpload\n        name=\"demo2\"\n        label=\"\u56fe\u7247\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n          },\n        ]}\n        widgetProps={{\n          listType: 'text',\n          action: 'http://yapi.rebornauto.cn/mock/39/upload',\n          onChange,\n          multiple: true,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport './index.css';\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AUpload\n        name=\"demo2\"\n        label=\"\u56fe\u7247\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n          },\n        ]}\n        widgetProps={{\n          listType: 'text',\n          action: 'http://yapi.rebornauto.cn/mock/39/upload',\n          onChange,\n          multiple: true,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u8bbe\u7f6e\u4e0a\u4f20\u6309\u94ae',
              mdxType: 'JackBox',
            },
            Object(l.b)(F, { mdxType: 'Demo3' }),
          ),
          Object(l.b)(
            'h3',
            { id: '\u81ea\u5b9a\u4e49\u4e0a\u4f20\u6309\u94ae' },
            '\u81ea\u5b9a\u4e49\u4e0a\u4f20\u6309\u94ae',
          ),
          Object(l.b)(
            m.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport './index.css';\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AUpload\n        name=\"demo2\"\n        label=\"\u56fe\u7247\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n          },\n        ]}\n        widgetProps={{\n          listType: 'text',\n          action: 'http://yapi.rebornauto.cn/mock/39/upload',\n          onChange,\n          multiple: true,\n        }}\n        customUploadBtn={<Button>\u81ea\u5b9a\u4e49\u4e0a\u4f20</Button>}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport './index.css';\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <AUpload\n        name=\"demo2\"\n        label=\"\u56fe\u7247\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n          },\n        ]}\n        widgetProps={{\n          listType: 'text',\n          action: 'http://yapi.rebornauto.cn/mock/39/upload',\n          onChange,\n          multiple: true,\n        }}\n        customUploadBtn={<Button>\u81ea\u5b9a\u4e49\u4e0a\u4f20</Button>}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u81ea\u5b9a\u4e49\u4e0a\u4f20\u6309\u94ae',
              mdxType: 'JackBox',
            },
            Object(l.b)(C, { mdxType: 'Demo4' }),
          ),
          Object(l.b)(
            'h3',
            { id: '\u9650\u5236\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f' },
            '\u9650\u5236\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f',
          ),
          Object(l.b)(
            m.a,
            {
              jsCode:
                "import React from 'react';\nimport { ConfigProvider, Form, Button } from 'antd';\nimport zhCN from 'antd/es/locale/zh_CN';\nimport './index.css';\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 16,\n  },\n};\n\nconst WidgetWithForm = ({ form }) => {\n  const [locale] = React.useState(zhCN);\n\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <ConfigProvider locale={locale}>\n      <Form {...layout} onSubmit={handleSubmit}>\n        <AUpload\n          name=\"demo2\"\n          label=\"\u56fe\u7247\"\n          form={form}\n          rules={[\n            {\n              required: true,\n              message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n            },\n          ]}\n          widgetProps={{\n            listType: 'picture-card',\n            action: 'http://yapi.rebornauto.cn/mock/39/upload',\n            onChange,\n            multiple: true,\n            accept: 'image/*',\n          }}\n        />\n\n        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n          <Button type=\"primary\" htmlType=\"submit\">\n            \u786e\u5b9a\n          </Button>\n        </Form.Item>\n      </Form>\n    </ConfigProvider>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { ConfigProvider, Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport zhCN from 'antd/es/locale/zh_CN';\n\nimport './index.css';\n\nimport AUpload from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 16 },\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  const [locale] = React.useState(zhCN);\n  function onChange(value) {\n    // console.log(value);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <ConfigProvider locale={locale}>\n      <Form {...layout} onSubmit={handleSubmit}>\n        <AUpload\n          name=\"demo2\"\n          label=\"\u56fe\u7247\"\n          form={form}\n          rules={[\n            {\n              required: true,\n              message: ' \u8bf7\u9009\u62e9\u56fe\u7247',\n            },\n          ]}\n          widgetProps={{\n            listType: 'picture-card',\n            action: 'http://yapi.rebornauto.cn/mock/39/upload',\n            onChange,\n            multiple: true,\n            accept: 'image/*',\n          }}\n        />\n\n        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n          <Button type=\"primary\" htmlType=\"submit\">\n            \u786e\u5b9a\n          </Button>\n        </Form.Item>\n      </Form>\n    </ConfigProvider>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9650\u5236\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f',
              mdxType: 'JackBox',
            },
            Object(l.b)(N, { mdxType: 'Demo5' }),
          ),
          Object(l.b)('h2', { id: 'api' }, 'API'),
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
                  'widgetProps',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7ec4\u4ef6\u9ed8\u8ba4\u5c5e\u6027 ',
                  Object(l.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/upload-cn/#API' },
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
                  'maxFileSize',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u6587\u4ef6\u4e0a\u4f20\u6700\u5927\u6570\u91cf,\u9ed8\u8ba410',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'maxFileCount',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u6587\u4ef6\u4e0a\u4f20\u6700\u5927size,\u9ed8\u8ba410M',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'number'),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(l.b)(
                'tr',
                { parentName: 'tbody' },
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'customUploadBtn',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u81ea\u5b9a\u4e49\u4e0a\u4f20\u6309\u94ae',
                ),
                Object(l.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'React.ReactNode',
                ),
                Object(l.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
        );
      }
      P &&
        P === Object(P) &&
        Object.isExtensible(P) &&
        Object.defineProperty(P, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/form/aupload/index.mdx' },
        }),
        (P.isMDXComponent = !0);
    },
    './src/form/aupload/index.tsx': function (e, n, t) {
      'use strict';
      t('./node_modules/antd/es/form/style/index.js');
      var a = t('./node_modules/antd/es/form/index.js'),
        o =
          (t('./node_modules/antd/es/upload/style/index.js'),
          t('./node_modules/antd/es/upload/index.js')),
        r = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        l =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        m =
          (t('./node_modules/antd/es/icon/style/index.js'),
          t('./node_modules/antd/es/icon/index.js')),
        i =
          (t('./node_modules/antd/es/modal/style/index.js'),
          t('./node_modules/antd/es/modal/index.js')),
        s =
          (t('./node_modules/antd/es/message/style/index.js'),
          t('./node_modules/antd/es/message/index.js')),
        u = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        p = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        c = t('react'),
        d = t.n(c),
        b = t('./node_modules/lightbox-component2/lib/index.js'),
        f = t.n(b);
      function g(e) {
        return e
          .filter(function (e) {
            return !e.errorFlag;
          })
          .map(function (e) {
            return '' === e.thumbUrl && e.response && (e.url = e.response.body), e;
          });
      }
      'undefined' !== typeof AUploadProps &&
        AUploadProps &&
        AUploadProps === Object(AUploadProps) &&
        Object.isExtensible(AUploadProps) &&
        Object.defineProperty(AUploadProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AUploadProps', filename: 'src/form/aupload/index.tsx' },
        });
      var j = function (e) {
        var n = e.name,
          t = e.label,
          b = e.form,
          j = e.widgetProps,
          O = void 0 === j ? {} : j,
          h = e.formItemProps,
          y = e.rules,
          F = e.initialValue,
          v = e.fieldDecoratorOptions,
          C = void 0 === v ? {} : v,
          x = e.maxFileSize,
          N = void 0 === x ? 10 : x,
          w = e.maxFileCount,
          P = void 0 === w ? 10 : w,
          E = e.customUploadBtn,
          U = O.listType,
          T = void 0 === U ? 'picture' : U,
          R = Object(p.a)(O, ['listType']),
          S = Object(c.useRef)(),
          I = Object(c.useRef)(0),
          W = Object(c.useState)([]),
          B = Object(u.a)(W, 2),
          _ = B[0],
          A = B[1];
        function k(e) {
          return e
            .filter(function (e) {
              return 'done' === e.status;
            })
            .map(function (e) {
              return { uid: e.uid, src: e.response ? e.response.body : e.url, title: e.name };
            });
        }
        Object(c.useEffect)(function () {
          Array.isArray(F) && ((I.current = F.length), A(F));
        }, []);
        var D = b.getFieldDecorator,
          z = Object(r.a)(
            {
              rules: y,
              initialValue: F,
              valuePropName: 'fileList',
              getValueFromEvent: function (e) {
                if (Array.isArray(e)) {
                  var n = g(e);
                  return (I.current = n.length), A(n), g(e);
                }
                var t = e.file,
                  a = e.fileList;
                'done' === t.status
                  ? s.a.success(''.concat(t.name, ' \u4e0a\u4f20\u6210\u529f'))
                  : 'error' === t.status &&
                    s.a.error(''.concat(t.name, ' \u4e0a\u4f20\u5931\u8d25'));
                var o = g(a);
                return (I.current = o.length), A(o), o;
              },
            },
            C,
          ),
          V = Object(r.a)(
            {
              beforeUpload: function (e, n) {
                var t = n.length,
                  a = 1024 * N * 1024;
                if (e.size > a)
                  return (
                    s.a.warning('\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7'.concat(N, 'M')),
                    (e.errorFlag = !0),
                    !1
                  );
                var o = I.current + t - P,
                  r = n.findIndex(function (n) {
                    return n.uid === e.uid;
                  });
                if (o > 0)
                  for (var l = t - o, m = 0; m < t; m += 1)
                    return (
                      !(r >= l) ||
                      (s.a.warning(
                        ''
                          .concat(e.name, '\u4e0d\u80fd\u4e0a\u4f20\uff0c\u6700\u591a\u4e0a\u4f20')
                          .concat(P, '\u5f20'),
                      ),
                      (e.errorFlag = !0),
                      !1)
                    );
                return !0;
              },
              onRemove: function () {
                return new Promise(function (e) {
                  i.a.confirm({
                    title: '\u5220\u9664',
                    content: '\u786e\u8ba4\u8981\u5220\u9664\u8be5\u6587\u4ef6\u5417\uff1f',
                    okText: '\u786e\u8ba4',
                    okType: 'danger',
                    cancelText: '\u53d6\u6d88',
                    onOk: function () {
                      s.a.success('\u5220\u9664\u6210\u529f'), e(!0);
                    },
                    onCancel: function () {
                      e(!1);
                    },
                  });
                });
              },
              listType: T,
              onPreview: function (e) {
                if ('text' === T) return null;
                var n = e.response ? e.response.body : e.url;
                if (
                  /^https?.*(gif|png|jpe?g|GIF|PNG|JPE?G)$/.test(n) ||
                  (function (e) {
                    return /^https?.*(pdf|PDF)$/.test(e);
                  })(n)
                ) {
                  var t = k(_).findIndex(function (n) {
                    return n.uid === e.uid;
                  });
                  S.current && S.current.toggleLightbox(-1 === t ? 0 : t);
                } else window.open(n);
              },
              showUploadList: { showPreviewIcon: !0, showRemoveIcon: !0, showDownloadIcon: !1 },
            },
            R,
          ),
          q = Object(c.useMemo)(
            function () {
              return k(_);
            },
            [_],
          );
        return d.a.createElement(
          d.a.Fragment,
          null,
          d.a.createElement(
            a.a.Item,
            Object.assign({ label: t }, h),
            D(
              n,
              z,
            )(
              d.a.createElement(
                o.a,
                V,
                'text' === T || 'picture' === T
                  ? E ||
                      d.a.createElement(
                        'div',
                        null,
                        d.a.createElement(
                          l.a,
                          null,
                          d.a.createElement(m.a, { type: 'upload' }),
                          ' \u4e0a\u4f20\u6587\u4ef6',
                        ),
                      )
                  : 'picture-card' === T
                  ? E ||
                    d.a.createElement(
                      'div',
                      null,
                      d.a.createElement(m.a, { type: 'plus' }),
                      d.a.createElement('div', null, '\u4e0a\u4f20'),
                    )
                  : null,
              ),
            ),
          ),
          q.length > 0
            ? d.a.createElement(f.a, {
                ref: S,
                images: q,
                renderImageFunc: function (e, n, t, a, o) {
                  return d.a.createElement('img', {
                    alt: '',
                    key: e,
                    src: n.src,
                    className: 'img-circle',
                    style: { width: a, height: o, display: 'none' },
                    onClick: t.bind(null, e),
                  });
                },
                renderDescriptionFunc: function () {
                  return null;
                },
              })
            : null,
        );
      };
      (j.defaultProps = {
        initialValue: void 0,
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (n.a = j),
        j &&
          j === Object(j) &&
          Object.isExtensible(j) &&
          Object.defineProperty(j, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'AUpload', filename: 'src/form/aupload/index.tsx' },
          });
    },
  },
]);
