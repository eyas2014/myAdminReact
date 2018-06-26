import React from 'react';
import ReactDOM from 'react-dom';

export default class InfoPanel extends React.Component{
	render(){
		const {data}=this.props;
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
