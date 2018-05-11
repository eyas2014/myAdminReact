import React from 'react';
import 'velocity-animate';
import WorldMap from './world-map.jsx';
import SparkLine from './sparkline.jsx';


export default class Visitors extends React.Component{
	componentDidMount(){
		this.refs.toggle.onclick=()=>{
			if(this.refs.visitors.childNodes[1].style.display=="none"){
				this.refs.visitors.childNodes[1].style.display="block";
				this.refs.visitors.childNodes[2].style.display="block";
			}else {
				this.refs.visitors.childNodes[1].style.display="none";
				this.refs.visitors.childNodes[2].style.display="none";
			}
		};	
	}

	render(){
		const {worldMap, sparkLine}=this.props.data;
		return (
			<div className="visitors" ref="visitors">
				<header className="ui-sortable-handle">
					<div className='btn'>
						<i className="fa fa-map-marker"></i>
						<span> Visitors</span>
					</div>

					<div className="float-right tools">
						<button className="btn btn-sm">
							<i className="fa fa-calendar"></i>
						</button>
						<button className="btn btn-sm ml-1" ref="toggle">
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