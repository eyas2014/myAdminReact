import React from 'react';
import ChatMessage from './chat-message.jsx';

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

		return (
			<div id="chat-box">
				{this.state.messages.map(function(message, iterator){
					return (<ChatMessage
							displayName={message.displayName}
							key= {iterator}
							displayPicture={message.displayPicture}
							time = {message.time}
							content = {message.content}
							attachment = {message.attachment}></ChatMessage>)
				})}
			</div>)
	}
}




