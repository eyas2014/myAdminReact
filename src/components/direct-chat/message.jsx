import React from 'react';

export default class Message extends React.Component{
	render(){
		if(this.props.item.name=='Sarah Bullock'){
			return (
				<div className="message">
					<div className='float-right mr-3'>
						<p>{this.props.item.name}</p>
					</div>
					<div className='ml-3'><p>{this.props.item.time.toString().substr(0,21)}</p>
					</div>
					<div className='clearfix'>
						<div className="col-3 float-left">
							<img src='./img/alexis.jpg' className="small-user-image"/>
						</div>
						<div className='col-8 px-0 float-left'>
							<div className="float-left text-secondary ml-3 h3">
								<i className="fas fa-caret-left"></i>
							</div>
							<div className="ml-2 px-3 pb-3">
								<div className="px-3 py-1 text-black rounded bg-secondary">
									<p>{this.props.item.message}</p>
								</div>
							</div>
						</div>
					</div>
				</div>)
		} else {
				return (
					<div className="message">
						<div className='float-right mr-3'>
							<p>{this.props.item.name}</p>
						</div>
						<div className='ml-3'><p>{this.props.item.time.toString().substr(0,21)}</p>
						</div>
						<div className='clearfix'>
							<div className="col-3 float-right">
								<img src='./img/sarah.jpg' className="small-user-image"></img>
							</div>
							<div className="float-right pb-3 pr-0 col-8">
								<div className="float-right text-warning m-0 h3">
									<i className="fas fa-caret-right"></i>
								</div>
								<div className="pl-3 py-1 mr-2 rounded text-white bg-warning">
									<p>{this.props.item.message}</p>
								</div>
							</div>
						</div>
					</div>)
		}
	}
}
