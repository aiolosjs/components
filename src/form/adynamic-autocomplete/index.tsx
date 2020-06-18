import React, { useState, useEffect, useMemo } from 'react';
import { useThrottleFn } from '@umijs/hooks';
import { LabeledValue } from 'antd/lib/select';

import { fetch } from '../../utils';
import AAutoComplete, { AAutoCompleteProps } from '../aautocomplete';

export interface LoadDataOption {
  action: string;
  queryKey?: string;
  otherData?: { [key: string]: string };
}

export interface ADynamicAutoCompleteProps extends Omit<AAutoCompleteProps, 'dataSource'> {
  loadDataOption: LoadDataOption;
  customLoadDataParams?: (searchValue: string) => string;
  asyncFn?: (action: string) => Promise<any>;
  formatter?: (value: any) => LabeledValue[];
  throttleWait?: number;
}

const ADynamicAutoComplete: React.FC<ADynamicAutoCompleteProps> = ({
  name,
  customLoadDataParams,
  loadDataOption,
  asyncFn,
  formatter,
  throttleWait = 0,
  initialValue,
  widgetProps = {},
  ...rest
}) => {
  const { onSearch, ...restWidgeProps } = widgetProps;
  const [inputValue, setInputValue] = useState<string>('');
  const [dataSource, setDataSource] = useState<any>([]);

  async function fetchData(searchValue: string) {
    let params = '';
    if (customLoadDataParams) {
      params = customLoadDataParams(searchValue);
    } else {
      const { queryKey = 'id', action, otherData = {} } = loadDataOption;
      otherData[queryKey] = searchValue;

      const urlSearchParams = new URLSearchParams(otherData).toString();
      params = `${action}?${urlSearchParams}`;
    }

    return asyncFn ? asyncFn(params) : fetch<any>(params);
  }

  useEffect(() => {
    (async () => {
      if (initialValue) {
        const data = await fetchData(initialValue);
        setDataSource(data);
      }
    })();
  }, []);

  useThrottleFn(
    async () => {
      const data = await fetchData(inputValue);
      setDataSource(data);

      if (onSearch) {
        onSearch(inputValue);
      }
    },
    [inputValue],
    throttleWait,
  );

  function onSearchHandle(value: string) {
    setInputValue(value);
  }

  function formatWrapper(value: any): LabeledValue[] {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  const dataSourceMemo = useMemo(() => formatWrapper(dataSource), [dataSource]);

  return (
    <AAutoComplete
      name={name}
      options={dataSourceMemo}
      initialValue={initialValue}
      widgetProps={{ onSearch: onSearchHandle, ...restWidgeProps }}
      {...rest}
    />
  );
};

ADynamicAutoComplete.defaultProps = {};

export default ADynamicAutoComplete;
