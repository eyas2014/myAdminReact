import React from 'react';

let result=[]
function isCalledWith(){

	return result;
};

function reset(){

	result=[];
};

function CSSTransition(props){
	const {classNames, timeout, unmountOnExit}=props;
	result.push({in: props.in, classNames, timeout, unmountOnExit});
	return (props.children);
}



export {CSSTransition, isCalledWith, reset};