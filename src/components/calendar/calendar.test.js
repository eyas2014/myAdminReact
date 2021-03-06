import React from 'react';
import Calendar from './calendar.jsx';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('./progress.jsx');

const wrapper=enzyme.shallow(<Calendar></Calendar>);


it('should render correct htmls',()=>{
	expect(wrapper.find('.calendar header>button').length).toEqual(2);
	expect(wrapper.find('.calendar header>div>button').length).toEqual(3);
	expect(wrapper.find('.calendar .wrapper main #calendar').exists()).toEqual(true);
	expect(mountWrapper.find('.calendar .wrapper footer .progress').length).toEqual(4);
});

document.body.innerHTML='<div  id="root"></div>';

const mountWrapper=enzyme.mount(<Calendar></Calendar>);

it('should collapse after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.calendar header>div>button').at(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(false);
});

it('should expand after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.calendar header>div>button').at(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(true);
});

it('should close after clicking close', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.calendar header>div>button').at(0).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(false);
});