import React, { useMemo } from 'react';
import { Form, TreeSelect } from 'antd';
import { TreeSelectProps, TreeNodeValue, TreeNode } from 'antd/lib/tree-select/interface';
import { IBaseWidgetProps } from '../types';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface ATreeSelectProps extends IBaseWidgetProps {
  treeData: Array<TreeNode>;
  formatter?: (value: Array<TreeNode>) => Array<TreeNode>;
  treeCheckParentStrictly?: boolean;
  widgetProps?: Omit<TreeSelectProps<TreeNodeValue>, 'treeData'>;
}

type NodeType = Pick<TreeNode, 'label' | 'value'>;

interface TriggerNodeTypeProps extends Pick<TreeNode, 'title' | 'value' | 'disabled'> {
  children?: TriggerNodeType[];
}

interface TriggerNodeType {
  props: TriggerNodeTypeProps;
}

function getNodekeys(data: TriggerNodeType[]): NodeType[] {
  return data.reduce((keys: NodeType[], item) => {
    const { title, value, disabled, children } = item.props;
    if (!disabled) {
      keys.push({ label: title, value });
    }
    if (children) {
      return [...keys, ...getNodekeys(children)];
    }
    return keys;
  }, []);
}

function removeDuplicates<T>(myArr: T[], prop: keyof T): T[] {
  return myArr.filter((obj, pos, arr) => {
    const current = arr.map(mapObj => mapObj[prop]);
    return current.indexOf(obj[prop]) === pos;
  });
}

function difference<T extends { value: T[keyof T] }>(source: T[], target: T[]): T[] {
  return target.reduce((acc, cur) => acc.filter(item => item.value !== cur.value), source);
}

const ATreeSelect: React.FC<ATreeSelectProps> = ({
  name,
  label,
  form,
  treeData,
  formatter,
  widgetProps = {},
  formItemProps,
  rules,
  initialValue,
  treeCheckParentStrictly = false,
  fieldDecoratorOptions = {},
}) => {
  const { getFieldDecorator } = form;
  const options = {
    rules,
    initialValue,
    getValueFromEvent,
    ...fieldDecoratorOptions,
  };
  const { treeCheckStrictly, ...rest } = widgetProps;

  function formatWrapper(value: Array<TreeNode>) {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  function getValueFromEvent(value: any, _: any, extra: any) {
    if (Array.isArray(value)) {
      if (treeCheckParentStrictly && treeCheckStrictly) {
        const { triggerNode, checked } = extra;
        if (triggerNode) {
          const childCheckeds = getNodekeys(triggerNode.props.children);
          if (checked) {
            return removeDuplicates<NodeType>([...value, ...childCheckeds], 'value');
          }
          return difference<NodeType>(value, childCheckeds);
        }
        return value;
      }

      return value;
    }

    return value;
  }

  const treeDataMemo = useMemo(() => formatWrapper(treeData), [treeData]);

  return (
    <Form.Item label={label} {...formItemProps}>
      {getFieldDecorator(name, options)(
        <TreeSelect treeData={treeDataMemo} treeCheckStrictly={treeCheckStrictly} {...rest} />,
      )}
    </Form.Item>
  );
};

ATreeSelect.defaultProps = {
  initialValue: undefined,
  treeData: [],
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default ATreeSelect;
