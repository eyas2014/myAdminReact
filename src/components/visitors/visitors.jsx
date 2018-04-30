import React from 'react';
import 'velocity-animate';
import './visitors.less';
import WorldMap from './world-map.jsx';
import SparkLine from './sparkline.jsx';


export default class Visitors extends React.Component{
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
						<button className="btn btn-sm" data-toggle="tooltip" title="Date range">
							<i className="fa fa-calendar"></i>
						</button>
						<button className="btn btn-sm ml-1" datawidget="toggle" data-toggle="tooltip" title="Collapse" onClick={this.toggleCollapse}>
							<i className="fa fa-minus"></i>
						</button>
					</div>


                        	</header>

                        <main className="">
                                            <WorldMap  id="world-map" info = {worldMap}></WorldMap>
                        </main>

                        <footer>
			    <SparkLine data={sparkLine}></SparkLine>
                        </footer>
                    </div>
    			)
    		}

    }   