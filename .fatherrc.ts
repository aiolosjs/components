import { IBundleOptions } from 'father';

const config = {
  dest: 'doc',
  base: '/',
  files: './src/**/*.{md,markdown,mdx}',
  themeConfig: {
    codemirrorTheme: 'docz-light',
    menus: [
      { title: '发布日志', link: 'https://github.com/aiolosjs/components/releases' },
      { title: 'Github', link: 'https://github.com/aiolosjs/components.git' },
    ],
  },
};

const options: IBundleOptions = {
  entry: 'src/index.tsx',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'aiolosjsComponents',
    globals: {
      react: 'React',
    },
  },
  disableTypeCheck: true,
  doc: {
    title: '@aiolosjs/components',
    theme: 'docz-theme-umi-hooks',
    ignore: ['readme.md', 'changelog.md', 'license.md', 'license.md'],
    ...config,
  },

  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};

export default options;
