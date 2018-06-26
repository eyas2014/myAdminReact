import React from 'react';
import StatTiles from './stat-tiles';
import enzyme from 'enzyme';

var data=[{value:'150',
   name:'New Orders',
   logo:'fas fa-shopping-bag',
   color: 'bg-info'},
   {value:'53%',
   name:'Bounce Rate',
   logo: 'fas fa-chart-bar',
   color: 'bg-success'},
  {value:'44',
   name:'User Registrations',
   logo:'fas fa-users',
   color: 'bg-warning'},
  {value:'65',
   name :'Unique Visitors',
   logo :'fas fa-chart-pie',
   color: 'bg-danger'}];

const wrapper=enzyme.shallow(<StatTiles data={data}></StatTiles>);

it ('should match the snapshot', ()=>{
	expect(wrapper).toMatchSnapshot();
})

it ('should contain the correct text', ()=>{
	data.forEach((item, index)=>{
		expect(wrapper.childAt(index).text().indexOf(data[index].name)).not.toEqual(-1);
		expect(wrapper.childAt(index).text().indexOf(data[index].value)).not.toEqual(-1);
	});
})