import React from 'react';

let args=[];

export default function(props){
	args.push(props);
	return (<div className="stat-panel"></div>)
}

export function isCalledWith(){
	return args;
}

export function reset(){
	 args=[];
}