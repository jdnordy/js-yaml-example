import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

let fileContents = fs.readFileSync(path.resolve(__dirname, '../docker-compose.yml')) as unknown as string;
let data = yaml.safeLoad(fileContents);

console.log(data);

fs.writeFileSync(path.resolve(__dirname, './docker-compose.json'), JSON.stringify(data));
