import 'jquery-sparkline';
import React from 'react';

export default class SparkLine extends React.Component{
	componentDidMount(){
		const options={width: '80px', height: '60px'};
		$('#sparkline1').sparkline(this.props.data[0], options);
		$('#sparkline2').sparkline(this.props.data[1], options);
		$('#sparkline3').sparkline(this.props.data[2], options);
	}

	render(){
		return(<div className='row'>
				<div className='col-4 text-center text-muted'>
					<span id='sparkline1'></span>
					<span>Visitors</span>
				</div>
				<div className='col-4 text-center text-muted'>
					<span id='sparkline2'></span>
					<span>Online</span>
				</div>
				<div className='col-4 text-center text-muted'>
					<span id='sparkline3'></span>
					<span>Exists</span>
				</div>
		       </div>)
	}
}
