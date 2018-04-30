import React from 'react';
import ReactDOM from 'react-dom';
import './direct-chat.css';





export default class DirectChat extends React.Component{
	render(){
		var message=this.props.data;

		return(
		<div className="direct-chat box-shadow">
			<header className='box-border-bottom'>
				<div className="btn"><span>Direct Chat</span></div>
				<div className="float-right btn-group">
					<div className="btn"><span className="bg-warning badge badge-pill text-white font-weight-bold">3</span></div>
					<div className="btn" datawidget="toggle"><i className="fa fa-minus text-muted"></i></div>
					<div className="btn"><i className="fas fa-comments text-muted"></i></div>
					<div className="btn" datawidget="remove"><i className="fa fa-times text-muted"></i></div>
				</div> 
			
			</header>
			<main className="messages box-border-bottom">
				{message.map(function(item, index){
					if(item.name=='Sarah Bullock') return (<MessageSelf key={index} item={item}/>);
					else return (<MessageOther key={index} item={item}/>);
					})
				}
			</main>
			<footer className="">
				<div className="input-group p-3">
					<input type="text" className="form-control" placeholder="tpye message..."/>
					<span className="input-group-addon bg-warning text-white" id="inputGroup-sizing-default">Send</span>
				</div>
			</footer>
		</div>)
	}

}

class MessageOther extends React.Component{
	render(){
		return (<div className="message">
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
	}
}

class MessageSelf extends React.Component{
	render(){
		return (<div className="message">
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