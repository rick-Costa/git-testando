import { main } from './modules/file.js';
import Request from './modules/request.js';

const options = { source_file: 'C:/ProgramFiles/nodejs/corepack' }

const resolve = main('C:/ProgramFiles/nodejs/corepack', options);

const request = new Request('C:/ProgramFiles/nodejs/corepack', resolve);
request.init();