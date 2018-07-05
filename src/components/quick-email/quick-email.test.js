import React from 'react';
import QuickEmail from './quick-email.jsx';
import enzyme from 'enzyme';

jest.mock('react-transition-group');

const mountWrapper=enzyme.mount(<QuickEmail></QuickEmail>);

it('should render correct htmls',()=>{
	expect(mountWrapper.find('.quick-email main form div input').length).toEqual(2);
	expect(mountWrapper.find('.quick-email main form div textarea').exists()).toEqual(true);
	expect(mountWrapper.find('.quick-email footer div button').exists()).toEqual(true);
});	

it('should close after clicking close', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.quick-email header>div>button').simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(false);
});
