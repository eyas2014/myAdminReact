import React from 'react';
import LatestOrders from './latest-orders.jsx';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('../../../lib/sparkline/jquery.sparkline.js');

var orders=[{
	orderId   : "OR9842",
	Item      : "call of duty",
	Status    : "shipped",
	Popularity: [1, 2, 10, -1, -2, 4, -6]
		},{
	orderId   : "OR9842",
	Item      : "Samsung Smart TV",
	Status    : "pending",
	Popularity: [1, 2, 5, -1, -2, 4, -6]
		},{
	orderId   : "OR9842",
	Item      : "iPhone 6 Plus",
	Status    : "delivered",
	Popularity: [1, 2, 5, -1, -2, 4, -6]
		},{
	orderId   : "OR9842",
	Item      : "Samsung Smart TV",
	Status    : "shipped",
	Popularity: [1, -1, -2, 4, -6, 2, 5]
		},{
	orderId   : "OR9842",
	Item      : "Samsung Smart TV",
	Status    : "processing",
	Popularity: [1, 2, -2, 4, -6, 5, -1]
		},{
	orderId   : "OR9842",
	Item      : "iPhone 6 Plus",
	Status    : "shipped",
	Popularity: [1, 2, 5, 4, -6, -1, -2]
		}];

document.body.innerHTML='<div  id="root"></div>';

$.isCalledWith=[];

const mountWrapper=enzyme.mount(<LatestOrders data={orders}></LatestOrders>, {attachTo: document.getElementById('root')});

it('should render correct htmls',()=>{
	expect(mountWrapper.html()).toMatchSnapshot();
});


it('chartjs should be called with correct arguments', ()=>{
	expect($.isCalledWith.length).toEqual(6);
});

it('should render correct number of orders', ()=>{
	expect(mountWrapper.find('.latest-orders main table tbody').children().length).toEqual(6);	
	expect(mountWrapper.find('.latest-orders main table tbody .inlineSpark').length).toEqual(6);
});