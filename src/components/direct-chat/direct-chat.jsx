import React from 'react';
import {CSSTransition} from "react-transition-group";
import Message from "./message.jsx";

export default class DirectChat extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true
		}
	}
	
	handleToggle(){
		this.setState(state=>({collapse:!state.collapse}));
	}

	handleClose(){
		this.setState({show: false})
	}


	render(){
		var message=this.props.data;

		return(
		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
			<div className="direct-chat box-shadow" ref="directChat">
				<header className='box-border-bottom'>
					<div className="btn"><span>Direct Chat</span></div>
					<div className="float-right btn-group">
						<div className="btn"><span className="bg-warning badge badge-pill text-white font-weight-bold">3</span></div>
						<div className="btn" onClick={this.handleToggle.bind(this)}><i className="fa fa-minus text-muted"></i></div>
						<div className="btn"><i className="fas fa-comments text-muted"></i></div>
						<div className="btn" onClick={this.handleClose.bind(this)}><i className="fa fa-times text-muted"></i></div>
					</div> 
				</header>
				
				<CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
					<div className="wrapper">
						<main className="messages box-border-bottom">
							{message.map(function(item, index){
										return <Message item={item} key={index}></Message>
								})
							}
						</main>
						<footer className="">
							<div className="input-group p-3">
								<input type="text" className="form-control" placeholder="tpye message..."/>
								<span className="input-group-addon bg-warning text-white" id="inputGroup-sizing-default">Send</span>
							</div>
						</footer>
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>)
	}

}
