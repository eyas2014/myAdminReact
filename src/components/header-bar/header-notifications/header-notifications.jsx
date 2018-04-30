import React from 'react';
import NotificationItem from './notification-item.jsx';

export default class HeaderNotifications extends React.Component{

            componentWillMount(){
                var notifications = [{
                    content: '5 new members joined today',
                    theme: 'fa fa-users text-info'
                }, {
                    content: 'Very long description here that may not fit into the page and may cause design problems',
                    theme: 'fas fa-exclamation-triangle text-warning'
                }, {
                    content: '5 new members joined',
                    theme: 'fa fa-users text-danger'
                }, {
                    content: '25 sales made',
                    theme: 'fa fa-shopping-cart text-success'
                }, {
                    content: 'You changed your username',
                    theme: 'far fa-user-circle text-danger'
                }];

                this.setState({
                    notifications: notifications
                });
            }

            render() {
                var that = this;

                var notificationList = this.state.notifications.map(function (notificationDetails, iterator) {
                    return (
                        <NotificationItem
                            key={iterator}
                            theme={notificationDetails.theme}
                            content={notificationDetails.content} />
                    )
                });

                return (
                    <li className="dropdown notifications-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning text-white">{that.state.notifications.length}</span>
                        </a>

                        <ul className="dropdown-menu p-0">
                            <li className="box-border-bottom pl-2">You have {this.state.notifications.length} notifications</li>
                            <li className="">
                                <div className="slimScrollDiv">

                                    <ul className="p-0">
                                        {notificationList}
                                    </ul>
                                    
                                    <div className="slimScrollBar"></div>
                                    <div className="slimScrollRail"></div>
                                </div>
                            </li>
                            <li className="text-center"><a href="#"  className="text-black">View all</a></li>
                        </ul>
                    </li>
                )
            }
        }