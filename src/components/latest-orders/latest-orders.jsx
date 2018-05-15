import React from 'react';
import ReactDOM from 'react-dom';
//import '../../../node_modules/sparkline/jquery.sparkline.js';
import {CSSTransition} from "react-transition-group";


export default class LatestOrders extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}

	componentDidUpdate(){
/*		$(".inlineSpark").each(function () {
		    var $this = $(this);
		    $this.sparkline('html', {
				      type    : 'bar',
				      height  : $this.data('height') ? $this.data('height') : '30',
				      barColor: $this.data('color') });
		}); */
	}

	componentDidMount(){
		this.refs.remove.onclick=()=>{
			this.setState({show: false});
		};
		this.refs.toggle.onclick=()=>{
			this.setState(state=>({collapse:!state.collapse}));
		};
		this.componentDidUpdate();
	}

	render(){
		var orderList=this.props.data;
		return(
		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
			<div className="latest-orders box-shadow" ref="latestOrders">
				<header className="box-border-bottom">
					<div className="float-right btn-group text-muted">
						<div className="btn pull-right" ref="toggle"><i className="fas fa-minus"></i></div>
						<div className="btn pull-right" ref="remove"><i className="fas fa-times"></i></div>
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
										return(<ItemList key={index} data={item}></ItemList>)

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

class ItemList extends React.Component{
	render(){
		var bgColor;
		switch(this.props.data.Status){
			case 'shipped': bgColor='bg-success';
					break;
			case 'pending': bgColor='bg-warning';
					break;
			case 'delivered': bgColor='bg-danger';
					break;
			case 'processing': bgColor='bg-info';
					break;
			default: console.log(this.props.data.Status);
						}
		bgColor+=" badge p-2";

		return(<tr className="box-border-top">
				<td className="p-2 text-info"><span>{this.props.data.orderId}</span></td>
				<td className=""><span>{this.props.data.Item}</span></td>
				<td className=""><span className={bgColor}>{this.props.data.Status}</span></td>
				<td className="text-center"><span className="inlineSpark">{this.props.data.Popularity.join(",")}</span></td>
		       </tr>)

	}


}