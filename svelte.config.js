// import adapter from '@sveltejs/adapter-static';
//
// /** @type {import('@sveltejs/kit').Config} */
// const dev = process.argv.includes('dev');
//
// const config = {
// 	kit: {
// 		adapter: adapter({
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: 'index.html'
// 		}),
// 		paths: {
// 			base: dev ? '' : '/lama-agenda'
// 		}
// 	}
// };
//
// export default config;

import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter({
			out: 'build'
		})
		// ❌ KEINE `vite`-Option hier
	}
};