import React from 'react';

let result;

function calledWith(){
	return result;
};

export default function WorldMap(props){
	const {id, info}=props;
	result={id, info};
	return (<div id='world-map'></div>);
}

export {calledWith};
