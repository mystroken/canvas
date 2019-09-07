'use strict';

var Renderable = require('./Renderable');

/**
 * The Canvas constructor, which expects an HTML element referring to a canvas.
 *
 * @param {HTMLCanvasElement} element
 */
function Canvas(element) {

  // Test if the provided element actually is a canvas.
  var elementIsCanvas = !!(element.getContext && element.getContext('2d'));
  if(!elementIsCanvas) {
    throw new TypeError('The provided element is not a canvas element.');
  }

  // Store the reference to the DOM-element and
  // the canvas 2d context.
  this.el = element;
  this.cx = this.el.getContext('2d');

  // Keep a list of renderable items.
  this.rs = [];
}

Canvas.prototype = {

  /**
   * Adds a renderable onto canvas.
   *
   * @param {Renderable} r renderable object.
   */
  add: function(r) {
    if (typeof r !== 'object' || !(r instanceof Renderable))
      throw new TypeError('Invalid renderable provided');

    this.rs.push(r);
  },

  /**
   * Remove a renderable.
   *
   * @param {Renderable} r renderable object.
   */
  remove: function(r) {
    this.rs.splice(r, 1);
  },

  /**
   * Clear the canvas.
   */
  clear: function() {
    this.cx.clearRect(0, 0, this.el.width, this.el.height);
  },

  /**
   * Get the canvas context.
   */
  context: function() {
    return this.cx;
  },

  /**
   * Render all the renderables,
   * like they want to be rendered!
   */
  render: function() {
    this.clear();

    var ctx = this.cx;
    this.rs.forEach(function(r) {
      r.render(ctx);
    });
  },

  /**
   * Resize the canvas.
   *
   * @param {number} w the width.
   * @param {number} h the height.
   */
  resize: function(w, h) {
    this.cx.canvas.width = w;
    this.cx.canvas.height = h;
  },

  /**
   * Get the canvas size.
   */
  size: function() {
    return {
      width: this.cx.canvas.width,
      height: this.cx.canvas.height
    };
  },
};

module.exports = Canvas;
