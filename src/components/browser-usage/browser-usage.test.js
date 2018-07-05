import React from 'react';
import BrowserUsage from './browser-usage.jsx';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('react-chartjs-2');

 var PieData = {
		datasets: [{ data	    : [700, 500, 400, 600, 300, 100],
			     backgroundColor: ['#f56954', '#00a65a',  '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'] }],
		};

var options={cutoutPercentage: 45 };

document.body.innerHTML='<div  id="root"></div>';

const mountWrapper=enzyme.mount(<BrowserUsage data={{data:PieData, options}}></BrowserUsage>);

it('should render correct htmls',()=>{
	expect(mountWrapper.html()).toMatchSnapshot();
});

it('chartjs should be called with correct arguments', ()=>{
	expect(require('react-chartjs-2').isCalledWith()).toEqual({data: PieData, options})
});

it('should render correct number of legends', ()=>{
	expect(mountWrapper.find('.browser-usage main ul li').length).toEqual(6);	
});

it('should render correct number of stat panels', ()=>{
	// expect(mountWrapper.find('.browser-usage footer>div').length).toEqual(3);	
});

it('should collapse after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.browser-usage header').childAt(1).childAt(0).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(false);
});

it('should expand after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.browser-usage header').childAt(1).childAt(0).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(true);
});

it('should close after clicking close', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.browser-usage header').childAt(1).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(false);
});
