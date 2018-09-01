
// import * as through2 from 'through2';

import * as through2 from 'through2';

export function logPipe(msg: string): any {
  // returns stream
  return through2.obj(function (chunk, enc, cb) {
    console.log(msg); // this should log now
    cb(null, chunk);
  });
}
