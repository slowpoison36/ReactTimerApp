var React = require("react");
var {Link} = require("react-router");

var Nav = React.createClass({
  render:function(){
    return (
        <div className="top-bar">
            <div className="top-bar-left">
            <ul className="menu" id="black">
              <li className="menu-text">Welcome</li>
              <li>
                <Link to="/" activeClassName="active">Clock</Link>
              </li>
              <li>
                <Link to="/" activeClassName="active">Timer</Link>
              </li>
            </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">
                CreatedBy:
                <li><a href="https://facebook.com" target="_blank">Personal</a></li>
                </li>
              </ul>
            </div>
        </div>

    )
  }
})

module.exports = Nav;
