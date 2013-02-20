/**
 * Module Dependencies
 */

var draggable = require('./svg.draggable.js');

/**
 * Export
 */

module.exports = function(SVG) {
  SVG.extend(SVG.Element, draggable);
};
