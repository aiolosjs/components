// const fabric = require('@umijs/fabric');

// module.exports = {
//   ...fabric.default,
//   rules: {
//     ...fabric.default.rules,
//     '@typescript-eslint/camelcase': 0,
//     '@typescript-eslint/class-name-casing': 0,
//   },
//   globals: {
//     page: true,
//   },
// };

const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.default,
  rules: {
    ...fabric.default.rules,
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    'consistent-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-await-in-loop': 'off',
  },
};
