import React, { useMemo } from 'react';
import useSWR, { ConfigInterface } from 'swr';

import { fetch } from '../../utils';
import ASelectGroup, { ASelectOptGroupProps, SelectOptGroupProps } from '../aselectgroup';

export interface ADynamicSelectProps extends Omit<ASelectOptGroupProps, 'selectOptions'> {
  action: string | null;
  formatter?: (value: any) => SelectOptGroupProps[];
  asyncFn?: (action: string) => Promise<SelectOptGroupProps[]>;
  swrOptions?: ConfigInterface;
}

const ADynamicSelectGroup: React.FC<ADynamicSelectProps> = ({
  name,
  formatter,
  action,
  asyncFn,
  swrOptions = {},
  widgetProps = {},
  ...rest
}) => {
  const { data = [], isValidating } = useSWR<SelectOptGroupProps[]>(
    action,
    asyncFn || fetch,
    swrOptions,
  );

  function formatWrapper(value: any): SelectOptGroupProps[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  const memoData = useMemo(() => formatWrapper(data), [data]);

  return (
    <ASelectGroup
      name={name}
      selectOptions={memoData}
      widgetProps={{ loading: isValidating, ...widgetProps }}
      {...rest}
    />
  );
};

export default ADynamicSelectGroup;
