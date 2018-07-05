import React from 'react';
import 'velocity-animate';
import WorldMap from './world-map.jsx';
import SparkLine from './sparkline.jsx';
import {CSSTransition} from "react-transition-group";



export default class Visitors extends React.Component{
	constructor(){
		super();
		this.state={collapse: true}
	}

	handleClick(){	
		this.setState(state=>({collapse:!state.collapse}));
	}

	render(){
		const {worldMap, sparkLine}=this.props.data;
		return (
			<div className="visitors">
				<header className="ui-sortable-handle">
					<div className='btn'>
						<i className="fa fa-map-marker"></i>
						<span> Visitors</span>
					</div>
					<div className="float-right tools">
						<button className="btn btn-sm">
							<i className="fa fa-calendar"></i>
						</button>
						<button className="btn btn-sm ml-1" onClick={this.handleClick.bind(this)}>
							<i className="fa fa-minus"></i>
						</button>
					</div>
                </header>

	    		<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
	    			<div  className="wrapper">
                        <main>
                            <WorldMap  id="world-map" info = {worldMap}></WorldMap>
                        </main>
                        <footer>
			    			<SparkLine data={sparkLine}></SparkLine>
                        </footer>
                    </div>
                </CSSTransition>
            </div>
    	)
    }

}   
