var React = require("react");
var Clock = React.createClass({
  getDefaultProps:function(){
    totalSecond:0
  },
  propType:{
    totalSecond:React.PropTypes.number
  },
  formatSecond:function(totalSecond){
    var second = totalSecond%60;
    var minute = Math.floor(totalSecond/60);
    if(second<10){
      second = "0"+second;
    }
    if(minute<10){
      minute = "0"+minute;
    }
    return minute + ":"+second;

  },
  render:function(){
    var {totalSecond} = this.props;
    return(
    <div>
    <div className="clock-timer">
      <span className="timer-text">{this.formatSecond(totalSecond)}</span>
    </div>
    </div>
    )
  }
})

module.exports = Clock;
