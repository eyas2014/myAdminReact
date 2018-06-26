import React from 'react';
import InfoPanel from './info-panel';
import enzyme from 'enzyme';


const data=[{logo: 'fab fa-whmcs',
			 title: 'CPU TRAFFIC',
			 number: '90%',
			 color: 'bg-info'
			 },
			 {logo: 'fab fa-google-plus-g',
			 title: 'LIKES',
			 number: '41,410',
			 color: 'bg-danger'
			 },
			 {logo: 'fas fa-shopping-cart',
			 title: 'SALES',
			 number: '760',
			 color: 'bg-success'
			 },
			 {logo: 'fas fa-users',
			 title: 'NEW MEMBERS',
			 number: '2,000',
			 color: 'bg-warning'
			 }];

const wrapper=enzyme.shallow(<InfoPanel data={data}></InfoPanel>);

it ('should match the snapshot', ()=>{
	expect(wrapper).toMatchSnapshot();
})

it ('should contain the correct text', ()=>{
	let el=wrapper.children();
	data.forEach((item, index)=>{
		expect(el.childAt(index).text().indexOf(data[index].title)).not.toEqual(-1);
		expect(el.childAt(index).text().indexOf(data[index].number)).not.toEqual(-1);
	});
})