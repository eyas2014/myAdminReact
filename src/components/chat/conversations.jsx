import React from 'react';

export default class Conversations extends React.Component{

	componentWillMount(){

				this.setState({
					messages: this.props.data
				});
	}


	render(){



				var style2 = {
				    overflow: "hidden", 
				    width: "auto",
				    height: "250px"
				} ;

				var chatMessages = this.state.messages.map(function(message, iterator){
					return (
						<ChatMessage
							displayName={message.displayName}
							key= {iterator}
							displayPicture={message.displayPicture}
							time = {message.time}
							content = {message.content}
							attachment = {message.attachment} />
					)

				})

				return (
					<div id="chat-box">
						{chatMessages}
					</div>
				)
	}
}




class ChatMessage extends React.Component{
	render(){
				var style2 = {
				    overflow: "hidden", 
				    width: "auto",
				    height: "250px"
				} ;

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