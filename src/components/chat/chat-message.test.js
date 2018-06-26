import React from 'react';
import ChatMessage from './chat-message';
import enzyme from 'enzyme';

var message = {
		displayName:"Mike Doe",
		displayPicture: "dist/img/user4-128x128.jpg",
		time: "2:15",
		content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market",
		attachment: {
			groupName: "Attachments",
			fileName: "Theme-thumbnail-image.jpg"
		}
	};

const wrapper=enzyme.shallow(<ChatMessage
							displayName={message.displayName}
							displayPicture={message.displayPicture}
							time = {message.time}
							content = {message.content}
							attachment = {message.attachment}></ChatMessage>);

it ('should match the snapshot', ()=>{
	expect(wrapper).toMatchSnapshot();
})
