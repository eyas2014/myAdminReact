import React from 'react';
import {CSSTransition} from "react-transition-group";
import ListItem from './recently-list-item.jsx';

export default class RecentlyAP extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}

	handleToggle(){
		this.setState(state=>({collapse:!state.collapse}));
	}

	handleClose(){
		this.setState({show: false});
	}
	
	render(){
		var products=this.props.products;
		return(
		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
			<div className="recently-added-products box-shadow" ref="recentlyAP">
				<header className="box-border-bottom clearfix">
					<div className="btn"><span>Recently Added Products</span></div>
					<div className="btn-group float-right">
						<div className="btn" onClick={this.handleToggle.bind(this)}><i className="fas fa-minus text-muted"></i></div>
						<div className="btn" onClick={this.handleClose.bind(this)}><i className="fas fa-times text-muted"></i></div>
					</div>
				</header>
				<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
					<div className="wrapper">
						<main>
								{products.map(function(item, index){
									return(	<ListItem key={index} data={item}></ListItem>)
								})}
						</main>
						<footer className="text-center text-info">
							<div>
							<span>View All Products</span>	
							</div>
						</footer>
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>)
	}

}

