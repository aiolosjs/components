import React, { useMemo, useState } from 'react';
import { Form, Tree } from 'antd';
import { TreeProps, TreeNodeNormal, AntTreeNodeCheckedEvent } from 'antd/lib/tree/Tree';
import { IBaseWidgetProps } from '../types';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface ATreeProps extends IBaseWidgetProps {
  treeData: TreeNodeNormal[];
  formatter?: (value: any) => TreeNodeNormal[];
  treeCheckParentStrictly?: boolean;
  widgetProps?: Omit<TreeProps, 'treeData'>;
}

interface TriggerNodeTypeProps extends Pick<TreeNodeNormal, 'key' | 'disabled'> {
  children: TriggerNodeType[];
}

interface TriggerNodeType extends TriggerNodeTypeProps {
  props: TriggerNodeTypeProps;
}

function getNodekeys(data: TriggerNodeType[]): string[] {
  return data.reduce((keys: string[], item) => {
    const { key, props } = item;
    const { children, disabled } = props;
    if (!disabled) {
      keys.push(key);
    }
    if (children) {
      return [...keys, ...getNodekeys(children)];
    }
    return keys;
  }, []);
}

function removeDuplicates(myArr: string[]): string[] {
  return myArr.filter((obj, pos, arr) => arr.map(mapObj => mapObj).indexOf(obj) === pos);
}

function difference(source: string[], target: string[]): string[] {
  return target.reduce((acc, cur) => acc.filter(item => item !== cur), source);
}

const ATree: React.FC<ATreeProps> = ({
  name,
  label,
  form,
  treeData,
  formatter,
  widgetProps = {},
  formItemProps,
  rules,
  initialValue = [],
  treeCheckParentStrictly,
  fieldDecoratorOptions = {},
}) => {
  const { getFieldDecorator } = form;
  const options = {
    rules,
    initialValue,
    valuePropName: 'checked',
    validateTrigger: 'onCheck',
    getValueFromEvent,
    ...fieldDecoratorOptions,
  };

  const [checkedKeys, setCheckedKeys] = useState<
    string[] | { checked: string[]; halfChecked: string[] }
  >(initialValue);
  const { checkStrictly, ...rest } = widgetProps;

  function formatWrapper(value: any): TreeNodeNormal[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  function getValueFromEvent(
    value: string[] | { checked: string[]; halfChecked: string[] },
    e: AntTreeNodeCheckedEvent,
  ) {
    if (!Array.isArray(value)) {
      if (treeCheckParentStrictly && checkStrictly) {
        const { node, checked } = e;

        const childCheckeds = getNodekeys(node.props.children as Array<any>);
        if (checked) {
          const uniqCheckedKeys = removeDuplicates([...value.checked, ...childCheckeds]);

          setCheckedKeys(uniqCheckedKeys);
          return uniqCheckedKeys;
        }
        const unCheckedKeys = difference(value.checked, childCheckeds);

        setCheckedKeys(unCheckedKeys);
        return unCheckedKeys;
      }

      setCheckedKeys(value);
      return value.checked;
    }

    setCheckedKeys(value);
    return value;
  }

  const treeDataMemo = useMemo(() => formatWrapper(treeData), [treeData]);

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(
        <Tree
          treeData={treeDataMemo}
          defaultExpandedKeys={initialValue}
          checkedKeys={checkedKeys}
          checkStrictly={checkStrictly}
          selectable={false}
          {...rest}
        />,
      )}
    </Form.Item>
  );
};

ATree.defaultProps = {
  initialValue: undefined,
  treeData: [],
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ATree;
