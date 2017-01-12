var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $=require("jQuery");
var TestUtils = require("react-addons-test-utils");
var Clock = require("Clock");

describe("Clock",()=>{
  it("Should exit",()=>{
    expect(Clock).toExist();
  })
});
describe("render",()=>{
  it("should render timer text",()=>{
      var clock = TestUtils.renderIntoDocument(<Clock totalSecond={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actual = $el.find(".timer-text").text();
      expect(actual).toBe("01:02");
  })
})
describe("formatSecond",()=>{
  it("Should return formated second",()=>{
     var second = 615;
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var expected = "10:15";
      var actual = clock.formatSecond(second);
      expect(actual).toBe(expected);

  })

  it("Should return formated second when min/second is less than 10",()=>{
     var second = 61;
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var expected = "01:01";
      var actual = clock.formatSecond(second);
      expect(actual).toBe(expected);

  })
})
