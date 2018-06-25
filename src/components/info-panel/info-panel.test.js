import React from 'react';
import InfoPanel from './info-panel';
import enzyme from 'enzyme';

it ('should match the snapshot', ()=>{
	const wrapper=enzyme.shallow(<InfoPanel></InfoPanel>);
	expect(wrapper).toMatchSnapshot();
})
