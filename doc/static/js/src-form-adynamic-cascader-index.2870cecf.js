(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    './src/form/acascader/index.tsx': function (e, n, t) {
      'use strict';
      t('./node_modules/antd/es/form/style/index.js');
      var a = t('./node_modules/antd/es/form/index.js'),
        o =
          (t('./node_modules/antd/es/cascader/style/index.js'),
          t('./node_modules/antd/es/cascader/index.js')),
        r = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        i = t('react'),
        l = t.n(i);
      'undefined' !== typeof ACascaderProps &&
        ACascaderProps &&
        ACascaderProps === Object(ACascaderProps) &&
        Object.isExtensible(ACascaderProps) &&
        Object.defineProperty(ACascaderProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ACascaderProps', filename: 'src/form/acascader/index.tsx' },
        });
      var s = function (e) {
        var n = e.name,
          t = e.label,
          s = e.form,
          c = e.selectOptions,
          m = e.widgetProps,
          d = e.formatter,
          u = e.formItemProps,
          p = e.rules,
          b = e.initialValue,
          f = e.fieldDecoratorOptions,
          y = void 0 === f ? {} : f,
          g = s.getFieldDecorator,
          O = Object(r.a)({ rules: p, initialValue: b }, y);
        var h = Object(i.useMemo)(
          function () {
            return (e = c), d ? d(e) : e;
            var e;
          },
          [c],
        );
        return l.a.createElement(
          a.a.Item,
          Object.assign({ label: t }, u),
          g(n, O)(l.a.createElement(o.a, Object.assign({ options: h }, m))),
        );
      };
      (s.defaultProps = {
        initialValue: void 0,
        selectOptions: [],
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
            value: { name: 'ACascader', filename: 'src/form/acascader/index.tsx' },
          });
    },
    './src/form/adynamic-cascader/index.mdx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return A;
        });
      var a = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        o = t('react'),
        r = t.n(o),
        i = t('./node_modules/@mdx-js/react/dist/esm.js'),
        l = t('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        s =
          (t('./node_modules/antd/es/form/style/index.js'),
          t('./node_modules/antd/es/form/index.js')),
        c =
          (t('./node_modules/antd/es/button/style/index.js'),
          t('./node_modules/antd/es/button/index.js')),
        m = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        d = t('./src/form/adynamic-cascader/index.tsx'),
        u = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        p = { width: 260 },
        b = s.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            s.a,
            Object.assign({}, u, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(d.a, {
              name: 'demo1',
              label: '\u5730\u5740',
              form: n,
              rules: [{ required: !0, message: ' ADynamicCascader!' }],
              loadDataOptions: [
                { action: 'http://yapi.rebornauto.cn/mock/39/province_1' },
                { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },
                { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },
              ],
              widgetProps: {
                style: p,
                placeholder: '\u8bf7\u9009\u62e9\u7701\u5e02\u533a',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, u.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        f = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        y = { width: 260 },
        g = s.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            s.a,
            Object.assign({}, f, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(d.a, {
              name: 'demo2',
              label: '\u5730\u5740',
              form: n,
              rules: [{ required: !0, message: ' ADynamicCascader!' }],
              initialValue: [10004, 20004, 30002],
              loadDataOptions: [
                { action: 'http://yapi.rebornauto.cn/mock/39/province_1' },
                { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },
                { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },
              ],
              widgetProps: {
                style: y,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, f.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        O = [
          { value: '10000', label: '\u6c5f\u82cf\u7701', isLeaf: !1 },
          { value: '10001', label: '\u6e56\u5357\u7701', isLeaf: !1 },
          { value: '10002', label: '\u4e91\u5357\u7701', isLeaf: !1 },
          { value: '10003', label: '\u8d35\u5dde\u7701', isLeaf: !1 },
          { value: '10004', label: '\u5929\u6d25', isLeaf: !1 },
          { value: '10005', label: '\u6e56\u5317\u7701', isLeaf: !1 },
        ],
        h = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        j = { width: 260 },
        v = s.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            s.a,
            Object.assign({}, h, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(d.a, {
              name: 'demo3',
              label: '\u5730\u5740',
              form: n,
              rules: [{ required: !0, message: ' ADynamicCascader!' }],
              selectOptions: O,
              loadDataOptions: [
                null,
                { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },
                { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },
              ],
              widgetProps: {
                style: j,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, h.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        C = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        F = { width: 260 },
        w = s.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            s.a,
            Object.assign({}, C, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(d.a, {
              name: 'demo4',
              label: '\u5730\u5740',
              form: n,
              rules: [{ required: !0, message: ' ADynamicCascader!' }],
              loadDataOptions: [
                { action: 'http://yapi.rebornauto.cn/mock/39/province_1' },
                { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },
                { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },
              ],
              customLoadDataParams: function (e, n) {
                if ((console.log('selectedOptions', e), 2 === n && e.length > 0)) {
                  var t = e[0],
                    a = t.value,
                    o = t.code;
                  return 'http://yapi.rebornauto.cn/mock/39/city_1?id='
                    .concat(a, '&code=')
                    .concat(o);
                }
              },
              widgetProps: {
                style: F,
                placeholder: '\u8bf7\u9009\u62e9',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, C.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        D = t('./node_modules/umi-request/dist/index.es.js'),
        x = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        _ = { width: 260 },
        k = function (e) {
          return D.a.get(e).then(function (e) {
            return e;
          });
        },
        P = s.a.create()(function (e) {
          var n = e.form;
          return r.a.createElement(
            s.a,
            Object.assign({}, x, {
              onSubmit: function (e) {
                e.preventDefault(),
                  n.validateFields(function (e, n) {
                    e || console.log('Received values of form: ', n);
                  });
              },
            }),
            r.a.createElement(d.a, {
              name: 'demo5',
              label: '\u5730\u5740',
              form: n,
              rules: [{ required: !0, message: ' ADynamicCascader!' }],
              loadDataOptions: [
                {
                  action:
                    'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',
                },
                {
                  action:
                    'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',
                },
                {
                  action:
                    'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',
                },
              ],
              asyncFn: k,
              formatter: function (e) {
                return e.districts[0].districts.map(function (e) {
                  var n = e.name,
                    t = e.adcode;
                  return 'district' === e.level
                    ? { label: n, value: t }
                    : { label: n, value: t, isLeaf: !1 };
                });
              },
              customLoadDataParams: function (e, n) {
                if (1 !== n && e.length > 0) {
                  var t = e[n - 2].value;
                  return 'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429&keywords='.concat(
                    t,
                  );
                }
              },
              widgetProps: {
                style: _,
                placeholder: '\u8bf7\u9009\u62e9\u7701\u5e02\u533a',
                allowClear: !0,
                onChange: function (e, n) {
                  console.log(e, n);
                },
              },
            }),
            r.a.createElement(
              s.a.Item,
              { wrapperCol: Object(m.a)(Object(m.a)({}, x.wrapperCol), {}, { offset: 2 }) },
              r.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        N = {};
      function A(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(i.b)(
          'wrapper',
          Object.assign({}, N, t, { components: n, mdxType: 'MDXLayout' }),
          Object(i.b)('h1', { id: 'adynamiccascader' }, 'ADynamicCascader'),
          Object(i.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(i.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(i.b)(
            l.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicCascader from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo1\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        loadDataOptions={[\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/province_1',\n          },\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/city_1',\n            queryKey: 'id',\n          },\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/region_1',\n            queryKey: 'id',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u7701\u5e02\u533a',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ADynamicCascader from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo1\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        loadDataOptions={[\n          { action: 'http://yapi.rebornauto.cn/mock/39/province_1' },\n          { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },\n          { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u7701\u5e02\u533a',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(i.b)(b, { mdxType: 'Demo1' }),
          ),
          Object(i.b)(
            'h2',
            { id: '\u8bbe\u5b9a\u521d\u59cb\u503c' },
            '\u8bbe\u5b9a\u521d\u59cb\u503c',
          ),
          Object(i.b)(
            l.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicCascader from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo2\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        initialValue={[10004, 20004, 30002]}\n        loadDataOptions={[\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/province_1',\n          },\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/city_1',\n            queryKey: 'id',\n          },\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/region_1',\n            queryKey: 'id',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ADynamicCascader from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo2\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        initialValue={[10004, 20004, 30002]}\n        loadDataOptions={[\n          { action: 'http://yapi.rebornauto.cn/mock/39/province_1' },\n          { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },\n          { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u8bbe\u5b9a\u521d\u59cb\u503c',
              mdxType: 'JackBox',
            },
            Object(i.b)(g, { mdxType: 'Demo2' }),
          ),
          Object(i.b)(
            'h2',
            { id: '\u9ed8\u8ba4\u521d\u59cb\u7b2c\u4e00\u5217' },
            '\u9ed8\u8ba4\u521d\u59cb\u7b2c\u4e00\u5217',
          ),
          Object(i.b)(
            l.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicCascader from '..';\n\nconst selectOptions = [\n  {\n    value: '10000',\n    label: '\u6c5f\u82cf\u7701',\n    isLeaf: false,\n  },\n  {\n    value: '10001',\n    label: '\u6e56\u5357\u7701',\n    isLeaf: false,\n  },\n  {\n    value: '10002',\n    label: '\u4e91\u5357\u7701',\n    isLeaf: false,\n  },\n  {\n    value: '10003',\n    label: '\u8d35\u5dde\u7701',\n    isLeaf: false,\n  },\n  {\n    value: '10004',\n    label: '\u5929\u6d25',\n    isLeaf: false,\n  },\n  {\n    value: '10005',\n    label: '\u6e56\u5317\u7701',\n    isLeaf: false,\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo3\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        loadDataOptions={[\n          null,\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/city_1',\n            queryKey: 'id',\n          },\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/region_1',\n            queryKey: 'id',\n          },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ADynamicCascader from '..';\n\nconst selectOptions = [\n  {\n    value: '10000',\n    label: '\u6c5f\u82cf\u7701',\n    isLeaf: false,\n  },\n  {\n    value: '10001',\n    label: '\u6e56\u5357\u7701',\n    isLeaf: false,\n  },\n  {\n    value: '10002',\n    label: '\u4e91\u5357\u7701',\n    isLeaf: false,\n  },\n  {\n    value: '10003',\n    label: '\u8d35\u5dde\u7701',\n    isLeaf: false,\n  },\n  {\n    value: '10004',\n    label: '\u5929\u6d25',\n    isLeaf: false,\n  },\n  {\n    value: '10005',\n    label: '\u6e56\u5317\u7701',\n    isLeaf: false,\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo3\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        selectOptions={selectOptions}\n        loadDataOptions={[\n          null,\n          { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },\n          { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },\n        ]}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u9ed8\u8ba4\u521d\u59cb\u7b2c\u4e00\u5217',
              mdxType: 'JackBox',
            },
            Object(i.b)(v, { mdxType: 'Demo3' }),
          ),
          Object(i.b)(
            'h2',
            { id: '\u81ea\u5b9a\u4e49\u6570\u636e\u52a0\u8f7d-url-\u548c\u53c2\u6570' },
            '\u81ea\u5b9a\u4e49\u6570\u636e\u52a0\u8f7d url \u548c\u53c2\u6570',
          ),
          Object(i.b)(
            l.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ADynamicCascader from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo4\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        loadDataOptions={[\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/province_1',\n          },\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/city_1',\n            queryKey: 'id',\n          },\n          {\n            action: 'http://yapi.rebornauto.cn/mock/39/region_1',\n            queryKey: 'id',\n          },\n        ]}\n        customLoadDataParams={(selectedOptions, position) => {\n          console.log('selectedOptions', selectedOptions);\n\n          if (position === 2 && selectedOptions.length > 0) {\n            const { value, code } = selectedOptions[0];\n            return `http://yapi.rebornauto.cn/mock/39/city_1?id=${value}&code=${code}`;\n          }\n        }}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ADynamicCascader from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo4\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        loadDataOptions={[\n          { action: 'http://yapi.rebornauto.cn/mock/39/province_1' },\n          { action: 'http://yapi.rebornauto.cn/mock/39/city_1', queryKey: 'id' },\n          { action: 'http://yapi.rebornauto.cn/mock/39/region_1', queryKey: 'id' },\n        ]}\n        customLoadDataParams={(selectedOptions, position) => {\n          console.log('selectedOptions', selectedOptions);\n          if (position === 2 && selectedOptions.length > 0) {\n            const { value, code } = selectedOptions[0];\n            return `http://yapi.rebornauto.cn/mock/39/city_1?id=${value}&code=${code}`;\n          }\n        }}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u81ea\u5b9a\u4e49\u6570\u636e\u52a0\u8f7durl\u548c\u53c2\u6570',
              mdxType: 'JackBox',
            },
            Object(i.b)(w, { mdxType: 'Demo4' }),
          ),
          Object(i.b)('h2', { id: 'formatter-loaddata' }, 'formatter loadData'),
          Object(i.b)(
            l.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport request from 'umi-request';\nimport ADynamicCascader from '..';\n\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: 260,\n};\n\nconst fetch = url => request.get(url).then(res => res);\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  function formatter(data) {\n    return data.districts[0].districts.map(({ name, adcode, level }) => {\n      if (level === 'district') {\n        return {\n          label: name,\n          value: adcode,\n        };\n      }\n\n      return {\n        label: name,\n        value: adcode,\n        isLeaf: false,\n      };\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo5\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        loadDataOptions={[\n          {\n            action:\n              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',\n          },\n          {\n            action:\n              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429', // queryKey: 'keywords',\n          },\n          {\n            action:\n              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429', // queryKey: 'keywords',\n          },\n        ]}\n        asyncFn={fetch}\n        formatter={formatter}\n        customLoadDataParams={(selectedOptions, position) => {\n          // console.log(selectedOptions,position)\n          if (position !== 1 && selectedOptions.length > 0) {\n            const { value } = selectedOptions[position - 2];\n            return `https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429&keywords=${value}`;\n          }\n        }}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u7701\u5e02\u533a',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport request from 'umi-request';\nimport { FormComponentProps } from 'antd/es/form';\nimport { CascaderOptionType } from 'antd/lib/cascader';\nimport ADynamicCascader from '..';\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: 260,\n};\n\nconst fetch: <T>(url: string) => Promise<T> = url => request.get(url).then(res => res);\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  function formatter(data: any): CascaderOptionType[] {\n    return data.districts[0].districts.map(({ name, adcode, level }) => {\n      if (level === 'district') {\n        return { label: name, value: adcode };\n      }\n      return { label: name, value: adcode, isLeaf: false };\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ADynamicCascader\n        name=\"demo5\"\n        label=\"\u5730\u5740\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ADynamicCascader!',\n          },\n        ]}\n        loadDataOptions={[\n          {\n            action:\n              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',\n          },\n          {\n            action:\n              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',\n            // queryKey: 'keywords',\n          },\n          {\n            action:\n              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429',\n            // queryKey: 'keywords',\n          },\n        ]}\n        asyncFn={fetch}\n        formatter={formatter}\n        customLoadDataParams={(selectedOptions, position) => {\n          // console.log(selectedOptions,position)\n          if (position !== 1 && selectedOptions.length > 0) {\n            const { value } = selectedOptions[position - 2];\n            return `https://restapi.amap.com/v3/config/district?subdistrict=1&key=ad951c7566a551545e691d472be31429&keywords=${value}`;\n          }\n        }}\n        widgetProps={{\n          style: styles,\n          placeholder: '\u8bf7\u9009\u62e9\u7701\u5e02\u533a',\n          allowClear: true,\n          onChange,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: 'formatter loadData',
              mdxType: 'JackBox',
            },
            Object(i.b)(P, { mdxType: 'Demo5' }),
          ),
          Object(i.b)('h3', { id: '\u516c\u5171\u5c5e\u6027' }, '\u516c\u5171\u5c5e\u6027'),
          Object(i.b)(
            'table',
            null,
            Object(i.b)(
              'thead',
              { parentName: 'table' },
              Object(i.b)(
                'tr',
                { parentName: 'thead' },
                Object(i.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u53c2\u6570',
                ),
                Object(i.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u8bf4\u660e',
                ),
                Object(i.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7c7b\u578b',
                ),
                Object(i.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'required'),
              ),
            ),
            Object(i.b)(
              'tbody',
              { parentName: 'table' },
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'name'),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'form \u4e2d id',
                ),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'form'),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.create()(\u7ec4\u4ef6) \u9ad8\u9636\u5c5e\u6027',
                ),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'AntdFormItemProps',
                ),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'label'),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.Item label \u5c5e\u6027',
                ),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'string ',
                  '|',
                  ' ReactNode',
                ),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'initialValue',
                ),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u5b50\u8282\u70b9\u7684\u521d\u59cb\u503c\uff0c\u7c7b\u578b\u3001\u53ef\u9009\u503c\u5747\u7531\u5b50\u8282\u70b9\u51b3\u5b9a',
                ),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'any'),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'rules'),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u6821\u9a8c\u89c4\u5219, ',
                  Object(i.b)(
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
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object[]'),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'formItemProps',
                ),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'Form.Item \u5c5e\u6027',
                  Object(i.b)(
                    'a',
                    Object.assign(
                      { parentName: 'td' },
                      { href: 'https://ant.design/components/form-cn/#Form.Item' },
                    ),
                    '\u53c2\u8003\u6587\u6863',
                  ),
                ),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'fieldDecoratorOptions',
                ),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'getFieldDecorator options \u53c2\u6570 ',
                  Object(i.b)(
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
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'object'),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
            ),
          ),
          Object(i.b)('h3', { id: '\u7ec4\u4ef6\u5c5e\u6027' }, '\u7ec4\u4ef6\u5c5e\u6027'),
          Object(i.b)(
            'table',
            null,
            Object(i.b)(
              'thead',
              { parentName: 'table' },
              Object(i.b)(
                'tr',
                { parentName: 'thead' },
                Object(i.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u53c2\u6570',
                ),
                Object(i.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u8bf4\u660e',
                ),
                Object(i.b)(
                  'th',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u7c7b\u578b',
                ),
                Object(i.b)('th', Object.assign({ parentName: 'tr' }, { align: null }), 'required'),
              ),
            ),
            Object(i.b)(
              'tbody',
              { parentName: 'table' },
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'queryKey'),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u67e5\u8be2\u5b57\u6bb5\u540d',
                ),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'string'),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'false'),
              ),
              Object(i.b)(
                'tr',
                { parentName: 'tbody' },
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'action'),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u63a5\u53e3\u5730\u5740,\u5982\u679c\u4e3anull \uff0c\u5219\u4e0d\u4f1a\u83b7\u53d6\u6570\u636e',
                ),
                Object(i.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'string',
                  '|',
                  'null',
                ),
                Object(i.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
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
          value: { name: 'MDXContent', filename: 'src/form/adynamic-cascader/index.mdx' },
        }),
        (A.isMDXComponent = !0);
    },
    './src/form/adynamic-cascader/index.tsx': function (e, n, t) {
      'use strict';
      var a = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
        ),
        o = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js',
        ),
        r = t.n(o),
        i = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js',
        ),
        l = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        s = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        c = t(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        m = t('react'),
        d = t.n(m),
        u = t('./src/utils.ts'),
        p = t('./src/form/acascader/index.tsx');
      'undefined' !== typeof LoadDataOptions &&
        LoadDataOptions &&
        LoadDataOptions === Object(LoadDataOptions) &&
        Object.isExtensible(LoadDataOptions) &&
        Object.defineProperty(LoadDataOptions, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'LoadDataOptions', filename: 'src/form/adynamic-cascader/index.tsx' },
        }),
        'undefined' !== typeof ADynamicCascaderProps &&
          ADynamicCascaderProps &&
          ADynamicCascaderProps === Object(ADynamicCascaderProps) &&
          Object.isExtensible(ADynamicCascaderProps) &&
          Object.defineProperty(ADynamicCascaderProps, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ADynamicCascaderProps',
              filename: 'src/form/adynamic-cascader/index.tsx',
            },
          });
      var b = function e(n, t, a) {
          return n.map(function (n) {
            return (
              n.value === a ? (n.children = t) : n.children && e(n.children, t, a),
              Object(c.a)({}, n)
            );
          });
        },
        f = function (e) {
          var n = e.name,
            t = e.form,
            o = e.initialValue,
            f = e.widgetProps,
            y = e.loadDataOptions,
            g = void 0 === y ? [] : y,
            O = e.formatter,
            h = e.asyncFn,
            j = e.customLoadDataParams,
            v = e.selectOptions,
            C = void 0 === v ? [] : v,
            F = Object(s.a)(e, [
              'name',
              'form',
              'initialValue',
              'widgetProps',
              'loadDataOptions',
              'formatter',
              'asyncFn',
              'customLoadDataParams',
              'selectOptions',
            ]),
            w = Object(m.useState)(C),
            D = Object(l.a)(w, 2),
            x = D[0],
            _ = D[1];
          function k(e) {
            return P.apply(this, arguments);
          }
          function P() {
            return (P = Object(i.a)(
              r.a.mark(function e(n) {
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt('return', h ? h(n) : Object(u.a)(n));
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )).apply(this, arguments);
          }
          function N(e) {
            return O ? O(e) : e;
          }
          function A() {
            return (A = Object(i.a)(
              r.a.mark(function e(n) {
                var t, o, i, l, s, c, m, d, u;
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!Array.isArray(n)) {
                          e.next = 17;
                          break;
                        }
                        if (
                          ((t = n.length - 1),
                          ((o = n[t]).loading = !0),
                          (i = o.value),
                          !(l = g[t + 1]))
                        ) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (s = l.action),
                          (c = l.queryKey),
                          (m = s),
                          c && (m = ''.concat(s, '?').concat(c, '=').concat(i)),
                          j && (d = j(n, n.length + 1)) && (m = d),
                          (e.next = 13),
                          k(m)
                        );
                      case 13:
                        (u = e.sent),
                          (o.loading = !1),
                          (o.children = N(u)),
                          _(function (e) {
                            return Object(a.a)(e);
                          });
                      case 17:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )).apply(this, arguments);
          }
          return (
            Object(m.useEffect)(function () {
              Object(i.a)(
                r.a.mark(function e() {
                  var n, t, a, i, l, s, c;
                  return r.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(n = g[0])) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (t = n.action),
                            (a = t),
                            j && (i = j([], 1)) && (a = i),
                            (e.next = 7),
                            k(a)
                          );
                        case 7:
                          (l = e.sent), _(N(l));
                        case 9:
                          if (!(Array.isArray(o) && o.length > 1)) {
                            e.next = 17;
                            break;
                          }
                          (s = r.a.mark(function e(n) {
                            var t, a, i, l, s, c;
                            return r.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!(t = g[n])) {
                                      e.next = 10;
                                      break;
                                    }
                                    return (
                                      (a = t.action),
                                      (i = t.queryKey),
                                      (l = a),
                                      i &&
                                        (l = ''
                                          .concat(a, '?')
                                          .concat(i, '=')
                                          .concat(o[n - 1])),
                                      j && (s = j([], n + 1)) && (l = s),
                                      (e.next = 8),
                                      k(l)
                                    );
                                  case 8:
                                    (c = e.sent),
                                      _(function (e) {
                                        var t = N(c);
                                        return b(e, t, o[n - 1]);
                                      });
                                  case 10:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          })),
                            (c = 1);
                        case 12:
                          if (!(c <= o.length)) {
                            e.next = 17;
                            break;
                          }
                          return e.delegateYield(s(c), 't0', 14);
                        case 14:
                          c++, (e.next = 12);
                          break;
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            }, []),
            d.a.createElement(
              p.a,
              Object.assign(
                {
                  form: t,
                  name: n,
                  selectOptions: x,
                  initialValue: o,
                  widgetProps: Object(c.a)(
                    {
                      loadData: function (e) {
                        return A.apply(this, arguments);
                      },
                    },
                    f,
                  ),
                },
                F,
              ),
            )
          );
        };
      (f.defaultProps = { initialValue: void 0, widgetProps: {} }),
        (n.a = f),
        f &&
          f === Object(f) &&
          Object.isExtensible(f) &&
          Object.defineProperty(f, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ADynamicCascader', filename: 'src/form/adynamic-cascader/index.tsx' },
          });
    },
    './src/utils.ts': function (e, n, t) {
      'use strict';
      t.d(n, 'a', function () {
        return o;
      });
      var a = t('./node_modules/umi-request/dist/index.es.js'),
        o = function (e) {
          return a.a.get(e).then(function (e) {
            return e.body;
          });
        };
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'fetch', filename: 'src/utils.ts' },
        });
    },
  },
]);
