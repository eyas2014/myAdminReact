import React from 'react';
import DonutChart from './donut-chart';
import enzyme from 'enzyme';

var data={ colors: ["#3c8dbc", "#f56954", "#00a65a"],
			   data: [{label: "Download Sales", value: 12},
				  {label: "In-Store Sales", value: 30},
				  {label: "Mail-Order Sales", value: 20}]
			}


document.body.innerHTML='<div  id="root"></div>';

jest.mock('../../library/morris/morris.js');

const wrapper=enzyme.mount(<DonutChart id="sales-chart"
								colors= {data.colors}
								data= {data.data}/>, 
							{attachTo: document.getElementById('root')});


it ('should match the snapshot', ()=>{
   expect($('#root').html()).toMatchSnapshot();
})

it ('should call Morris with listed args', ()=>{
	expect(require('../../library/morris/morris.js').isCalledWith).toEqual(
		{	resize: true,
			element: "sales-chart",
			data: [{label: "Download Sales", value: 12},
				  {label: "In-Store Sales", value: 30},
				  {label: "Mail-Order Sales", value: 20}],
			colors: ["#3c8dbc", "#f56954", "#00a65a"],
	    	hideHover:'auto'});
})
