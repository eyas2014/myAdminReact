import React from 'react';


let result
function calledWith(){

	return result;
};

function CSSTransition(props){
	const {classNames, timeout, unmountOnExit}=props;
	result={in: props.in, classNames, timeout, unmountOnExit};
	return (props.children);
}



export {CSSTransition, calledWith};