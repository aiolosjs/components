import React from 'react';
import useSWR from 'swr';
import { TreeNode } from 'antd/lib/tree-select/interface';

import { fetch } from '../../utils';
import ATreeSelect, { ATreeSelectProps } from '../atreeselect';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface ADynamicTreeSelectProps extends Omit<ATreeSelectProps, 'treeData'> {
  action: string | null;
  asyncFn?: (action: string) => Promise<TreeNode[]>;
}

const ADynamicTreeSelect: React.FC<ADynamicTreeSelectProps> = ({
  form,
  name,
  action,
  asyncFn,
  widgetProps = {},
  ...rest
}) => {
  const { data = [], isValidating } = useSWR<TreeNode[]>(action, asyncFn || fetch);

  return (
    <ATreeSelect
      form={form}
      name={name}
      treeData={data}
      widgetProps={{ loading: isValidating, ...widgetProps }}
      {...rest}
    />
  );
};

ADynamicTreeSelect.defaultProps = {};

export default ADynamicTreeSelect;
