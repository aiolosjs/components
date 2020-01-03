import React from 'react';
import useSWR from 'swr';

import { fetch } from '../../utils';
import ASelectGroup, { ASelectOptGroupProps, SelectOptGroupProps } from '../aselectgroup';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface ADynamicSelectProps extends Omit<ASelectOptGroupProps, 'selectOptions'> {
  action: string | null;
  asyncFn?: (action: string) => Promise<SelectOptGroupProps[]>;
}

const ADynamicSelectGroup: React.FC<ADynamicSelectProps> = ({
  form,
  name,
  action,
  asyncFn,
  widgetProps = {},
  ...rest
}) => {
  const { data = [], isValidating } = useSWR<SelectOptGroupProps[]>(action, asyncFn || fetch);

  return (
    <ASelectGroup
      form={form}
      name={name}
      selectOptions={data}
      widgetProps={{ loading: isValidating, ...widgetProps }}
      {...rest}
    />
  );
};

ADynamicSelectGroup.defaultProps = {};

export default ADynamicSelectGroup;
