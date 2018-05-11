import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/sparkline/jquery.sparkline.js';


export default class LatestOrders extends React.Component{
	componentDidMount(){
		$(".inlineSpark").each(function () {
		    var $this = $(this);
		    $this.sparkline('html', {
				      type    : 'bar',
				      height  : $this.data('height') ? $this.data('height') : '30',
				      barColor: $this.data('color') });
		});
		this.refs.remove.onclick=()=>{this.refs.latestOrders.parentNode.removeChild(this.refs.latestOrders)};
		this.refs.toggle.onclick=()=>{
			if(this.refs.latestOrders.childNodes[1].style.display=="none"){
				this.refs.latestOrders.childNodes[1].style.display="block";
				this.refs.latestOrders.childNodes[2].style.display="block";
			}else {
				this.refs.latestOrders.childNodes[1].style.display="none";
				this.refs.latestOrders.childNodes[2].style.display="none";
			}
		};

	}

	render(){
		var orderList=this.props.data;
		return(
		<div className="latest-orders box-shadow" ref="latestOrders">
			<header className="box-border-bottom">
				<div className="float-right btn-group text-muted">
					<div className="btn pull-right" ref="toggle"><i className="fas fa-minus"></i></div>
					<div className="btn pull-right" ref="remove"><i className="fas fa-times"></i></div>
				</div>
				<div className="btn"><span>Latest Orders</span></div>
			</header>
			<main className="p-3 box-border-bottom">
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
			</main>
			<footer className="p-3">
					<button className="font-md px-2 py-1 bg-info text-white border-0">Place New Orders</button>
					<button className="font-md px-2 py-1 bg-grey float-right">Place New Orders</button>
			</footer>

		</div>)
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