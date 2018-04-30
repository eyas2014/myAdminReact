import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import './browser-usage.less';


export default class BrowserUsage extends React.Component{
	componentDidMount(){
  var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
  var PieData = this.props.data.data;

  var pieOptions = {cutoutPercentage: 45 };
	new Chart(pieChartCanvas, {
		type: 'pie',
		data: PieData,
		options: pieOptions
	});

	}


	render(){
		return(<div className="browser-usage">
				<header className="box-header box-border-bottom clearfix">
					<div className="btn"><span>Browser Usage</span></div>
					<div className="btn-group float-right">
						<div className="btn" datawidget="toggle"><i className="fas fa-minus text-muted"></i></div>
						<div className="btn" datawidget="remove"><i className="fas fa-times text-muted"></i></div>
					</div>
				</header>
				<main className="box-border-bottom">
					<div className="chart-responsive">
						<canvas id="pieChart" height="150"></canvas>
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
			</div>)
	}


}