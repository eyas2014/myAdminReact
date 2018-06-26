import React from 'react';
import Todo from './todo';
import enzyme from 'enzyme';

	var data={content: "Design a nice theme",
				time: " 2 mins",
			  color: "badge-danger"
			};

const wrapper=enzyme.shallow(<Todo todo={data}></Todo>);

it ('should match the snapshot', ()=>{
	expect(wrapper).toMatchSnapshot();
})
