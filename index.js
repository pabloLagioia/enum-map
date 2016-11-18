"use strict";

module.exports = function() {

  var enumeration = {};

  for (var i in arguments) {
    enumeration[arguments[i]] = arguments[i];
  }

  return enumeration;

}