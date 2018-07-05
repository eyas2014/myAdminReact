import React from 'react';

var args=[];
export default function(props){
	args.push(props);
	return (<div className="message"></div>)
}

export function isCalledWith(){
	return args;
}

export function reset(){
	args=[];
}