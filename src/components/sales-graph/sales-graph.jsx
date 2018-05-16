import React from 'react';
import Morris from '../../library/morris/morris.js';
import 'jquery-knob';
import {CSSTransition} from "react-transition-group";

export default class SalesGraph extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}


	componentDidUpdate(){
		$('.knob').knob({
			width: '100px',
			height: '100px',
			fgColor: "#39CCCC"	
		});

		var {data}=this.props;

		if(this.refs.lineChart){
			new Morris.Line({
				element: 'line-chart',
				resize: true,
				data: data,
				xkey             : 'y',
				ykeys            : ['item1'],
				labels           : ['Item 1'],
				lineColors       : ['#efefef'],
				lineWidth        : 2,
				hideHover        : 'auto',
				gridTextColor    : '#fff',
				gridStrokeWidth  : 0.4,
				pointSize        : 4,
				pointStrokeColors: ['#efefef'],
				gridLineColor    : '#efefef',
				gridTextFamily   : 'Open Sans',
				gridTextSize     : 10	}
			); 
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
		var style = {
        		height: '250px'
            };

    	return (
    		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
    			<div className="sales-graph">
					<header className="">
						<div className="btn">
							<i className="fa fa-th"></i><span> Sales Graph</span>
						</div>
						<div className="tools float-right">
							<button className="btn btn-sm" ref="toggle">
								<i className="fa fa-minus"></i>
							</button>
							<button className="ml-1 btn btn-sm" ref="remove">
								<i className="fa fa-times"></i>
							</button>
						</div>
					</header>

	    			<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
						<div className="wrapper">
							<main>
								<div className="chart" id="line-chart" style={style} ref="lineChart">
	                            </div>
	                        </main>
	                        <footer className="row">
								<div className="col-4">
									<input type="text" className="knob" value="20" readOnly>
									</input>
								</div>
								<div className="col-4">
									<input type="text" className="knob" value="50" readOnly>
									</input>
								</div>
	 							<div className="col-4">
									<input type="text" className="knob" value="80" readOnly>
									</input>
								</div>
	                        </footer>
	                    </div>
                    </CSSTransition>
				</div>
			</CSSTransition>
		)
	}
}    