export interface DomRectPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const defaultResizeProperties: DOMRectReadOnly = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  toJSON: () => {
  },
};

function getResizeProperties({ x, y, width, height, top, right, bottom, left }: DOMRectReadOnly): DomRectPosition {
  return { x, y, width, height, top, right, bottom, left };
}
