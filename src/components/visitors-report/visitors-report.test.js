import React from 'react';
import VisitorsReport from './visitors-report';
import enzyme from 'enzyme';

jest.mock('react-transition-group');
jest.mock('../../../lib/jqvmap/jqvmap.js');
jest.mock('../../../lib/sparkline/jquery.sparkline.js');



document.body.innerHTML='<div  id="root"></div>';

var markers=[{ latLng: [41.90, 12.45], name: 'Vatican City' }];

var graphData=[{name:'VISITS', data: [90,70,90,70,75,80,70]},
	   {name:'REFERRALS', data: [90,50,90,70,61,83,63]},
	   {name:'ORGANIC', data: [90,50,90,70,61,83,63]}]; 

const data= {
			map              : 'world_mill_en',
			normalizeFunction: 'polynomial',
			hoverOpacity     : 0.7,
			hoverColor       : false,
			backgroundColor  : 'transparent',
			regionStyle      : {
				initial      : {
					fill            : 'rgba(210, 214, 222, 1)',
					'fill-opacity'  : 1,
					stroke          : 'none',
					'stroke-width'  : 0,
					'stroke-opacity': 1
				},
				hover        : {
					'fill-opacity': 0.7,
 					cursor        : 'pointer'
				},
				selected     : {
					fill: 'yellow'
				},
				selectedHover: {}
			},
			markerStyle      : {
				initial: {
					fill  : '#00a65a',
					stroke: '#111'
				}
			},
			markers
		};

$.isCalledWith=[];

const mountWrapper=enzyme.mount(<VisitorsReport data={{markers, graphData}}></VisitorsReport>, {attachTo: document.getElementById('root')});

it('jqvmap should be called with correct arguments', ()=>{
	expect($.VectorMapCalledWith).toEqual(data);	
});

it('sparkline should be called with correct arguments', ()=>{
	expect($.isCalledWith.length).toEqual(3);	
});

it('should collapse after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.visitors-report header').childAt(0).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(false);
});

it('should expand after clicking toggle', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.visitors-report header').childAt(0).childAt(1).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(true);
	expect(require('react-transition-group').isCalledWith()[1].classNames).toEqual('componentCollapse');
	expect(require('react-transition-group').isCalledWith()[1].in).toEqual(true);
});

it('should close after clicking close', ()=>{
	require('react-transition-group').reset();
	mountWrapper.find('.visitors-report header').childAt(0).childAt(0).simulate('click');
	expect(require('react-transition-group').isCalledWith()[0].classNames).toEqual('componentShutdown');
	expect(require('react-transition-group').isCalledWith()[0].in).toEqual(false);
});