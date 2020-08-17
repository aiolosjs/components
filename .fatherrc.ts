const options = {
  entry: 'src/index.ts',
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  disableTypeCheck: true,
  preCommit: {
    eslint: false,
    prettier: true,
  },
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  ],
};

export default options;
