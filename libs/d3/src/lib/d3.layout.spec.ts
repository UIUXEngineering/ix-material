
import { IxD3Layout } from './d3.layout';

describe('IxD3Layout', () => {
  it('should have positive dimenstions', () => {
    const layout: IxD3Layout = new IxD3Layout({
      width: -20,
      height: -20,
      margin: {
        top: -20,
        right: -20,
        bottom: -20,
        left: -20,
      }
    });

    expect(layout.width).toEqual(0);
    expect(layout.height).toEqual(0);
    expect(layout.boundedWidth).toEqual(0);
    expect(layout.boundedHeight).toEqual(0);


  });
});
