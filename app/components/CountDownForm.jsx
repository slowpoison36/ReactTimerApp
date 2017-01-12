var React = require("react");

var CountDownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var seconds = this.refs.seconds.value;
    if(seconds.match(/^[0-9]+$/)){
      this.refs.seconds.value="";
      this.props.onSetCountDown(parseInt(seconds),10);
    }
  },
    render:function(){
      return(
        <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
              <input type="search" ref="seconds" placeholder="Search time in seconds"/>
              <button className="button expanded">Start</button>
        </form>
        </div>

      )
    }

});

module.exports = CountDownForm;
