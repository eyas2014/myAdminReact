import React from 'react';
import Conversations from './Conversations';
import enzyme from 'enzyme';

var messages = [
	{
		displayName:"Mike Doe",
		displayPicture: "dist/img/user4-128x128.jpg",
		time: "2:15",
		content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market",
		attachment: {
			groupName: "Attachments",
			fileName: "Theme-thumbnail-image.jpg"
		}
	},
	{
		displayName: "Alexander Pierce",
		displayPicture: "dist/img/user3-128x128.jpg",
		time: "5:15",
		content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market"
	},
	{
		displayName: "Susan Doe",
		displayPicture: "dist/img/user2-160x160.jpg",
		time: "5:30",
		content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market"
	}
];



const wrapper=enzyme.shallow(<Conversations data={messages}></Conversations>);

it ('should match the snapshot', ()=>{
	expect(wrapper).toMatchSnapshot();
})
