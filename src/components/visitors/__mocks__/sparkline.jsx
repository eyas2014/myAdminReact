import React from 'react';

let result;

function calledWith(){
	return result;
};

export default function SparkLine(props){
	const {data}=props;
	result={data};
	return (<div id='sparkline'></div>);
}

export {calledWith};