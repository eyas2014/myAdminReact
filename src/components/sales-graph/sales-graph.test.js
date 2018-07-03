import React from 'react';
import SalesGraph from './sales-graph.jsx';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('jquery-knob');
jest.mock('../../library/morris/morris.js');


const data=[{ y: '2011 Q1', item1: 2666 },
			{ y: '2011 Q2', item1: 2778 }];

const jqueryKnobArgs={ width: '100px', height: '100px', fgColor: '#39CCCC' };


const lineChartArgs={ element: 'line-chart',
				      resize: true,
				      data:
				       [ { y: '2011 Q1', item1: 2666 },
				         { y: '2011 Q2', item1: 2778 }],
				      xkey: 'y',
				      ykeys: [ 'item1' ],
				      labels: [ 'Item 1' ],
				      lineColors: [ '#efefef' ],
				      lineWidth: 2,
				      hideHover: 'auto',
				      gridTextColor: '#fff',
				      gridStrokeWidth: 0.4,
				      pointSize: 4,
				      pointStrokeColors: [ '#efefef' ],
				      gridLineColor: '#efefef',
				      gridTextFamily: 'Open Sans',
				      gridTextSize: 10 };

document.body.innerHTML='<div  id="root"></div>';



$.isCalledWith={}
require('../../library/morris/morris.js').isCalledWith={};

const wrapper=enzyme.mount(<SalesGraph data={data}></SalesGraph>, {attachTo: document.getElementById('root')});

it('should render correct htmls', ()=>{
	expect(wrapper.find('header').html()).toMatchSnapshot();
	expect(wrapper.find('.wrapper main div #line-chart').exists()).toEqual(true);
	expect(wrapper.find('.wrapper footer').children().length).toEqual(3);
});


it('jquery-knob should be called with correct arguments', ()=>{
	expect($.isCalledWith).toEqual(jqueryKnobArgs);
});

it('Morris.Line should be called with correct arguments', ()=>{
	expect(require('../../library/morris/morris.js').isCalledWith).toEqual(lineChartArgs);
});


it ('CSSTransition should be passed with correct args', ()=>{
	let transitionParam={ in: true,
    						classNames: 'componentShutdown',
    						timeout: 500,
      						unmountOnExit: true };
	expect(require('react-transition-group').calledWith()[0]).toEqual(transitionParam);
	transitionParam.classNames='componentCollapse';
	expect(require('react-transition-group').calledWith()[1]).toEqual(transitionParam);

	require('react-transition-group').reset();
	let toggleButton=wrapper.find('header div button');
	toggleButton.at(0).simulate('click');
	transitionParam.classNames='componentShutdown';
	expect(require('react-transition-group').calledWith()[0]).toEqual(transitionParam);
	transitionParam.in=false;
	transitionParam.classNames='componentCollapse';
	expect(require('react-transition-group').calledWith()[1]).toEqual(transitionParam);

	require('react-transition-group').reset();	
	toggleButton.at(0).simulate('click');
	transitionParam.in=true;
	transitionParam.classNames='componentShutdown';
	expect(require('react-transition-group').calledWith()[0]).toEqual(transitionParam);
	transitionParam.classNames='componentCollapse';
	expect(require('react-transition-group').calledWith()[1]).toEqual(transitionParam);
});



it('component should update after toggle', ()=>{
	$.isCalledWith=[];
	require('../../library/morris/morris.js').isCalledWith={};
	let toggleButton=wrapper.find('header div button');
	toggleButton.at(0).simulate('click');
	expect($.isCalledWith).toEqual(jqueryKnobArgs);
	expect(require('../../library/morris/morris.js').isCalledWith).toEqual(lineChartArgs);
});


it('component should close after clicking close', ()=>{
	$.isCalledWith=[];
	require('../../library/morris/morris.js').isCalledWith={};
	let closeButton=wrapper.find('header div button');
	require('react-transition-group').reset();	
	closeButton.at(1).simulate('click');
	let transitionParam={ in: true,
    						classNames: 'componentCollapse',
    						timeout: 500,
      						unmountOnExit: true };
    transitionParam.in=false;
	transitionParam.classNames='componentShutdown';
	expect(require('react-transition-group').calledWith()[0]).toEqual(transitionParam);
});