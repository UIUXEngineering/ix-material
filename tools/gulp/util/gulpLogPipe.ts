import * as through2 from 'through2';

const chalk = require('chalk');

function noop(data: any): any {
  return data;
}

export function logPipe(msg: string, color?: string): any {
  // returns stream
  // tslint:disable-next-line
  return through2.obj(function(chunk, enc, cb) {
    noop(enc);

    if (color) {
      console.log(chalk[color](msg));
    } else {
      console.log(msg); // this should log now
    }
    cb(null, chunk);
  });
}
