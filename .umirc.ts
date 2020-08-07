import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'aiolosjs forms',
  mode: 'site',
  navs: [
    null,
    { title: 'v1.x', path: 'http://v1.aiolosjs.suxf.cn' },
    { title: 'GitHub', path: 'https://github.com/aiolosjs/components.git' },
  ],
  antd: {
    dark: false,
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
});
