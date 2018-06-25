import React from 'react';
import ReactDOM from 'react-dom';

const data=[{logo: 'fab fa-whmcs',
			 title: 'CPU TRAFFIC',
			 number: '90%',
			 color: 'bg-info'
			 },
			 {logo: 'fab fa-google-plus-g',
			 title: 'LIKES',
			 number: '41,410',
			 color: 'bg-danger'
			 },
			 {logo: 'fas fa-shopping-cart',
			 title: 'SALES',
			 number: '760',
			 color: 'bg-success'
			 },
			 {logo: 'fas fa-users',
			 title: 'NEW MEMBERS',
			 number: '2,000',
			 color: 'bg-warning'
			 }];




export default class InfoPanel extends React.Component{
	componentDidMount(){
	}

	render(){
		return(
		<div className="info-panel">
			<div className='row'>
				{data.map((item, index)=>{
								return(<div className='col-12 col-md-6 col-lg-3' key={index}>
											<div className='panel border rounded box-shadow'>
												<div className={'logo '+ item.color}>
													<span className={item.logo}>
													</span>
												</div>
												<div className='info'>
													<span>{item.title}</span>
													<p><b>{item.number}</b></p>
												</div>
											</div>
										</div>)
							})}
			</div>
		</div>)
	}

}
