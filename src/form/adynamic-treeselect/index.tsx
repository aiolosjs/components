import React, { useMemo } from 'react';
import useSWR, { ConfigInterface } from 'swr';
import { TreeNodeNormal } from 'antd/lib/tree/Tree';
import { DataNode } from 'rc-tree-select/lib/interface';

import { fetch } from '../../utils';
import ATreeSelect, { ATreeSelectProps } from '../atreeselect';

export interface ADynamicTreeSelectProps extends Omit<ATreeSelectProps, 'treeData'> {
  action: string | null | (() => string);
  asyncFn?: (action: string) => Promise<any[]>;
  formatter?: (value: any) => DataNode[];
  swrOptions?: ConfigInterface;
}

const ADynamicTreeSelect: React.FC<ADynamicTreeSelectProps> = ({
  name,
  label,
  formItemProps = {},
  action,
  asyncFn,
  formatter,
  initialValue,
  widgetProps = {},
  swrOptions = {},
  ...rest
}) => {
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  const { data = [], isValidating } = useSWR<TreeNodeNormal[]>(
    action,
    asyncFn || fetch,
    swrOptions,
  );

  function formatWrapper(value: any): DataNode[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  const memoData = useMemo(() => formatWrapper(data), [data]);

  return (
    <ATreeSelect
      label={label}
      name={name}
      treeData={memoData}
      formItemProps={formItemProps}
      widgetProps={{ loading: isValidating, ...widgetProps }}
      {...rest}
    />
  );
};

export default ADynamicTreeSelect;
