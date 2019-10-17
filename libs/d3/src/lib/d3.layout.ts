import { hasValue, ternary, atLeast } from '@uiux/fn';
import { select, Selection } from 'd3-selection';

export interface IxD3CanvasMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface IxD3CanvasDimension {
  width: number;
  height: number;
  margin: IxD3CanvasMargins;
}

export class IxD3Layout {
  _dimensions: IxD3CanvasDimension = {
    width: 0,
    height: 0,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  wrapper = null;
  bounds = null;

  atLeast: (val) => number = atLeast(0);

  constructor(dim: IxD3CanvasDimension) {
    if (dim) {
      this._dimensions.width = this.atLeast(dim.width);
      this._dimensions.height = this.atLeast(dim.height);
      this._dimensions.margin.top = this.atLeast(dim.margin.top);
      this._dimensions.margin.right = this.atLeast(dim.margin.right);
      this._dimensions.margin.bottom = this.atLeast(dim.margin.bottom);
      this._dimensions.margin.left = this.atLeast(dim.margin.left);
    }
  }

  get width() {
    return this._dimensions.width;
  }

  set width(val) {
    this._dimensions.width = val;
  }

  get height() {
    return this._dimensions.height;
  }

  set height(val) {
    this._dimensions.height = val;
  }

  get top() {
    return this._dimensions.margin.top;
  }

  set top(val) {
    this._dimensions.margin.top = val;
  }

  get right() {
    return this._dimensions.margin.right;
  }

  set right(val) {
    this._dimensions.margin.right = val;
  }

  get bottom() {
    return this._dimensions.margin.bottom;
  }

  set bottom(val) {
    this._dimensions.margin.bottom = val;
  }

  get left() {
    return this._dimensions.margin.left;
  }

  set left(val) {
    this._dimensions.margin.left = val;
  }

  get boundedWidth() {
    return this.atLeast(this._dimensions.width - this._dimensions.margin.left - this._dimensions.margin.right);
  }

  get centerBoundedWidth() {
    return this.boundedWidth / 2;
  }

  get boundedHeight() {
    return this.atLeast(this._dimensions.height - this._dimensions.margin.top - this._dimensions.margin.bottom);
  }

  set boundedHeight(boundedHeight) {
    this._dimensions.height = this.atLeast(
      boundedHeight + this._dimensions.margin.top + this._dimensions.margin.bottom
    );
  }

  get centerBoundedHeight() {
    return this.boundedHeight / 2;
  }

  get translateBounds() {
    return `translate(${this.left}px, ${this.top}px)`;
  }

  get tranlateXAxisBottom() {
    return `translateY(${this.boundedHeight}px`;
  }

  /**
   * Creates Wrapper and Bounds nodes
   */
  createWrapperAndBounds(wrapperSelector) {
    this.selectWrapper(wrapperSelector);
    this.appendBounds();

    return this.wrapper;
  }

  selectWrapper(wrapperSelector: string) {
    this.wrapper = select(wrapperSelector)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    return this.wrapper;
  }

  appendWrapper(selection: Selection<any, any, HTMLElement, any>) {
    this.wrapper = selection
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    return this.wrapper;
  }

  appendBounds() {
    this.bounds = this.wrapper.append('g').style('transform', this.translateBounds);

    return this.bounds;
  }

  translateToolTip(x, y) {
    x = x + this._dimensions.margin.left;
    y = y + this._dimensions.margin.right;
    return `translate(
            calc( -50% + ${x}px),
            calc(-100% + ${y}px)
        )`;
  }
}
