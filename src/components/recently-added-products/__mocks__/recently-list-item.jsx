import React from 'react';

let args=[];

export default function(props){
	args.push(props);
	return (<div className="list-item"></div>)
}

export function isCalledWith(){
	return args
}