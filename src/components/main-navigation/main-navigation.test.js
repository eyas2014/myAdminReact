import React from 'react';
import MainNavigation from './main-navigation';
import enzyme from 'enzyme';

it ('should match the snapshot', ()=>{
	const wrapper=enzyme.shallow(<MainNavigation></MainNavigation>);
	expect(wrapper).toMatchSnapshot();
})
