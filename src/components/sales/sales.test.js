import React from 'react';
import Sales from './sales';
import enzyme from 'enzyme';

const wrapper=enzyme.shallow(<Sales></Sales>);

it ('should match the snapshot', ()=>{
	expect(wrapper).toMatchSnapshot();
})
