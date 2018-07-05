import React from 'react';
import RecentlyAP from './recently-added-products.jsx';
import enzyme from 'enzyme';


jest.mock('react-transition-group');
jest.mock('./recently-list-item.jsx');

var products=[{
		name:  'Samsung TV',
		model: 'Samsung 32" 1080p 60Hz LED Smart HDTV.',
		price:  1800,
		color: 'bg-warning'},
		{
		name:  'Bicycle',
		model: '26" Mongoose Dolomite Mens 7-speed, Navy Blue.',
		price:  700,
		color: 'bg-info'},
		{
		name:  'Xbox One',
		model: 'Xbox One Console Bundle with Halo Master Chief Collection.',
		price:  350,
		color:	'bg-danger'},
		{
		name:  'PlayStation 4',
		model: 'PlayStation 4 500GB Console (PS4)',
		price:  399,
		color: 'bg-success'}
		];

const mountWrapper=enzyme.mount(<RecentlyAP products={products}></RecentlyAP>);


it('should render correct number of products', ()=>{
	expect(mountWrapper.find('.recently-added-products .wrapper main div').length).toEqual(4);	
});

it('should collapse after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.recently-added-products header').childAt(1).childAt(0).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(false);
});

it('should expand after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.recently-added-products header').childAt(1).childAt(0).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(true);
});

it('should close after clicking close', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.recently-added-products header').childAt(1).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(false);
});
