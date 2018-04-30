import React from 'react';
import MessageItem from './message-item.jsx';

export default class HeaderMessages extends React.Component{
            componentWillMount(){
                var messages = [{
                    title: 'Support Team',
                    displayPicture: 'dist/img/user2-160x160.jpg',
                    content: 'Why not buy a new awesome theme?',
                    time: '5 mins',
                }, {
                    title: 'AdminLTE Design Team',
                    displayPicture: 'dist/img/user3-128x128.jpg',
                    content: 'Why not buy a new awesome theme?',
                    time: '2 hours',
                }, {
                    title: 'Developers',
                    displayPicture: 'dist/img/user4-128x128.jpg',
                    content: 'Why not buy a new awesome theme?',
                    time: 'Today',
                }, {
                    title: 'Sales Department',
                    displayPicture: 'dist/img/user3-128x128.jpg',
                    content: 'Why not buy a new awesome theme?',
                    time: 'Yesterday',
                }, {
                    title: 'Reviewers',
                    displayPicture: 'dist/img/user4-128x128.jpg',
                    content: 'Why not buy a new awesome theme?',
                    time: '2 days',
                }];


                this.setState({
                    messages: messages
                });
            }

            render() {

                var messageList = this.state.messages.map(function (messageDetails, iterator) {
                    return (
                        <MessageItem 
                            key={iterator}
                            title={messageDetails.title}
                            displayPicture={messageDetails.displayPicture}
                            time={messageDetails.time}
                            content={messageDetails.content} />
                    )
                });

		var that=this;

                return (
                    <li className="dropdown messages-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="far fa-envelope"></i>
                            <span className="badge badge-success">{that.state.messages.length}</span>
                        </a>
                        <ul className="dropdown-menu p-0">
                            <li className="box-border-bottom pl-2">You have {this.state.messages.length} messages</li>
                            <li>
                                <div className="slimScrollDiv" >
                                    <ul className="menu p-0" >
                                        {messageList}
                                    </ul>
                                    <div className="slimScrollBar"></div>
                                    <div className="slimScrollRail"></div>
                                </div>
                            </li>
                            <li className="text-center"><a  className="text-black" href="#">See All Messages</a></li>
                        </ul>
                    </li>
                    
                )
            }
        }