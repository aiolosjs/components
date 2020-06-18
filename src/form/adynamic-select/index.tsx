import React, { useMemo } from 'react';
import useSWR, { ConfigInterface } from 'swr';

import { fetch } from '../../utils';
import ASelect, { ASelectProps, SelectOptionsProps } from '../aselect';

export interface ADynamicSelectProps extends Omit<ASelectProps, 'selectOptions'> {
  action: string | null;
  formatter?: (value: any) => SelectOptionsProps[];
  asyncFn?: (action: string) => Promise<SelectOptionsProps[]>;
  swrOptions?: ConfigInterface;
}

const ADynamicSelect: React.FC<ADynamicSelectProps> = ({
  name,
  formatter,
  action,
  asyncFn,
  swrOptions = {},
  widgetProps = {},
  ...rest
}) => {
  const { data = [], isValidating } = useSWR<SelectOptionsProps[]>(
    action,
    asyncFn || fetch,
    swrOptions,
  );

  function formatWrapper(value: any): SelectOptionsProps[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  const memoData = useMemo(() => formatWrapper(data), [data]);

  return (
    <ASelect
      name={name}
      selectOptions={memoData}
      widgetProps={{ loading: isValidating, ...widgetProps }}
      {...rest}
    />
  );
};

export default ADynamicSelect;
