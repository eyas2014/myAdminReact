import React from 'react';

export default class StatPanel extends React.Component{
	render(){
		var style2={
			borderLeft: 'solid 1px #ccc',
		};
		const {percentage, title, amount}=this.props.item;
		if(this.props.num==0){
			return(
				<div className="col-6 col-md-3 text-center py-0">
					<div className="text-success"><i className="fas fa-sort-up"></i><span> {percentage}</span></div>
					<p className="m-0  font-weight-bold ">{amount}</p>
					<p>{title}</p>
				</div>
			)
		}else{
			return(
				<div style={style2} className="col-6 col-md-3 text-center py-0">
					<div className="text-success"><i className="fas fa-sort-up"></i><span> {percentage}</span></div>
					<p className="m-0  font-weight-bold ">{amount}</p>
					<p>{title}</p>
				</div>
			)
		}
	}
}
