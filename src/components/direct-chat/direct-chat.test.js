import React from 'react';
import DirectChat from './direct-chat.jsx';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('./message.jsx');

var messages=[{
	name: 'Alexander Pierce',
	time: new Date(),
	message: "Is this template really for free? That's unbelievable!"},
	{
	name: 'Sarah Bullock',
	time: new Date(),
	message: "You better believe it!"},
	{
	name: 'Alexander Pierce',
	time: new Date(),
	message: "Working with AdminLTE on a great app! Wanna join?"},
	{
	name: 'Sarah Bullock',
	time: new Date(),
	message: "I would love to."}
];

document.body.innerHTML='<div  id="root"></div>';

const mountWrapper=enzyme.mount(<DirectChat data={messages}></DirectChat>, {attachTo: document.getElementById('root')});

it('should render correct htmls',()=>{
	expect(mountWrapper.html()).toMatchSnapshot();
});

it('should render correct htmls',()=>{
	expect(require('./message.jsx').isCalledWith().length).toEqual(4);
	expect(mountWrapper.find('.wrapper main .message').length).toEqual(4);
});

it('should collapse after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.direct-chat header').childAt(1).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(false);
});

it('should expand after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.direct-chat header').childAt(1).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(true);
});

it('should close after clicking close', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.direct-chat header').childAt(1).childAt(3).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(false);
});
