import { randomInt } from '@uiux/cdk/number';

const rawData: any = [];

for (let i = 0; i < 1000; i++) {
  rawData.push({
                 // 'Expt': '1',
                 'Run': i + 1,
                 'Speed': randomInt(1, 1000),
               });
}

export const PocData = rawData;

