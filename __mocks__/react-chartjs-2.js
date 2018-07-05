import React from 'react';

let result=[];
function Line(data){
	result=data;
	return (<div id="line-chart"></div>);
};

function Doughnut(data){
	result=data;
	return (<div id="doughnut-chart"></div>);
};

function reset(){
	result=[];
};

function isCalledWith(props){
	return result;
}

export {Line, isCalledWith, Doughnut};



