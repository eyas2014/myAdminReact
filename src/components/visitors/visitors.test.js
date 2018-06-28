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
	expect(document.getElementsByClassName('wrapper')[0].innerHTML).toEqual('<main></main><footer></footer>');
});






it ('CSSTransition should be passed with correct args', ()=>{
	let transitionParam={ in: true,
    						classNames: 'componentCollapse',
    						timeout: 500,
      						unmountOnExit: true };
	expect(require('react-transition-group').calledWith()).toEqual(transitionParam);

	let toggleButton=wrapper.find('header div button');
	toggleButton.at(1).simulate('click');
	transitionParam.in=false;
	expect(require('react-transition-group').calledWith()).toEqual(transitionParam);
});



it('wrapper should collapse after clicking toggle button', ()=>{
	console.log(document.getElementById('root').innerHTML);


});


