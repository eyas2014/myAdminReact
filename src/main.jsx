import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HeaderBar from './components/header-bar/header-bar.jsx';
import MainNavigation from './components/main-navigation/main-navigation.jsx';
import './main.less';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Boxed from './pages/boxed.jsx';
import Charts from './pages/charts.jsx';
import CollapsedSidebar from './pages/collapsed-sidebar.jsx';
import Dashboard1 from './pages/dashboard1.jsx';
import Dashboard2 from './pages/dashboard2.jsx';
import Fixed from './pages/fixed.jsx';
import TopNavigation from './pages/top-navigation.jsx';
import Widgets from './pages/widgets.jsx';
import Reducers from './widgets/reducers.jsx';

$.get("data/data.txt", function(data, status){
	JSON.parse(data);

}.bind(this));

let store=createStore(Reducers);

class App extends React.Component{
	render(){
		var el=<p></p>;
		return(<div>
			<HeaderBar></HeaderBar>
			<Router>
				<div className="main-body">
					<MainNavigation></MainNavigation>
					<div className="main-content shrink">
					<Provider store={store}>
						<Switch>
							<Route exact path="/boxed" component={Boxed} />
							<Route exact path="/charts" component={Charts} />
							<Route exact path="/collapsed-sidebar" component={CollapsedSidebar} />
							<Route exact path="/dashboard1" component={Dashboard1} />
							<Route exact path="/" component={Dashboard1} />
							<Route exact path="/dashboard2" component={Dashboard2} />
							<Route exact path="/fixed" component={Fixed} />
							<Route exact path="/top-navigation" component={TopNavigation} />
							<Route exact path="/widgets" component={Widgets} />
						</Switch>
					</Provider>
					<footer className="box-border-top bg-white">
						<div className="float-right">
							<b>Version</b> 2.4.0
						</div>
						<strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights reserved.
					</footer>
					</div>
				</div>
			</Router>
			</div>)
	}


}


ReactDOM.render(<App />, document.getElementById('demo'));



$(".main-header").children("nav").children(".collapse-toggler").on('click', function(){
	var element=$(".main-aside");
	var header=$(".main-header");
	var content=$(".main-content");
	if(element.is(".expand")){
		header.removeClass("expand").addClass("shrink"); 
		element.removeClass("expand").addClass("shrink"); 
		content.removeClass("shrink").addClass("expand"); 
	}
	else {
		element.addClass("expand").removeClass("shrink");
		header.addClass("expand").removeClass("shrink"); 
		content.removeClass("expand").addClass("shrink"); 
	}


});
