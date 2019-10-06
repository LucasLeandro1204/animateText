import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
			format: 'umd',
			file: pkg.browser,
			name: 'animateText',
		},
	},
	{
		input: 'src/index.js',
		output: [
			{
        format: 'cjs',
        file: pkg.main,
      },
      {
        format: 'es',
        file: pkg.module,
      },
		],
	},
];