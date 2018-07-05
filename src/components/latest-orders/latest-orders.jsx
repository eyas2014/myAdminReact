import React from 'react';
import '../../../lib/sparkline/jquery.sparkline.js';
import {CSSTransition} from "react-transition-group";
import ListItem from './list-item.jsx';


export default class LatestOrders extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}

	componentDidUpdate(){
		$(".inlineSpark").each(function () {
		    var $this = $(this);
		    $this.sparkline('html', {
				      type    : 'bar',
				      height  : $this.data('height') ? $this.data('height') : '30',
				      barColor: $this.data('color') });
		}); 
	}

	componentDidMount(){
		this.componentDidUpdate();
	}

	handleToggle(){
		this.setState(state=>({collapse:!state.collapse}));
	}

	handleClose(){
		this.setState({show: false});
	}

	render(){
		var orderList=this.props.data;
		return(
		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
			<div className="latest-orders box-shadow" ref="latestOrders">
				<header className="box-border-bottom">
					<div className="float-right btn-group text-muted">
						<div className="btn pull-right" onClick={this.handleToggle.bind(this)}><i className="fas fa-minus"></i></div>
						<div className="btn pull-right" onClick={this.handleClose.bind(this)}><i className="fas fa-times"></i></div>
					</div>
					<div className="btn"><span>Latest Orders</span></div>
				</header>
				<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
					<div className="wrapper">
						<main className="box-border-bottom">
							<div>
							<table className="w-100">
								<thead className="box-border-bottom">
									<tr className="font-weight-bold">
										<td>Order Id</td>
										<td>Item</td>
										<td>Status</td>
										<td className="text-center">Popularity</td>
									</tr>
								</thead>
								<tbody>
									{orderList.map(function(item, index){
										return(<ListItem key={index} data={item}></ListItem>)

									})}
								</tbody>
							</table>
							</div>
						</main>
						<footer>
							<div>
								<button className="font-md px-2 py-1 bg-info text-white border-0">Place New Orders</button>
								<button className="font-md px-2 py-1 bg-grey float-right">Place New Orders</button>
							</div>
						</footer>
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>)
	}

}