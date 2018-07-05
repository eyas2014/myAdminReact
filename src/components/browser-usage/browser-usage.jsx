import React from 'react';
import ReactDOM from 'react-dom';
import {Doughnut} from "react-chartjs-2";
import {CSSTransition} from "react-transition-group";

export default class BrowserUsage extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}

	handleClose(){
			this.setState({show: false});
	}

	handleToggle(){
			this.setState(state=>({collapse:!state.collapse}));
	}
	
	render(){
		return(
			<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
				<div className="browser-usage" ref="browserUsage">
					<header className="box-header box-border-bottom clearfix">
						<div className="btn"><span>Browser Usage</span></div>
						<div className="btn-group float-right">
							<div className="btn" onClick={this.handleToggle.bind(this)}><i className="fas fa-minus text-muted"></i></div>
							<div className="btn" onClick={this.handleClose.bind(this)}><i className="fas fa-times text-muted"></i></div>
						</div>
					</header>
					<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
						<div className="wrapper">
							<main className="box-border-bottom">
								<div className="chart-responsive">
									<Doughnut data={this.props.data.data} options={{cutoutPercentage: 45 }}></Doughnut>
								</div>

								<div>
									<ul className="p-0">
										<li className="ml-2 d-inline-block">
											<i className="text-danger far fa-circle"></i>
											<span className="ml-1">Chrome</span>
										</li>
										<li className="ml-2 d-inline-block">
											<i className="text-success far fa-circle"></i>
											<span className="ml-1">IE</span>
										</li>
										<li className="ml-2 d-inline-block">
											<i className="text-warning far fa-circle"></i>
											<span className="ml-1">FireFox</span>
										</li>
										<li className="ml-2 d-inline-block">
											<i className="text-primary far fa-circle"></i>
											<span className="ml-1">Safari</span>
										</li>
										<li className="ml-2 d-inline-block">
											<i className="text-info far fa-circle"></i>
											<span className="ml-1">Opera</span>
										</li>
										<li className="ml-2 d-inline-block">
											<i className="text-muted far fa-circle"></i>
											<span className="ml-1">Navigator</span>
										</li>

									</ul>
								</div>
							</main>
							<footer className="">
							<div className="box-border-bottom">
								<div className="btn"><span>United States of America</span></div>
								<div className="float-right btn text-danger">
									<i className="fa fa-angle-down font-weight-light"></i>
									<span className="">12%</span>
								</div>	
							</div>
							<div className="box-border-bottom">
								<div className="btn"><span>India</span></div>
								<div className="float-right btn text-success">
									<i className="fa fa-angle-up font-weight-light"></i>
									<span className="">12%</span>
								</div>	
							</div>
							<div className="box-border-bottom">
								<div className="btn"><span>China</span></div>
								<div className="float-right btn text-warning">
									<i className="fa fa-angle-left font-weight-light"></i>
									<span className="">12%</span>
								</div>	
							</div>
							</footer>
						</div>
					</CSSTransition>
				</div>
			</CSSTransition>)
	}


}