var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Controls = require("Controls");

describe("Controls",()=>{
  it("should exits",()=>{
    expect(Controls).toExist();
  });
  describe("render",()=>{
    it("should show  pause button",()=>{
      var controls = TestUtils.renderIntoDocument(<Controls controlStatus="start"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find("button:contains(Pause)");
      expect($pauseButton.length).toBe(1);
    });
    it("should show start button",()=>{
      var controls = TestUtils.renderIntoDocument(<Controls controlStatus="pause"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find("button:contains(Start)");
      expect($startButton.length).toBe(1);
    });

  })
})
