/*global describe, it */
const assert = require('assert');
const path = require('path').posix; // eslint-disable-line no-unused-vars

const cssMinifierAdapter = require('../index.js');

describe('mojl-clean-css tests', async () => {
	it('should minify stylesheets', async () => {
		
		let source = `
			/* a stylesheet for bar */
			.bar {
				color: antiquewhite;
			}

			/* a stylesheet for foo */
			.foo {
				color: turquoise;
			}
		`;
		
		let actual = await cssMinifierAdapter(source);
		let expected = '.bar{color:#faebd7}.foo{color:#40e0d0}';
		assert.equal(actual, expected);

	});
});

