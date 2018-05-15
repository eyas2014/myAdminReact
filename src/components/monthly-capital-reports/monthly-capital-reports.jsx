import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import {CSSTransition} from "react-transition-group";

export default class MonthlyCapReports extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}

	componentDidUpdate(){
		var ctx=this.refs.salesChart;
		if(ctx){
			var salesChartData = this.props.data.salesChartData;
			var salesChartOptions = {
				scales: {
	    			xAxes: [{
	                	gridLines: {
	                    	display:false
	                	}
	            	}],
	    			yAxes: [{
	                	gridLines: {
	                    	display:false
	                	}   
	            	}]
	    		}
			};

			//Create the line chart
			new Chart(ctx, {
				type: 'line',
				data: salesChartData,
				options: salesChartOptions
			});
		}
	}


	componentDidMount(){
		this.refs.remove.onclick=()=>{
			this.setState({show: false});
		};
		this.refs.toggle.onclick=()=>{
			this.setState(state=>({collapse:!state.collapse}));
		};
		this.componentDidUpdate();
	}

	render(){

		var style2={
			borderLeft: 'solid 1px #ccc',
		};



		var progressData=this.props.data.progressData;

		var progressBar=progressData.map(function(item, index){
								var percent=item.completed/item.sum;
								
								var barColor;
								if(percent<0.25){
									barColor="bg-info"}
								else if(percent<0.5){
									barColor="bg-success"}
								else if(percent<0.75){
									barColor="bg-warning"}
								else{
									barColor="bg-danger"}				
								percent=percent.toString()+"0";
								percent=percent.substr(2,2)+"%";
								
						return(<div key={index} className="my-3">
							<span className="mt-3 mb-0">{item.step}</span> <span className="float-right font-weight-bold ">{item.completed+"/"+item.sum}</span>
							<div className="progress md">
							<div className={"progress-bar "+barColor} role="progressbar" style={{width: percent}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							</div>)
						});

		return(
		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
			<div className="monthly-capital-reports bg-white text-black box-shadow" ref="monthlyCapReports">
				<header className='bg-white box-border-bottom'>
					<div className="btn"><span>Monthly Recap Report</span></div>
					<div className='btn-group float-right text-muted'>
						<div className='btn' ref="remove"><i className='fa fa-times'></i></div>
						<div className='btn' ref="toggle"><i className='fa fa-minus'></i></div>
						<div className='btn'><i className='fa fa-bars'></i></div>
					</div>
					<div>
					</div>
				</header>
				<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
					<div className="wrapper">
						<main className="box-border-bottom row mx-0">
							<div  className='col-8 mx-0 p-3'><canvas ref="salesChart"></canvas>
							</div>
							<div className="col-4 p-3">
								<div className="pt-3 text-center">
									<span  className="text-center font-weight-bold">Goal Completion</span>
								</div>
								{progressBar}
							</div>
						</main>
						<footer className="container-fluid bg-white">
							<div className="row py-4">
								<div className="col-6 col-md-3 text-center py-0">
									<div className="text-success"><i className="fas fa-sort-up"></i><span> 17%</span></div>
									<p className="m-0  font-weight-bold ">$35,210.43</p>
									<p>TOTAL REVENUE</p>
								</div>

								<div style={style2} className="col-6 col-md-3 text-center py-0">
									<div className="text-success"><i className="fas fa-sort-up"></i><span> 17%</span></div>
									<p className="m-0  font-weight-bold ">$35,210.43</p>
									<p>TOTAL REVENUE</p>
								</div>

								<div style={style2} className="col-6 col-md-3 text-center py-0">
									<div className="text-success"><i className="fas fa-sort-up"></i><span> 17%</span></div>
									<p className="m-0  font-weight-bold ">$35,210.43</p>
									<p>TOTAL REVENUE</p>
								</div>

								<div style={style2} className="col-6 col-md-3 text-center py-0">
									<div className="text-success"><i className="fas fa-sort-up"></i><span> 17%</span></div>
									<p className="m-0  font-weight-bold ">$35,210.43</p>
									<p>TOTAL REVENUE</p>
								</div>

							</div>
						</footer>
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>)
	}

}
