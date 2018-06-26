import React from 'react';
import ProgressPanels from './progress-panels';
import enzyme from 'enzyme';

var data=[{
  name: 'INVENTORY',
  value: '5,200',
  increase: 50,
  icon: 'fas fa-tags',
  color: 'orange'
  },{
  name: 'MENTIONS',
  value: '92,050',
  increase: 20,
  icon: 'far fa-heart',
  color: 'green'
  },{
  name: 'DOWNLOADS',
  value: '114,381',
  increase: 70,
  icon: 'fas fa-cloud-download-alt',
  color: 'red'
  },{
  name: 'DIRECT MESSAGES',
  value: '163,921',
  increase: 40,
  icon: 'far fa-comment',
  color: 'aqua'
  }];


const wrapper=enzyme.mount(<ProgressPanels data={data}></ProgressPanels>);


 it ('should match the snapshot', ()=>{
 	expect(wrapper).toMatchSnapshot();
 })


it ('should contain the correct text', ()=>{
	data.forEach((item, index)=>{
    const wrapper2=wrapper.children();
		expect(wrapper2.childAt(index).text().indexOf(data[index].name)).not.toEqual(-1);
		expect(wrapper2.childAt(index).text().indexOf(data[index].value)).not.toEqual(-1);
	});
})