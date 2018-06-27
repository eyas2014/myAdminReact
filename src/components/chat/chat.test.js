import React from 'react';
import Chat from './chat';
import enzyme from 'enzyme';

const wrapper=enzyme.shallow(<Chat></Chat>);

it ('should match the snapshot', ()=>{
	expect(wrapper).toMatchSnapshot();
})
