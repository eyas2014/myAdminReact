import React from 'react';
import {CSSTransition} from "react-transition-group";


export default class QuickEmail extends React.Component{
	constructor(){
		super();
		this.state={show: true}
	}

	handleClose(){
		this.setState({show: false});
	}
    
    render(){
        var style = {
			width:"100%", 
			height: "125px", 
			fontSize: "14px", 
			lineHeight: "18px", 
			border: "1px solid #dddddd", 
			padding: "10px"
		}

    	return (
    		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
    			<div className="quick-email">
					<header>
						<div className="btn">
							<i className="fa fa-envelope"></i>
							<span className=""> Quick Email</span>
						</div>
                        <div className="float-right tools">
							<button className="btn btn-sm" onClick={this.handleClose.bind(this)}>
								<i className="fa fa-times"></i>
							</button>
        				</div>
        			</header>

					<main>
					<form action="#" method="post">
						<div className="form-group">
							<input type="email" className="form-control" name="emailto" placeholder="Email to:" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" name="subject" placeholder="Subject" />
						</div>
						<div>
							<textarea id="textarea" className="textarea form-control" placeholder="Message"></textarea>
						</div>
						</form>
					</main>

					<footer className="text-right box-border-top">
						<div>
							<button type="button" id="sendEmail" className="btn btn-default btn-sm">Send <i className="fa fa-arrow-circle-right"></i>
							</button>
						</div>
					</footer>
				</div>
			</CSSTransition>
    	)
    }

}    