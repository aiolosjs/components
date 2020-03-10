import React, { useState, useEffect } from 'react';
import { CascaderOptionType } from 'antd/lib/cascader';
import { fetch } from '../../utils';
import ACascader, { ACascaderProps } from '../acascader';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface LoadDataOptions {
  queryKey?: string;
  action: string;
}
export interface ADynamicCascaderProps extends Omit<ACascaderProps, 'selectOptions'> {
  selectOptions?: CascaderOptionType[];
  loadDataOptions?: Array<LoadDataOptions | null | undefined>;
  customLoadDataParams?: (
    selectedOptions?: CascaderOptionType[],
    position?: number,
  ) => string | undefined;
  asyncFn?: (action: string) => Promise<CascaderOptionType[]>;
}

const setChildValue = (
  parentData: CascaderOptionType[],
  childData: CascaderOptionType[],
  parentKey: any,
) =>
  parentData.map(item => {
    if (item.value === parentKey) {
      item.children = childData;
    } else if (item.children) {
      setChildValue(item.children, childData, parentKey);
    }
    return { ...item };
  });

const ADynamicCascader: React.FC<ADynamicCascaderProps> = ({
  name,
  form,
  initialValue,
  widgetProps,
  loadDataOptions = [],
  formatter,
  asyncFn,
  customLoadDataParams,
  selectOptions: initSelectOptions = [],
  ...rest
}) => {
  const [selectOptions, setSelectOptions] = useState<CascaderOptionType[]>(initSelectOptions);

  async function fetchData(params: string) {
    return asyncFn ? asyncFn(params) : fetch<CascaderOptionType[]>(params);
  }

  function formatWrapper(value: Array<any>) {
    if (formatter) {
      return formatter(value);
    }
    return value;
  }

  useEffect(() => {
    (async () => {
      const firstOpts = loadDataOptions[0];
      if (firstOpts) {
        const { action } = firstOpts;
        let params = action;

        if (customLoadDataParams) {
          const customParams = customLoadDataParams([], 1);
          if (customParams) {
            params = customParams;
          }
        }

        const data = await fetchData(params);

        setSelectOptions(formatWrapper(data));
      }

      if (Array.isArray(initialValue) && initialValue.length > 1) {
        for (let i = 1; i <= initialValue.length; i++) {
          const opts = loadDataOptions[i];
          if (opts) {
            const { action, queryKey } = opts;
            let params = action;
            if (queryKey) {
              params = `${action}?${queryKey}=${initialValue[i - 1]}`;
            }

            if (customLoadDataParams) {
              const customParams = customLoadDataParams([], i + 1);
              if (customParams) {
                params = customParams;
              }
            }

            const childData = await fetchData(params);

            setSelectOptions(options => {
              const cData = formatWrapper(childData);
              return setChildValue(options, cData, initialValue[i - 1]);
            });
          }
        }
      }
    })();
  }, []);

  async function loadData(selectedOptions?: CascaderOptionType[]) {
    if (Array.isArray(selectedOptions)) {
      const curIndex = selectedOptions.length - 1;
      const targetOption = selectedOptions[curIndex];
      targetOption.loading = true;

      const { value } = targetOption;
      const nextOpts = loadDataOptions[curIndex + 1];

      if (nextOpts) {
        const { action, queryKey } = nextOpts;
        let params = action;
        if (queryKey) {
          params = `${action}?${queryKey}=${value}`;
        }

        if (customLoadDataParams) {
          const customParams = customLoadDataParams(selectedOptions, selectedOptions.length + 1);
          if (customParams) {
            params = customParams;
          }
        }

        const childData = await fetchData(params);

        targetOption.loading = false;
        targetOption.children = formatWrapper(childData);

        setSelectOptions(options => [...options]);
      }
    }
  }

  return (
    <ACascader
      form={form}
      name={name}
      selectOptions={selectOptions}
      initialValue={initialValue}
      widgetProps={{ loadData, ...widgetProps }}
      {...rest}
    />
  );
};

ADynamicCascader.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
};

export default ADynamicCascader;
