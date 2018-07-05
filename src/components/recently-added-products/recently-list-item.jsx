import React from 'react';

export default class ItemList extends React.Component{
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
