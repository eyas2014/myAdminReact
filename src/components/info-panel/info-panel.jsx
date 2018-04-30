import React from 'react';
import ReactDOM from 'react-dom';
import './info-panel.css'




export default class InfoPanel extends React.Component{
	componentDidMount(){
	}

	render(){

		return(
		<div className="info-panel">
			<div className='row'>
				<div className='col-12 col-md-6 col-lg-3'>
					<div className='panel border rounded box-shadow'>
						<div className='logo bg-info'>
							<span className="fab fa-whmcs">
							</span>
						</div>
						<div className='info'>
							<span>CPU TRAFFIC</span>
							<p><b>90%</b></p>
						</div>
					</div>
				</div>

				<div className='col-12 col-md-6 col-lg-3'>
					<div className='panel border rounded box-shadow'>
						<div className='logo bg-danger'>
							<span className="fab fa-google-plus-g">
							</span>
						</div>
						<div className='info'>
							<span>LIKES</span>
							<p><b>41,410</b></p>
						</div>
					</div>
				</div>

				<div className='col-12 col-md-6 col-lg-3'>
					<div className='panel border rounded box-shadow'>
						<div className='logo bg-success'>
							<span className="fas fa-shopping-cart">
							</span>
						</div>
						<div className='info'>
							<span>SALES</span>
							<p><b>760</b></p>
						</div>
					</div>
				</div>

				<div className='col-12 col-md-6 col-lg-3'>
					<div className='panel border rounded box-shadow'>
						<div className='logo bg-warning'>
							<span className="fas fa-users">
							</span>
						</div>
						<div className='info'>
							<span>NEW MEMBERS</span>
							<p><b>2,000</b></p>
						</div>
					</div>
				</div>
			</div>
		</div>)
	}

}
