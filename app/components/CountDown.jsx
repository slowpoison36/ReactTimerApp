var React = require("react");
var Clock = require("Clock");
var CountDownForm= require("CountDownForm");
var Controls = require("Controls");

var CountDown = React.createClass({
  getInitialState:function(){
    return {
      count:0,
      countdownStatus:"stopped"
    }
  },
  componentDidUpdate:function(prevProp,prevState){
    if(this.state.countdownStatus !==prevState.countdownStatus){
        switch(this.state.countdownStatus){
          case "started":
            this.startTimer();
            break;
          case "stopped":
            this.setState({count:0})
          case "paused":
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        }
    }
  },
  componentWillUnmount:function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer:function(){
    this.timer = setInterval(()=>{
      var newCount = this.state.count -1;
      this.setState({
        count:newCount>=0?newCount:0
      })
      if(newCount===0){
        this.setState({countdownStatus:"stopped"});
      }
    },1000)
  },
  handleCountDown:function(seconds){
    this.setState({
      count:seconds,
      countdownStatus:"started"
    })
  },
  handleUpdateToStatus:function(newStatus){
    this.setState({countdownStatus:newStatus})
  },

  render:function(){
    var that = this;
    var {count,countdownStatus} = this.state;
    var  handleStatusChange = function(){
      if(countdownStatus!=="stopped"){
        return <Controls controlStatus={countdownStatus} renderChange={that.handleUpdateToStatus} />
      } else {
          return <CountDownForm onSetCountDown={that.handleCountDown}/>
      }
    };
  return(
    <div>
      <Clock totalSecond={count}/>
      {handleStatusChange()}

    </div>
  )
}
});

module.exports=CountDown;
