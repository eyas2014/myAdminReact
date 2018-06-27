import React from 'react';
import ChatMessage from './chat-message.jsx';
import 'jquery-slimscroll';

export default class Conversations extends React.Component{
	componentDidMount(){
		$("#chat-box").slimScroll({height:'250px'});
	}

	componentWillMount(){
		this.setState({
			messages: this.props.data
		});
	}

	render(){
		return (
			<div id="chat-box">
			{this.state.messages.map(function(message, iterator){
					return (<ChatMessage
							displayName={message.displayName}
							key= {iterator}
							displayPicture={message.displayPicture}
							time = {message.time}
							content = {message.content}
							attachment = {message.attachment}></ChatMessage>);
				})}

			</div>)
	}
}
