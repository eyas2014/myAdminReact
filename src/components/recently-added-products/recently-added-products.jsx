import React from 'react';
import ReactDOM from 'react-dom';

export default class RecentlyAP extends React.Component{
	componentDidMount(){
		this.refs.remove.onclick=()=>{this.refs.recentlyAP.parentNode.removeChild(this.refs.recentlyAP)};
		this.refs.toggle.onclick=()=>{
			if(this.refs.recentlyAP.childNodes[1].style.display=="none"){
				this.refs.recentlyAP.childNodes[1].style.display="block";
				this.refs.recentlyAP.childNodes[2].style.display="block";
			}else {
				this.refs.recentlyAP.childNodes[1].style.display="none";
				this.refs.recentlyAP.childNodes[2].style.display="none";
			}
		};
	}
	
	render(){
		var products=this.props.products;
		return(<div className="recently-added-products box-shadow" ref="recentlyAP">
				<header className="box-border-bottom clearfix">
					<div className="btn"><span>Recently Added Products</span></div>
					<div className="btn-group float-right">
						<div className="btn" ref="toggle"><i className="fas fa-minus text-muted"></i></div>
						<div className="btn" ref="remove"><i className="fas fa-times text-muted"></i></div>
					</div>
				</header>
				<main className="">
						{products.map(function(item, index){
							return(	<ItemList key={index} data={item}></ItemList>)
						})}
				</main>
				<footer className="text-center p-2 text-info">
					<span>View All Products</span>	
				</footer>
			</div>)
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
