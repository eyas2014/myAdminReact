import React from 'react';
import ReactDOM from 'react-dom';

export default class ProgressPanels extends React.Component{
	render(){
		var data=this.props.data;
		return(<div className="text-white">
				{data.map(function(item, index){
					return(<Panel data={item} key={index}>
						</Panel>)

				})}
			</div>)
	}


}

class Panel extends React.Component{
	render(){
		return(<div className={"box-shadow info-tag my-3 bg-"+this.props.data.color}>
				<div className="tag-box float-left text-center h2">
					<i className={this.props.data.icon}></i>
				</div>
				<div className="info-box">
					<p className="mb-0 pl-2">{this.props.data.name}</p>
					<p className="mb-0 pl-2">{this.props.data.value}</p>
					<div className="progress">
						<div className="progress-bar bg-white" style={{width: this.props.data.increase+"%"}}role="progressbar" aria-valuenow={this.props.data.increase} aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<p className="mb-0 pl-2">{this.props.data.increase+'% Increase in 30 Days'}</p>
				</div>

			</div>	)
	}

}