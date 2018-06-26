import React from 'react';

export default class Todo extends React.Component{
	render(){
		const {content, time, color}=this.props.todo;
		return (<li>
					<div className="btn">
						<span className="">
							<i className="fa fa-ellipsis-v"></i>
							<i className="fa fa-ellipsis-v"></i>
						</span>
						<input type="checkbox" value="" />
						<span className="text">{content}</span>
						<small className={"badge "+color}><i className="fas fa-clock"></i>{time}</small>
					</div>
					<div className="tools float-right">
						<i className="fa fa-edit"></i>
						<i className="fas fa-trash-alt"></i>
					</div>
	            </li>)
	}
}