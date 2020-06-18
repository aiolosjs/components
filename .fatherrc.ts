const options = {
  entry: 'src/index.ts',
  esm: 'babel',
  cjs: 'babel',
  disableTypeCheck: true,
  preCommit: {
    eslint: false,
    prettier: false,
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
