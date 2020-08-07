import React, { useMemo } from 'react';
import useSWR, { ConfigInterface } from 'swr';
import { TreeNodeNormal } from 'antd/lib/tree/Tree';

import { fetch } from '../../utils';
import ATree, { ATreeProps } from '../atree';

export interface ADynamicTreeProps extends Omit<ATreeProps, 'treeData'> {
  action: string | null | (() => string);
  asyncFn?: (action: string) => Promise<any[]>;
  formatter?: (value: any) => TreeNodeNormal[];
  swrOptions?: ConfigInterface;
}

const ADynamicTree: React.FC<ADynamicTreeProps> = ({
  name,
  label,
  formItemProps = {},
  initialValue,
  action,
  asyncFn,
  formatter,
  swrOptions = {},
  ...rest
}) => {
  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  const { data = [] } = useSWR<TreeNodeNormal[]>(action, asyncFn || fetch, swrOptions);

  function formatWrapper(value: any): TreeNodeNormal[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  const memoData = useMemo(() => formatWrapper(data), [data]);

  return (
    <ATree label={label} name={name} treeData={memoData} formItemProps={formItemProps} {...rest} />
  );
};

export default ADynamicTree;
