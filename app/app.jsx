var React = require("react");
var ReactDOM = require("react-dom");
var Main = require("Main");
var Nav = require("Nav");
var CountDown = require("CountDown");
var Timer = require("Timer");
var {Route,Router,IndexRoute,hashHistory} = require("react-router");

require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

require("style!css!sass!applicationStyles");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={CountDown}/>
			<IndexRoute component={Timer} />
		</Route>
	</Router>
	,
	document.getElementById("app"));
