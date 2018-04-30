import React from 'react';

export default class MessageItem extends React.Component{

            render(){

                return (
                    <li   className="messages box-border-bottom py-1">
                            <div className="float-left">
                                <img src={this.props.displayPicture} className="small-user-image ml-1" alt="User Image" />
                            </div>
				<div className="info-panel">
					<span className="message-title">
						{this.props.title}
					</span>
					<small className="float-right"><i className="far fa-clock"></i> {this.props.time}</small>

					<p   className="message-content mb-0">{this.props.content}</p>
				</div>
                    </li>
                )
            }
        }