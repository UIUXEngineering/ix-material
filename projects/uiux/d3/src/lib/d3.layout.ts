import { select } from 'd3-selection';

export class IxD3Layout {
  _dimensions = {
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

  constructor(dim) {
    if (dim) {
      this._dimensions = Object.assign(this._dimensions, dim);
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
    return this._dimensions.width
      - this._dimensions.margin.left
      - this._dimensions.margin.right;
  }

  get centerBoundedWidth() {
    return this.boundedWidth / 2;
  }

  get boundedHeight() {
    return this._dimensions.height
      - this._dimensions.margin.top
      - this._dimensions.margin.bottom;
  }

  set boundedHeight(boundedHeight) {
    this._dimensions.height =
      boundedHeight + this._dimensions.margin.top + this._dimensions.margin.bottom;
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
    this.createWrapper(wrapperSelector);
    this.createBounds();

    return this.wrapper;
  }

  createWrapper(wrapperSelector) {
    this.wrapper = select(wrapperSelector)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    return this.wrapper;
  }

  createBounds() {
    this.bounds = this.wrapper.append('g')
      .style('transform', this.translateBounds);

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
