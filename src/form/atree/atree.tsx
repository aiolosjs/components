import React, { useState, useEffect, useRef } from 'react';
import { Tree, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { TreeProps, TreeNodeNormal } from 'antd/lib/tree/Tree';
import { EventDataNode } from 'rc-tree/lib/interface';
import omit from 'omit.js';

const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

type Key = string | number;

export interface TreeNormalProps {
  value?: undefined | Key[];
  onChange?: (value: any) => void;
  treeData: undefined | TreeNodeNormal[];
  treeCheckParentStrictly?: boolean;
  widgetProps?: Omit<TreeProps, 'treeData'>;
}

interface TriggerNodeTypeProps extends Pick<TreeNodeNormal, 'key' | 'disabled'> {
  children: TriggerNodeType[];
}

interface TriggerNodeType extends TriggerNodeTypeProps {
  props: TriggerNodeTypeProps;
}

function getNodekeys(data: TriggerNodeType[] = []): Key[] {
  return data.reduce((keys: Key[], { key, disabled, children }) => {
    if (!disabled) {
      keys.push(key);
    }
    if (children) {
      return [...keys, ...getNodekeys(children)];
    }
    return keys;
  }, []);
}

function removeDuplicates(myArr: Key[]): Key[] {
  return myArr.filter((obj, pos, arr) => arr.map(mapObj => mapObj).indexOf(obj) === pos);
}

function difference(source: Key[], target: Key[]): Key[] {
  return target.reduce((acc, cur) => acc.filter(item => item !== cur), source);
}

const ATree: React.FC<TreeNormalProps> = ({
  value: treeValue,
  onChange,
  treeData,
  widgetProps = {},
  treeCheckParentStrictly,
}) => {
  const { checkable, checkStrictly, ...rest } = widgetProps;
  const treeRestProps = omit(rest, ['onSelect', 'onCheck']);

  const [expandedKeys, setExpandedKeys] = useState<Key[] | undefined>();
  const [checkedKeys, setCheckedKeys] = useState<
    | {
        checked: Key[];
        halfChecked: Key[];
      }
    | Key[]
    | undefined
  >();
  const [selectedKeys, setSelectedKeys] = useState<Key[] | undefined>();
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const isInitValueComplete = useRef(false);

  useEffect(() => {
    if (treeData && treeData.length > 0 && treeValue && !isInitValueComplete.current) {
      setExpandedKeys(treeValue);

      isInitValueComplete.current = true;
    }
  }, [treeValue, treeData]);

  const onExpand = (keys: Key[]) => {
    setExpandedKeys(keys);
    setAutoExpandParent(false);
  };

  const triggerChange = (changedValue: unknown) => {
    if (onChange) {
      onChange(changedValue);
    }
  };

  function onCheck(
    checkedNode:
      | {
          checked: Key[];
          halfChecked: Key[];
        }
      | Key[],
    info: { node: EventDataNode; checked: boolean },
  ) {
    let checkStrictlyCheckedKeys = checkedNode;
    if (treeCheckParentStrictly && checkStrictly && !Array.isArray(checkedNode)) {
      const { node, checked } = info;
      const childCheckeds = getNodekeys(node.children ?? ([] as Array<any>));
      if (checked) {
        checkStrictlyCheckedKeys = removeDuplicates([...checkedNode.checked, ...childCheckeds]);
      } else {
        checkStrictlyCheckedKeys = difference(checkedNode.checked, childCheckeds);
      }
    }

    if (rest.onCheck) {
      // @ts-ignore
      rest.onCheck(checkedNode, info);
    }

    setCheckedKeys(checkStrictlyCheckedKeys);
    triggerChange(checkStrictlyCheckedKeys);
  }

  function onSelect(keys: Key[], info: any) {
    if (rest.onSelect) {
      rest.onSelect(keys, info);
    }

    setSelectedKeys(keys);
    triggerChange(keys);
  }

  if (!treeData || treeData.length === 0) {
    return <Spin indicator={antIcon} />;
  }

  return (
    <Tree
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      onSelect={onSelect}
      checkedKeys={treeValue || checkedKeys}
      selectedKeys={treeValue || selectedKeys}
      treeData={treeData}
      checkable={checkable}
      selectable={!checkable}
      checkStrictly={checkStrictly}
      {...treeRestProps}
    />
  );
};

export default ATree;
