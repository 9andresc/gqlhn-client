module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  env: {
    production: {
      plugins: ['emotion'],
    },
    development: {
      plugins: [['emotion', { sourceMap: true }]],
    },
  },
};
