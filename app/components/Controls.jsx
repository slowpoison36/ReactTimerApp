var React = require("react");

var Controls = React.createClass({
  propType:{
    controlStatus:React.PropTypes.string.isRequired,
    renderChange:React.PropTypes.func.isRequired
  },
  renderChange:function(newStatus){
    return ()=>{
      this.props.renderChange(newStatus);
    }
  },

  render:function(){
    var {controlStatus,onStateChange} = this.props;
    var startPauseButton = ()=>{
       if(controlStatus==="started"){
         return <button className="button secondary" onClick={this.renderChange("paused")}>Pause</button>
       } else if(controlStatus==="paused") {
         return <button className="button info" onClick={this.renderChange("started")}>Start</button>
       }
    }
    return(
      <div className="controls">
      {startPauseButton()}
      <button className="button alert hollow"  onClick={this.renderChange("stopped")}>Clear</button>
      </div>
    )
  }

})

module.exports = Controls;
