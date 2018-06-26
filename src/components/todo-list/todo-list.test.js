import React from 'react';
import TodoList from './todo-list';
import enzyme from 'enzyme';

const data=[{}, {}, {}, {}];

const wrapper=enzyme.shallow(<TodoList data={data}></TodoList>);


it ('should match the snapshot', ()=>{
	expect(wrapper).toMatchSnapshot();
})

it ('should contain the correct text', ()=>{
	let elements=wrapper.find('main ul').children();
	expect(elements.length).toEqual(data.length);
})