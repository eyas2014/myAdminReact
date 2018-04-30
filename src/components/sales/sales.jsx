import React from 'react';
import './sales.less';
import Morris from '../../library/morris/morris.css';



export default class Sales extends React.Component{
	componentDidMount(){


	}

	render(){
    		return (
    			<div className="sales">
			<div className="title"><i className="fa fa-inbox"></i> Sales</div>
                        <ul className="nav nav-tabs justify-content-end">
                            <li className="nav-item"><a className="nav-link" href="#revenue-chart" data-toggle="tab" aria-expanded="false">Area</a></li>
                            <li className="nav-item"><a className="nav-link active" href="#sales-chart" data-toggle="tab" aria-expanded="true">Donut</a></li>
			</ul>
                        <div className="tab-content no-padding">
                            {this.props.children}
                        </div>
                   </div>
    			)
	}
}