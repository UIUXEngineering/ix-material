import * as d3 from 'd3';

export class PocD3SvgBarChartRender {

  static render(shadowRoot: ShadowRoot, data: any): void {
    const domSvg: SVGSVGElement = shadowRoot.querySelector('svg') as SVGSVGElement;
    const svg: any = d3.select(domSvg);

    // remove all children 
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;
    const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const parseTime = d3.timeParse('%d-%b-%y');

    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .rangeRound([height, 0]);

    x.domain(data.map(function(d) {
      return d.Run;
    }));

    y.domain([0, d3.max(data, function(d) {
      return Number(d.Speed);
    })]);

    g.append('g')
      .attr('transform', 'translate(0,' + height + ')');
      // .call(d3.axisBottom(x));

    // Text Speed
    g.append('g')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end');
      // .text('Speed');

    g.selectAll()
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d) {
        // return x(d.Run);
        return d.Run;
      })
      .attr('y', function(d) {
        return y(Number(d.Speed));
      })
      .attr('width', x.bandwidth())
      .attr('height', function(d) {
        return height - y(Number(d.Speed));
      });
  }
}
