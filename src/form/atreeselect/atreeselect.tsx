import React, { useState, useEffect, useRef } from 'react';
import { TreeSelect } from 'antd';
import { TreeSelectProps } from 'antd/lib/tree-select';
import { DataNode, ChangeEventExtra } from 'rc-tree-select/lib/interface';
import omit from 'omit.js';

type Key = string | number;

export interface TreeSelectNormalProps {
  value?: Key | Key[];
  onChange?: (value: Key | Key[]) => void;
  treeData: undefined | DataNode[];
  treeCheckParentStrictly?: boolean;
  widgetProps?: Omit<TreeSelectProps<DataNode>, 'treeData' | 'value'>;
}

const ATreeSelect: React.FC<TreeSelectNormalProps> = ({
  value,
  onChange,
  treeData,
  widgetProps = {},
}) => {
  // const {treeCheckStrictly,...rest} = widgetProps;
  // @ts-ignore
  const treeSelectRestProps = omit(widgetProps, ['onChange', 'value']);
  const [treeExpandedKeys, setTreeExpandedKeys] = useState<Key[]>([]);
  const [treeSelectValue, setTreeSelectValue] = useState<Key | Key[]>();

  const isInitValueComplete = useRef(false);

  useEffect(() => {
    if (treeData && treeData.length > 0 && value && !isInitValueComplete.current) {
      let expandKeys = [];
      if (Array.isArray(value)) {
        if (widgetProps.treeCheckStrictly) {
          expandKeys = value.map((v: any) => v.value);
        } else {
          expandKeys = value;
        }
      } else {
        expandKeys.push(value);
      }
      setTreeSelectValue(value);
      setTreeExpandedKeys([...expandKeys]);
      isInitValueComplete.current = true;
    }
  }, [value, treeData]);

  const triggerChange = (
    changedValue: Key | Key[],
    label: React.ReactNode[],
    extra: ChangeEventExtra,
  ) => {
    if (onChange) {
      onChange(changedValue);
    }

    if (widgetProps.onChange) {
      // @ts-ignore
      widgetProps.onChange(changedValue, label, extra);
    }
  };

  function onTreeSelectChange(
    changeValue: Key | Key[],
    label: React.ReactNode[],
    extra: ChangeEventExtra,
  ) {
    setTreeSelectValue(changeValue);
    triggerChange(changeValue, label, extra);
  }

  function onTreeExpand(expandedKeys: Key[]) {
    setTreeExpandedKeys(expandedKeys);
  }

  return (
    <TreeSelect
      value={treeSelectValue}
      treeExpandedKeys={treeExpandedKeys}
      treeData={treeData}
      onChange={onTreeSelectChange}
      onTreeExpand={onTreeExpand}
      {...treeSelectRestProps}
    />
  );
};

export default ATreeSelect;
