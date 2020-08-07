import React, { useMemo } from 'react';
import useSWR, { ConfigInterface } from 'swr';

import { fetch } from '../../utils';
import ASelect, { ASelectProps, SelectOptionsProps } from '../aselect';

export interface ADynamicSelectProps extends Omit<ASelectProps, 'selectOptions'> {
  action: string | null | (() => string);
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
  formItemProps = {},
  initialValue,
  ...rest
}) => {
  const { data = [], isValidating } = useSWR<SelectOptionsProps[]>(
    action,
    asyncFn || fetch,
    swrOptions,
  );

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

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
      formItemProps={formItemProps}
      widgetProps={{ loading: isValidating, ...widgetProps }}
      {...rest}
    />
  );
};

export default ADynamicSelect;
