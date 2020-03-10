import React, { useMemo, forwardRef } from 'react';
import { Tree } from 'antd';
import { TreeProps, TreeNodeNormal, AntTreeNodeCheckedEvent } from 'antd/lib/tree/Tree';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface ATreeFormBaseProps {
  treeData: TreeNodeNormal[];
  formatter?: (value: any) => TreeNodeNormal[];
  treeCheckParentStrictly?: boolean;
  widgetProps?: Omit<TreeProps, 'treeData'>;
}

export interface ATreeFormProps extends ATreeFormBaseProps {
  [key: string]: any;
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

const ATreeForm = forwardRef<any, ATreeFormProps>((props, ref) => {
  const {
    treeData,
    formatter,
    widgetProps = {},
    value: treeValue ,
    treeCheckParentStrictly,
  } = props;

  const { checkStrictly, ...rest } = widgetProps;

  function formatWrapper(value: any): TreeNodeNormal[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  function triggerChange(changeValue: string[] | { checked: string[]; halfChecked: string[] }) {
    const { onChange } = props;
    if (onChange) {
      onChange(changeValue);
    }
  }

  function handleCheckChange(
    value: string[] | { checked: string[]; halfChecked: string[] },
    e: AntTreeNodeCheckedEvent,
  ) {
    if (!Array.isArray(value)) {
      if (treeCheckParentStrictly && checkStrictly) {
        const { node, checked } = e;

        const childCheckeds = getNodekeys(node.props.children as Array<any>);
        if (checked) {
          const uniqCheckedKeys = removeDuplicates([...value.checked, ...childCheckeds]);
          triggerChange(uniqCheckedKeys);
        } else {
          const unCheckedKeys = difference(value.checked, childCheckeds);
          triggerChange(unCheckedKeys);
        }
      } else {
        triggerChange(value.checked);
      }
    } else {
      triggerChange(value);
    }
  }

  function handleSelectChange(selectedKeys: string[]) {
    triggerChange(selectedKeys);
  }

  const treeDataMemo = useMemo(() => formatWrapper(treeData), [treeData]);

  if(treeDataMemo.length === 0) return null;

  return (
    <Tree
      ref={ref}
      treeData={treeDataMemo}
      defaultExpandedKeys={treeValue}
      checkedKeys={treeValue}
      selectedKeys={treeValue as string[]}
      checkStrictly={checkStrictly}
      onCheck={handleCheckChange}
      onSelect={handleSelectChange}
      {...rest}
    />
  );
});

ATreeForm.defaultProps = {
  treeData: [],
  widgetProps: {},
  treeCheckParentStrictly: false,
};

export default ATreeForm;
