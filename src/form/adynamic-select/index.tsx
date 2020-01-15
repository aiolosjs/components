import React from 'react';
import useSWR from 'swr';

import { fetch } from '../../utils';
import ASelect, { ASelectProps, SelectOptionsProps } from '../aselect';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface ADynamicSelectProps extends Omit<ASelectProps, 'selectOptions'> {
  action: string | null;
  asyncFn?: (action: string) => Promise<SelectOptionsProps[]>;
}

const ADynamicSelect: React.FC<ADynamicSelectProps> = ({
  form,
  name,
  action,
  asyncFn,
  widgetProps = {},
  ...rest
}) => {
  const { data = [], isValidating } = useSWR<SelectOptionsProps[]>(action, asyncFn || fetch);

  return (
    <ASelect
      form={form}
      name={name}
      selectOptions={data}
      widgetProps={{ loading: isValidating, ...widgetProps }}
      {...rest}
    />
  );
};

ADynamicSelect.defaultProps = {};

export default ADynamicSelect;
