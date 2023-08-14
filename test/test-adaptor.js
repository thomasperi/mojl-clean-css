/*global describe, it */
const assert = require('assert');
const fs = require('fs'); // eslint-disable-line no-unused-vars
const path = require('path').posix; // eslint-disable-line no-unused-vars
const DirectoryTester = require('../DirectoryTester.js');
const { name, cloneRun } = new DirectoryTester(__filename);

const Mojl = require('mojl');
const cssMinifierAdaptor = path.join(__dirname, '../index.js');

describe(name, async () => {

	it('should minify stylesheets', async () => {
		await cloneRun(async (base, box) => { // eslint-disable-line no-unused-vars
			const mojl = new Mojl({
				cssMinifierAdaptor
			});
			await mojl.build();
			
			const after = box.snapshot();
			
			assert.equal(
				after['dist/site.css'],
				'.bar{color:#faebd7}.foo{color:#40e0d0}'
			);
			
		});
	});

});

