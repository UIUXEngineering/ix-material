import { randomInt } from '@uiux/cdk/number';

export function getBars(val: number): any[] {
  const data: any = [];
  for (let i = 0; i < val; i++) {
    data.push({
                   // 'Expt': '1',
                   'Run': i + 1,
                   'Speed': randomInt(1, 1000),
                 });
  }

  return data;
}

