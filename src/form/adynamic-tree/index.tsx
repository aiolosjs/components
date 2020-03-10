import React from 'react';
import useSWR from 'swr';
import { TreeNodeNormal } from 'antd/lib/tree/Tree';

import { fetch } from '../../utils';
import ATree, { ATreeProps } from '../atree';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type actionType = (() => string) | string | null;

export interface ADynamicTreeProps extends Omit<ATreeProps, 'treeData'> {
  action: actionType;
  asyncFn?: (action: string) => Promise<TreeNodeNormal[]>;
}

const ADynamicTree: React.FC<ADynamicTreeProps> = ({
  form,
  name,
  action,
  asyncFn,
  widgetProps = {},
  ...rest
}) => {
  const { data = [] } = useSWR<TreeNodeNormal[]>(action, asyncFn || fetch);


  return (
    <ATree form={form} name={name} treeData={data} widgetProps={{ ...widgetProps }} {...rest} />
  );
};

ADynamicTree.defaultProps = {};

export default ADynamicTree;
