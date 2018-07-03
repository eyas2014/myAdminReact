import React from 'react';
import Calendar from './calendar.jsx';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('./progress.jsx');

const wrapper=enzyme.shallow(<Calendar></Calendar>);
const mountWrapper=enzyme.mount(<Calendar></Calendar>);

it('should render correct htmls',()=>{
	expect(wrapper.find('.calendar header>button').length).toEqual(2);
	expect(wrapper.find('.calendar header>div>button').length).toEqual(3);
	expect(wrapper.find('.calendar .wrapper main #calendar').exists()).toEqual(true);
	expect(mountWrapper.find('.calendar .wrapper footer .progress').length).toEqual(4);
});
