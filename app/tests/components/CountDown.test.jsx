var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var CountDown = require("CountDown");

describe("countdown",()=>{
  it("should exits",()=>{
    expect(CountDown).toExist();
  });
  it("countdown should update state and count down ",(done)=>{
    var countDown = TestUtils.renderIntoDocument(<CountDown/>);
    countDown.handleCountDown(10)
    expect(countDown.state.count).toBe(10);
    expect(countDown.state.countdownStatus).toBe("started");

    setTimeout(()=>{
      expect(countDown.state.count).toBe(9);
      done();
    },1001)
  })

  it("should never count under zero ",(done)=>{
    var countDown = TestUtils.renderIntoDocument(<CountDown/>);
    countDown.handleCountDown(1)
    setTimeout(()=>{
      expect(countDown.state.count).toBe(0);
      done();
    },3001)
});

});
