import React from 'react';
import AreaChart from './area-chart';
import enzyme from 'enzyme';

var revenueChart= {data: [{y: '2011 Q1', item1: 2666, item2: 2666},
			  {y: '2011 Q2', item1: 2778, item2: 2294},
			  {y: '2011 Q3', item1: 4912, item2: 1969},
			  {y: '2011 Q4', item1: 3767, item2: 3597},
			  {y: '2012 Q1', item1: 6810, item2: 1914},
			  {y: '2012 Q2', item1: 5670, item2: 4293},
			  {y: '2012 Q3', item1: 4820, item2: 3795},
			  {y: '2012 Q4', item1: 15073, item2: 5967},
			  {y: '2013 Q1', item1: 10687, item2: 4460},
			  {y: '2013 Q2', item1: 8432, item2: 5713}],
		  ykeys: ['item1', 'item2'],
		 labels: ['Item 1', 'Item 2'],
	     lineColors: ['#a0d0e0', '#3c8dbc']};


document.body.innerHTML='<div  id="root"></div>';

jest.mock('../../library/morris/morris.js');

const wrapper=enzyme.mount(<AreaChart id="revenue-chart"
								data = {revenueChart.data}
								xkey= 'y'
								ykeys= {revenueChart.ykeys}
								labels= {revenueChart.labels}
								lineColors= {revenueChart.lineColors}/>, 
							{attachTo: document.getElementById('root')});

it ('should match the snapshot', ()=>{
   expect($('#root').html()).toMatchSnapshot();
})

it ('should call Morris with listed args', ()=>{
	expect(require('../../library/morris/morris.js').isCalledWith).toEqual(
		{	resize: true,
			element: "revenue-chart",
			data: [{y: '2011 Q1', item1: 2666, item2: 2666},
			  {y: '2011 Q2', item1: 2778, item2: 2294},
			  {y: '2011 Q3', item1: 4912, item2: 1969},
			  {y: '2011 Q4', item1: 3767, item2: 3597},
			  {y: '2012 Q1', item1: 6810, item2: 1914},
			  {y: '2012 Q2', item1: 5670, item2: 4293},
			  {y: '2012 Q3', item1: 4820, item2: 3795},
			  {y: '2012 Q4', item1: 15073, item2: 5967},
			  {y: '2013 Q1', item1: 10687, item2: 4460},
			  {y: '2013 Q2', item1: 8432, item2: 5713}],
			xkey: 'y',
			ykeys: ['item1', 'item2'],
			labels: ['Item 1', 'Item 2'],
	    	lineColors: ['#a0d0e0', '#3c8dbc'],
	    	hideHover:'auto'});
})
