import React from 'react';

export default class Progress extends React.Component{
	render(){
		return (
			<div className='col-6 float-left mt-3'>
		        <div><span>{this.props.title}</span><span className='float-right'>{`${this.props.progress}%`}</span></div>
		        <div className="progress" style={{height: '10px'}}>
	  				<div className="bg-success progress-bar" role="progressbar" style={{width: `${this.props.progress}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
	)}

}
