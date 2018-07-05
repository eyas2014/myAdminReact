import React from 'react';

export default class ListItem extends React.Component{
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