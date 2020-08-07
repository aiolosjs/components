import React, { useMemo } from 'react';
import useSWR, { ConfigInterface } from 'swr';

import { fetch } from '../../utils';
import ASelectGroup, { ASelectOptGroupProps, SelectOptGroupProps } from '../aselectgroup';

export interface ADynamicSelectProps extends Omit<ASelectOptGroupProps, 'selectOptions'> {
  action: string | null | (() => string);
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
  initialValue,
  formItemProps = {},
  ...rest
}) => {
  const { data = [], isValidating } = useSWR<SelectOptGroupProps[]>(
    action,
    asyncFn || fetch,
    swrOptions,
  );

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

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
      formItemProps={formItemProps}
      widgetProps={{ loading: isValidating, ...widgetProps }}
      {...rest}
    />
  );
};

export default ADynamicSelectGroup;
