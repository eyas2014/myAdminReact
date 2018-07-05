import React from 'react';
import MonthlyCapReports from './monthly-capital-reports.jsx';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('react-chartjs-2');
jest.mock('./progress.jsx');
jest.mock('./stat-panel.jsx');

document.body.innerHTML='<div  id="root"></div>';

  var salesChartData = 'salesChartData';
  var salesChartOptions={
				scales: {
	    			xAxes: [{
	                	gridLines: {
	                    	display:false
	                	}
	            	}],
	    			yAxes: [{
	                	gridLines: {
	                    	display:false
	                	}   
	            	}]
	    		}
			};


	var progressData=[{
				step: 'Add Products To Cart',
				sum: 200,
				completed: 110
				},{
				step: 'Complete Purchase',
				sum: 400,
				completed: 80
				},{
				step: 'Visit Premium Page',
				sum: 800,
				completed: 700
				},{
				step: 'send Inquiries',
				sum: 500,
				completed: 150 
				}];


const mountWrapper=enzyme.mount(<MonthlyCapReports data={{salesChartData, progressData}}></MonthlyCapReports>, {attachTo: document.getElementById('root')});

it('should render correct htmls',()=>{
	expect(mountWrapper.html()).toMatchSnapshot();
});

it('chartjs should be called with correct arguments', ()=>{
	expect(require('react-chartjs-2').isCalledWith()).toEqual({data: 'salesChartData', options: salesChartOptions})
});

it('should render correct number of progress bar', ()=>{
	expect(require('./progress.jsx').isCalledWith().length).toEqual(4);	
});

it('should render correct number of stat panels', ()=>{
	expect(require('./stat-panel.jsx').isCalledWith().length).toEqual(4);	
});

it('should collapse after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.monthly-capital-reports header').childAt(1).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(false);
});

it('should expand after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.monthly-capital-reports header').childAt(1).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(true);
});

it('should close after clicking close', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.monthly-capital-reports header').childAt(1).childAt(0).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(false);
});



