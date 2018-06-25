import React from 'react';
import HeaderBar from './header-bar';
import enzyme from 'enzyme';

it ('should match the snapshot', ()=>{
	const wrapper=enzyme.shallow(<HeaderBar></HeaderBar>);
	expect(wrapper).toMatchSnapshot();
})
