import React from 'react';
import 'jquery-slimscroll';
import Conversations from './conversations.jsx';


export default class Chat extends React.Component{
 	componentDidMount(){
		$("#chat-box").slimScroll({height:'250px'});
	}

	render(){
		return (
			<div className="chat">
				<header className="box-border-bottom">
					<div className='btn'>
						<i className="far fa-comments"></i>
						<span className=""> Chat</span>
					</div>
					<div className="btn-group tools float-right" data-toggle="tooltip" title="" data-original-title="Status">
						<button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green"></i></button>
						<button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red"></i></button>
					</div>
				</header>

				<main>
					<Conversations data={this.props.data}></Conversations>
				</main>

				<footer className="box-border-top">
              				<div className="input-group input-group-sm">
						<input className="form-control" placeholder="Type message..." />
						<button type="button" className="input-group-addon"><i className="fa fa-plus"></i></button>
					</div>

				</footer>
			</div>)
		}
	}   
    