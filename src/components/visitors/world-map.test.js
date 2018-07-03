import React from 'react';
import 'jquery-sparkline';
import enzyme from 'enzyme';
import WorldMap from './world-map.jsx';

jest.mock('jvectormap');

document.body.innerHTML='<div  id="root"></div>';

var data={
        map: 'world_mill_en',
        backgroundColor: "transparent",
        regionStyle: {
            initial: {
                fill: '#e4e4e4',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            }
        },
        series: {
            regions: [{
                values: 'world-map',
                scale: ["#92c1dc", "#ebf4f9"],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionLabelShow: function(e, el, code) {
            if(typeof visitorsData[code] != "undefined")
                el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
        }
    }

it('$.sparkline should be called with correct arguments', ()=>{
	const wrapper=enzyme.mount(<WorldMap info={'world-map'}></WorldMap>, {attachTo: document.getElementById('root')});
	expect(JSON.stringify($.isCalledWith)).toEqual(JSON.stringify(data));

});