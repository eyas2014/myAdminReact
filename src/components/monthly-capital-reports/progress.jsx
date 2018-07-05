import React from 'react';

export default class Progress extends React.Component{
	render(){
		const item=this.props.item;
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

		return(
			<div className="my-3">
				<span className="mt-3 mb-0">{item.step}</span> <span className="float-right font-weight-bold ">{item.completed+"/"+item.sum}</span>
				<div className="progress md">
					<div className={"progress-bar "+barColor} role="progressbar" style={{width: percent}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>)

	}


}

/*								var percent=item.completed/item.sum;
								
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


							*/