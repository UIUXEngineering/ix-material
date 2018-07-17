import * as d3 from 'd3';

export class PocD3CanvasBarChartRender {

  static render(shadowRoot: ShadowRoot, data: any): void {
    const canvas: HTMLCanvasElement = shadowRoot.querySelector('canvas') as HTMLCanvasElement;

    // clear canvas
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    // const canvas: any = d3.select(canvasEl);


    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = canvas.width - margin.left - margin.right;
    const height = canvas.height - margin.top - margin.bottom;

    // const parseTime = d3.timeParse('%d-%b-%y');
    // console.log(parseTime);

    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .rangeRound([height, 0]);

    context.translate(margin.left, margin.top);

    x.domain(data.map(function(d) {
      return d.Run;
    }));

    y.domain([0, d3.max(data, function(d) {
      return Number(d.Speed);
    })]);

    const yTickCount = 10,
      yTicks: any = y.ticks(yTickCount),
      yTickFormat = y.tickFormat(yTickCount, '%');

    // context.beginPath();
    // x.domain().forEach(function(d) {
    //   context.moveTo(x(d) + x.bandwidth() / 2, height);
    //   context.lineTo(x(d) + x.bandwidth() / 2, height + 6);
    // });
    // context.strokeStyle = 'black';
    // context.stroke();

    // context.textAlign = 'center';
    // context.textBaseline = 'top';
    // x.domain().forEach(function(d) {
    //   context.fillText(d, x(d) + x.bandwidth() / 2, height + 6);
    // });

    context.beginPath();
    yTicks.forEach(function(d) {
      context.moveTo(0, y(d) + 0.5);
      context.lineTo(-6, y(d) + 0.5);
    });
    context.strokeStyle = 'black';
    context.stroke();

    context.textAlign = 'right';
    context.textBaseline = 'middle';
    yTicks.forEach(function(d) {
      context.fillText(yTickFormat(d / 1000), -9, y(d));
    });

    context.beginPath();
    context.moveTo(-6.5, 0.5);
    context.lineTo(0.5, 0.5);
    context.lineTo(0.5, height + 0.5);
    context.lineTo(-6.5, height + 0.5);
    context.strokeStyle = 'black';
    context.stroke();

    context.save();
    // context.rotate(-Math.PI / 2);
    // context.textAlign = 'right';
    // context.textBaseline = 'top';
    // context.font = 'bold 10px sans-serif';
    // context.fillText('Frequency', -10, 10);
    context.restore();

    context.fillStyle = 'steelblue';
    data.forEach(function(d) {
      // context.fillRect(x(d.Run), y(d.Speed), x.bandwidth(), height - y(d.Speed));
      context.fillRect(d.Run, y(d.Speed), x.bandwidth(), height - y(d.Speed));
    });
  }
}
