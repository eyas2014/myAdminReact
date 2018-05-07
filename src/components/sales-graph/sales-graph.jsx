import React from 'react';
import Morris from '../../library/morris/morris.js';
import 'jquery-knob';

export default class SalesGraph extends React.Component{
	componentDidMount(){

		$('.knob').knob({
			width: '100px',
			height: '100px',
			fgColor: "#39CCCC"	
		});

		var {data}=this.props;

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
			gridTextSize     : 10	}); 

	}  

	render(){
                var style = {
                    height: '250px'
                };

    			return (
    				<div className="sales-graph">
					<header className="">
						<div className="btn">
							<i className="fa fa-th"></i><span> Sales Graph</span>
						</div>
						<div className="tools float-right">
							<button className="btn btn-sm" datawidget="toggle">
								<i className="fa fa-minus"></i>
							</button>
							<button className="ml-1 btn btn-sm" datawidget="remove">
								<i className="fa fa-times"></i>
							</button>
						</div>
					</header>

                        		<main>
                            			<div className="chart" id="line-chart" style={style}>
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
    			)
	}
}    