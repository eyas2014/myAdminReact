import React from 'react';
import Progress from './progress.jsx';
import StatPanel from './stat-panel.jsx';
import {CSSTransition} from "react-transition-group";

import {Line} from "react-chartjs-2";

export default class MonthlyCapReports extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}

	handleToggle(){
		this.setState(state=>({collapse:!state.collapse}));
	}

	handleClose(){
		this.setState({show: false});
	}

	render(){
		const panelData=[{percentage: '17%', amount:'$35,210.43', title: 'TOTAL REVENUE'},
						{percentage: '17%', amount:'$35,210.43', title: 'TOTAL REVENUE'},
						{percentage: '17%', amount:'$35,210.43', title: 'TOTAL REVENUE'},
						{percentage: '17%', amount:'$35,210.43', title: 'TOTAL REVENUE'}];

		var progressData=this.props.data.progressData;

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

		return(
		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
			<div className="monthly-capital-reports bg-white text-black box-shadow" ref="monthlyCapReports">
				<header className='bg-white box-border-bottom'>
					<div className="btn"><span>Monthly Recap Report</span></div>
					<div className='btn-group float-right text-muted'>
						<div className='btn' onClick={this.handleClose.bind(this)}><i className='fa fa-times'></i></div>
						<div className='btn' onClick={this.handleToggle.bind(this)}><i className='fa fa-minus'></i></div>
						<div className='btn'><i className='fa fa-bars'></i></div>
					</div>
					<div>
					</div>
				</header>
				<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
					<div className="wrapper">
						<main className="box-border-bottom row mx-0">
							<div  className='col-8 mx-0 p-3'>
								<Line data={this.props.data.salesChartData} options={salesChartOptions}></Line>
							</div>
							<div className="col-4 p-3">
								<div className="pt-3 text-center">
									<span  className="text-center font-weight-bold">Goal Completion</span>
								</div>
								{progressData.map(function(item, index){
									return (<Progress item={item} key={index}></Progress>)
								})}
							</div>
						</main>
						<footer className="container-fluid bg-white">
							<div className="row py-4">
								{panelData.map((item, index)=>{
									return(<StatPanel item={item} key={index} num={index}></StatPanel>)
								})}
							</div>
						</footer>
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>)
	}

}