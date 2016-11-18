var chai = require("chai");
var expect = chai.expect;
var Enum = require("./index");

describe("Enum", function() {

  it("should create key and value", function() {

    var ACTIONS = Enum("REMOVE_TODO", "CREATE_TODO");

    expect(ACTIONS).to.exist;
    expect(ACTIONS.REMOVE_TODO).to.equal("REMOVE_TODO");
    expect(ACTIONS.CREATE_TODO).to.equal("CREATE_TODO");

  });

});