import React from 'react';
import 'jquery-sparkline';
import enzyme from 'enzyme';
import SparkLine from './sparkline.jsx';

jest.mock('jquery-sparkline');

document.body.innerHTML='<div  id="root"></div>';

var data=[1,2,3];

it('renders correct htmls',()=>{
	const wrapper=enzyme.shallow(<SparkLine data={data}></SparkLine>);
	expect(wrapper.html()).toMatchSnapshot();
});

beforeEach(()=>{$.isCalledWith=[]});

it('$.sparkline should be called with correct arguments', ()=>{
	const wrapper=enzyme.mount(<SparkLine data={data}></SparkLine>, {attachTo: document.getElementById('root')});
	expect($.isCalledWith).toEqual(data);
});