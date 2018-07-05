import React from 'react';
import Visitors from './visitors';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('./world-map.jsx');
jest.mock('./sparkline.jsx');
const data={worldMap: 'worldmap', sparkLine: 'sparkline'};

document.body.innerHTML='<div  id="root"></div>';

const wrapper=enzyme.mount(<Visitors data={data}></Visitors>, {attachTo: document.getElementById('root')});

it ('should renders correct htmls', ()=>{
	expect(document.getElementById('root').innerHTML).toMatchSnapshot();
	expect(document.getElementsByClassName('wrapper')[0].innerHTML).toEqual('<main><div id="world-map"></div></main><footer><div id="sparkline"></div></footer>');
});

it('should collapse after clicking toggle', ()=>{
	require('react-transition-group').reset();
	wrapper.find('.visitors header').childAt(1).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(false);
});

it('should expand after clicking toggle', ()=>{
	require('react-transition-group').reset();
	wrapper.find('.visitors header').childAt(1).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
});


it('worldmap should be called with correct arguments', ()=>{
	expect(require('./world-map.jsx').calledWith()).toEqual({id:'world-map', info:'worldmap'});
});

it('sparkline should be called with correct arguments', ()=>{
	expect(require('./sparkline.jsx').calledWith()).toEqual({data:'sparkline'});
});




