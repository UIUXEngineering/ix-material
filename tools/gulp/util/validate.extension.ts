function regexExt(path: string): string[] | null {
  // var regex = new RegExp(/\.[0-9a-z]+$/, 'i');
  return path.match(/\.[0-9a-z]+$/i);
}

function isScss(path: string) {
  const regExtResult = regexExt(path);
  return regExtResult && regExtResult[0] === '.scss';
}

export { isScss, regexExt };
