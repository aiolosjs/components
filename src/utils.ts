import request from 'umi-request';

export const fetch = <T>(url: string): Promise<T> => request.get(url).then(res => res.body);
