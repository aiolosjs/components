(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    './src/form/adynamic-tree/index.mdx': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return h;
        });
      var a = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        r = n('react'),
        l = n.n(r),
        o = n('./node_modules/@mdx-js/react/dist/esm.js'),
        i = n('./node_modules/@aiolosjs/jackbox/dist/index.esm.js'),
        s =
          (n('./node_modules/antd/es/form/style/index.js'),
          n('./node_modules/antd/es/form/index.js')),
        c =
          (n('./node_modules/antd/es/button/style/index.js'),
          n('./node_modules/antd/es/button/index.js')),
        b = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        m = n('./src/form/adynamic-tree/index.tsx'),
        d = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        u = { width: '100%' },
        p = s.a.create()(function (e) {
          var t = e.form;
          return l.a.createElement(
            s.a,
            Object.assign({}, d, {
              onSubmit: function (e) {
                e.preventDefault(),
                  t.validateFields(function (e, t) {
                    e || console.log('Received values of form: ', t);
                  });
              },
            }),
            l.a.createElement(m.a, {
              name: 'demo2',
              label: '\u8282\u70b9',
              form: t,
              rules: [{ required: !0, message: ' ATree!' }],
              action: 'http://yapi.rebornauto.cn/mock/39/tree_node',
              widgetProps: { style: u, checkable: !0, checkStrictly: !1 },
            }),
            l.a.createElement(
              s.a.Item,
              { wrapperCol: Object(b.a)(Object(b.a)({}, d.wrapperCol), {}, { offset: 2 }) },
              l.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
            ),
          );
        }),
        j = { labelCol: { span: 2 }, wrapperCol: { span: 20 } },
        O = { width: '100%' },
        f =
          (s.a.create()(function (e) {
            var t = e.form;
            return l.a.createElement(
              s.a,
              Object.assign({}, j, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    t.validateFields(function (e, t) {
                      e || console.log('Received values of form: ', t);
                    });
                },
              }),
              l.a.createElement(m.a, {
                name: 'demo2',
                label: '\u8282\u70b9',
                form: t,
                rules: [{ required: !0, message: ' ATree!' }],
                action: 'http://yapi.rebornauto.cn/mock/39/tree_node',
                treeCheckParentStrictly: !0,
                widgetProps: { style: O, checkable: !0, checkStrictly: !0 },
              }),
              l.a.createElement(
                s.a.Item,
                { wrapperCol: Object(b.a)(Object(b.a)({}, j.wrapperCol), {}, { offset: 2 }) },
                l.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
              ),
            );
          }),
          { labelCol: { span: 2 }, wrapperCol: { span: 20 } }),
        g = { width: '100%' },
        y =
          (s.a.create()(function (e) {
            var t = e.form;
            return l.a.createElement(
              s.a,
              Object.assign({}, f, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    t.validateFields(function (e, t) {
                      e || console.log('Received values of form: ', t);
                    });
                },
              }),
              l.a.createElement(m.a, {
                name: 'demo2',
                label: '\u8282\u70b9',
                form: t,
                rules: [{ required: !0, message: ' ATree!' }],
                action: 'http://yapi.rebornauto.cn/mock/39/tree_node',
                widgetProps: { style: g, checkable: !0, checkStrictly: !0 },
              }),
              l.a.createElement(
                s.a.Item,
                { wrapperCol: Object(b.a)(Object(b.a)({}, f.wrapperCol), {}, { offset: 2 }) },
                l.a.createElement(c.a, { type: 'primary', htmlType: 'submit' }, '\u786e\u5b9a'),
              ),
            );
          }),
          {});
      function h(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object.assign({}, y, n, { components: t, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'adynamictree' }, 'ADynamicTree'),
          Object(o.b)('h2', { id: '\u4ee3\u7801\u6f14\u793a' }, '\u4ee3\u7801\u6f14\u793a'),
          Object(o.b)('h3', { id: '\u9ed8\u8ba4\u7528\u6cd5' }, '\u9ed8\u8ba4\u7528\u6cd5'),
          Object(o.b)(
            i.a,
            {
              jsCode:
                "import React from 'react';\nimport { Form, Button } from 'antd';\nimport ATree from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-2',\n        children: [\n          {\n            title: 'Child Node2-1',\n            key: '0-0-2-1',\n          },\n          {\n            title: 'Child Node2-2',\n            key: '0-0-2-2',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\nconst layout = {\n  labelCol: {\n    span: 2,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst styles = {\n  width: '100%',\n};\n\nconst WidgetWithForm = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATree\n        name=\"demo2\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        action=\"http://yapi.rebornauto.cn/mock/39/tree_node\"\n        widgetProps={{\n          style: styles,\n          checkable: true,\n          checkStrictly: false,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              tsCode:
                "import React from 'react';\nimport { Form, Tag, Button } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\nimport ATree from '..';\n\nconst treeData = [\n  {\n    title: 'Node1',\n    key: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        key: '0-0-0',\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-1',\n        disabled: true,\n      },\n      {\n        title: 'Child Node2',\n        key: '0-0-2',\n        children: [\n          {\n            title: 'Child Node2-1',\n            key: '0-0-2-1',\n          },\n          {\n            title: 'Child Node2-2',\n            key: '0-0-2-2',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    key: '0-1',\n    children: [\n      {\n        title: 'Child Node3',\n        key: '0-1-0',\n      },\n      {\n        title: 'Child Node4',\n        key: '0-1-1',\n      },\n      {\n        title: 'Child Node5',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n\nconst layout = {\n  labelCol: { span: 2 },\n  wrapperCol: { span: 20 },\n};\n\nconst styles: React.CSSProperties = {\n  width: '100%',\n};\n\nconst WidgetWithForm: React.FC<FormComponentProps> = ({ form }) => {\n  function onChange(value, node) {\n    // console.log(value, node);\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    form.validateFields((err, values) => {\n      if (!err) {\n        console.log('Received values of form: ', values);\n      }\n    });\n  }\n\n  return (\n    <Form {...layout} onSubmit={handleSubmit}>\n      <ATree\n        name=\"demo2\"\n        label=\"\u8282\u70b9\"\n        form={form}\n        rules={[\n          {\n            required: true,\n            message: ' ATree!',\n          },\n        ]}\n        action=\"http://yapi.rebornauto.cn/mock/39/tree_node\"\n        widgetProps={{\n          style: styles,\n          checkable: true,\n          checkStrictly: false,\n        }}\n      />\n\n      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          \u786e\u5b9a\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Form.create()(WidgetWithForm);\n",
              demoName: '\u57fa\u672c\u7528\u6cd5',
              mdxType: 'JackBox',
            },
            Object(o.b)(p, { mdxType: 'Demo1' }),
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
                          'https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0%3E%3E',
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
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'action'),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u63a5\u53e3\u5730\u5740,\u5982\u679c\u4e3anull \uff0c\u5219\u4e0d\u4f1a\u83b7\u53d6\u6570\u636e',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  'string',
                  '|',
                  'null',
                ),
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'true'),
              ),
              Object(o.b)(
                'tr',
                { parentName: 'tbody' },
                Object(o.b)('td', Object.assign({ parentName: 'tr' }, { align: null }), 'asyncFn'),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '\u63a5\u53e3\u56de\u8c03\u51fd\u6570',
                ),
                Object(o.b)(
                  'td',
                  Object.assign({ parentName: 'tr' }, { align: null }),
                  '(action: string)=> Promise',
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
          value: { name: 'MDXContent', filename: 'src/form/adynamic-tree/index.mdx' },
        }),
        (h.isMDXComponent = !0);
    },
    './src/form/adynamic-tree/index.tsx': function (e, t, n) {
      'use strict';
      var a = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        r = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        l = n('react'),
        o = n.n(l),
        i = n('./node_modules/swr/esm/index.js'),
        s = n('./src/utils.ts'),
        c = n('./src/form/atree/index.tsx');
      'undefined' !== typeof ADynamicTreeProps &&
        ADynamicTreeProps &&
        ADynamicTreeProps === Object(ADynamicTreeProps) &&
        Object.isExtensible(ADynamicTreeProps) &&
        Object.defineProperty(ADynamicTreeProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ADynamicTreeProps', filename: 'src/form/adynamic-tree/index.tsx' },
        });
      var b = function (e) {
        var t = e.form,
          n = e.name,
          l = e.action,
          b = e.asyncFn,
          m = e.widgetProps,
          d = void 0 === m ? {} : m,
          u = Object(r.a)(e, ['form', 'name', 'action', 'asyncFn', 'widgetProps']),
          p = Object(i.a)(l, b || s.a).data,
          j = void 0 === p ? [] : p;
        return o.a.createElement(
          c.a,
          Object.assign({ form: t, name: n, treeData: j, widgetProps: Object(a.a)({}, d) }, u),
        );
      };
      (b.defaultProps = {}),
        (t.a = b),
        b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ADynamicTree', filename: 'src/form/adynamic-tree/index.tsx' },
          });
    },
    './src/form/atree/index.tsx': function (e, t, n) {
      'use strict';
      n('./node_modules/antd/es/form/style/index.js');
      var a = n('./node_modules/antd/es/form/index.js'),
        r =
          (n('./node_modules/antd/es/tree/style/index.js'),
          n('./node_modules/antd/es/tree/index.js')),
        l = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
        ),
        o = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
        ),
        i = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js',
        ),
        s = n(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
        ),
        c = n('react'),
        b = n.n(c);
      'undefined' !== typeof ATreeProps &&
        ATreeProps &&
        ATreeProps === Object(ATreeProps) &&
        Object.isExtensible(ATreeProps) &&
        Object.defineProperty(ATreeProps, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'ATreeProps', filename: 'src/form/atree/index.tsx' },
        });
      var m = function (e) {
        var t = e.name,
          n = e.label,
          m = e.form,
          d = e.treeData,
          u = e.formatter,
          p = e.widgetProps,
          j = void 0 === p ? {} : p,
          O = e.formItemProps,
          f = e.rules,
          g = e.initialValue,
          y = void 0 === g ? [] : g,
          h = e.treeCheckParentStrictly,
          N = e.fieldDecoratorOptions,
          v = void 0 === N ? {} : N,
          k = m.getFieldDecorator,
          C = Object(i.a)(
            {
              rules: f,
              initialValue: y,
              valuePropName: 'checked',
              validateTrigger: 'onCheck',
              getValueFromEvent: function (e, t) {
                if (!Array.isArray(e)) {
                  if (h && w) {
                    var n = t.node,
                      a = t.checked,
                      r = (function e(t) {
                        return t.reduce(function (t, n) {
                          var a = n.key,
                            r = n.props,
                            l = r.children;
                          return (
                            r.disabled || t.push(a),
                            l ? [].concat(Object(s.a)(t), Object(s.a)(e(l))) : t
                          );
                        }, []);
                      })(n.props.children);
                    if (a) {
                      var l = []
                        .concat(Object(s.a)(e.checked), Object(s.a)(r))
                        .filter(function (e, t, n) {
                          return (
                            n
                              .map(function (e) {
                                return e;
                              })
                              .indexOf(e) === t
                          );
                        });
                      return F(l), l;
                    }
                    var o =
                      ((i = e.checked),
                      r.reduce(function (e, t) {
                        return e.filter(function (e) {
                          return e !== t;
                        });
                      }, i));
                    return F(o), o;
                  }
                  return F(e), e.checked;
                }
                var i;
                return F(e), e;
              },
            },
            v,
          ),
          x = Object(c.useState)(y),
          P = Object(o.a)(x, 2),
          _ = P[0],
          F = P[1],
          w = j.checkStrictly,
          T = Object(l.a)(j, ['checkStrictly']);
        var A = Object(c.useMemo)(
          function () {
            return (e = d), u ? u(e) : e;
            var e;
          },
          [d],
        );
        return b.a.createElement(
          a.a.Item,
          Object.assign({ label: n }, O),
          k(
            t,
            C,
          )(
            b.a.createElement(
              r.a,
              Object.assign(
                {
                  treeData: A,
                  defaultExpandedKeys: y,
                  checkedKeys: _,
                  checkStrictly: w,
                  selectable: !1,
                },
                T,
              ),
            ),
          ),
        );
      };
      (m.defaultProps = {
        initialValue: void 0,
        treeData: [],
        widgetProps: {},
        formItemProps: {},
        rules: [],
        fieldDecoratorOptions: {},
      }),
        (t.a = m),
        m &&
          m === Object(m) &&
          Object.isExtensible(m) &&
          Object.defineProperty(m, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'ATree', filename: 'src/form/atree/index.tsx' },
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
