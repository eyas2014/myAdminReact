import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from "react-transition-group";

export default class RecentlyAP extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}

	componentDidMount(){
		this.refs.remove.onclick=()=>{
			this.setState({show: false});
		};
		this.refs.toggle.onclick=()=>{
			this.setState(state=>({collapse:!state.collapse}));
		};
	}
	
	render(){
		var products=this.props.products;
		return(
		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
			<div className="recently-added-products box-shadow" ref="recentlyAP">
				<header className="box-border-bottom clearfix">
					<div className="btn"><span>Recently Added Products</span></div>
					<div className="btn-group float-right">
						<div className="btn" ref="toggle"><i className="fas fa-minus text-muted"></i></div>
						<div className="btn" ref="remove"><i className="fas fa-times text-muted"></i></div>
					</div>
				</header>
				<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
					<div className="wrapper">
						<main>
								{products.map(function(item, index){
									return(	<ItemList key={index} data={item}></ItemList>)
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

class ItemList extends React.Component{
	render(){
		var priceTag="btn float-right"+" badge "+this.props.data.color;
		return(<div className="box-border-bottom row px-4 py-2">
				<div className="bg-grey text-center preview-box col-2 px-0">
					<span className="">50*50</span>
				</div>
				<div className="col-10 px-0">
					<div><span className="text-info">{this.props.data.name}</span> 
					     <span className={priceTag}>{'$'+this.props.data.price}</span>
					</div>
					<p className="m-0">{this.props.data.model}</p>
				</div>

			</div>)
	}


}
