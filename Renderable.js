'use strict';

/**
 *
 * @param {number} x The position on X-axis.
 * @param {number} y The position on Y-axis.
 */
function Renderable(x, y) {
  // The object position.
  this.p = {
    x: x || 0,
    y: y || 0
  };
}

Renderable.prototype = {

  /**
   * Render the object.
   * Each renderable should implement render.
   *
   * @param {CanvasRenderingContext2D} c a canvas context.
   */
  render: function(c) {
    throw new TypeError('render() is not implemented.');
  }
};

module.exports = Renderable;
