import React from 'react';

export default class ChatMessage extends React.Component{
	render(){
				var attachment = "";

				if(this.props.attachment){
					 attachment = <div className="attachment">
					            <p>{this.props.attachment.groupName+":"}</p>

					            <p className="filename">
					                {this.props.attachment.fileName}
					            </p>

					            <div className="float-right">
					                <button type="button" className="btn btn-info btn-sm btn-flat">Open</button>
					            </div>
					        </div>
				}
				
				return (
				    <div className="item">
				        <img src={this.props.displayPicture} alt="user image" className="small-user-img" />
				        <div className="message">
				            <div className="message-title">
								<span className="text-info">{this.props.displayName}</span>
				                <small className="text-muted float-right">
				                	<i className="far fa-clock"></i> 
				                	{" "+this.props.time}
				                </small> 
				            </div>
				            <p>{this.props.content}</p>
				       	    {attachment}
				        </div>
				    </div>
				)
			}
	}


	/*

					    <div className="item">
				        <img src={this.props.displayPicture} alt="user image" className="small-user-img" />
				        <div className="message">
				            <div className="message-title">
								<span className="text-info">{this.props.displayName}</span>
				                <small className="text-muted float-right">
				                	<i className="far fa-clock"></i> 
				                	{" "+this.props.time}
				                </small> 
				            </div>
				            <p>{this.props.content}</p>
				       	    {attachment}
				        </div>
				    </div>

	*/