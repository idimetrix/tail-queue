const path = require('path');
const process = require('process');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), { encoding: 'utf8' }));

const fields = ['name', 'version', 'keywords', 'repository', 'author', 'email', 'homepage', 'bugs', 'license', 'engines', 'dependencies', 'description', 'typings', 'main', 'module'].sort();

const package = {};

for (const field of fields) {
	if (data && data[field]) {
		package[field] = data[field];
	}
}

process.stdout.write(`${JSON.stringify(package, null, 2)}\n`);
