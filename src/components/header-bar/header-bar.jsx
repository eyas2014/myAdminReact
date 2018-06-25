import React from 'react';
import $ from 'jquery';
import HeaderMessages from './header-messages/header-messages.jsx';
import HeaderNotifications from './header-notifications/header-notifications.jsx';
import HeaderTasks from './header-tasks/header-tasks.jsx';

export default class HeaderBar extends React.Component{
            render() {
                var that = this;
                return (
            			<header className="main-header bg-info expand">
            				<div className="logo float-left">
            					<a href="index2.html" className="">
            						<span className="logo-mini"><b>A</b>LT</span>
            						<span className="logo-lg"><b>Admin</b>LTE</span>
            					</a>
            				</div>
                            <nav>
            					<div className="collapse-toggler">
            						<span className="fas fa-bars"></span>
            						<span className="sr-only">Toggle navigation</span>
            					</div>
                                <div className="navbar-custom-menu float-right">
                                    <ul className="navbar p-0">
                                        <HeaderMessages />
                                        <HeaderNotifications />
                                        <HeaderTasks />
                                        <li className="dropdown profile">
                                            <span href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <img src="dist/img/user2-160x160.jpg" className="small-user-image mr-2" alt="User Image" />
                                                <span className="hidden-xs">Alexander Pierce</span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-right p-0">
                                                <li className="user-header text-center bg-info p-2">
                                                    <img src="dist/img/user2-160x160.jpg" className="medium-user-image m-2" alt="User Image" />
                                                    <p className="mb-0">
                                                        Alexander Pierce - Web Developer                                                    
                                                    </p>
                                                <small>Member since Nov. 2012</small>
                                                </li>
                                                <li className="user-body text-black row m-2">
                                                    <div className="col-4 text-center">
                                                        <a href="#" className="text-black">Followers</a>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <a href="#" className="text-black">Sales</a>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <a href="#" className="text-black">Friends</a>
                                                    </div>
                                                </li>
                                                <li className="row box-border-top py-2 mx-0">
                                                    <div className="col-6 text-center">
                                                        <a href="#" className="btn btn-outline-secondary text-black">Profile</a>
                                                    </div>
                                                    <div className="col-6 text-center">
                                                        <a href="#" className="btn btn-outline-secondary text-black">Sign out</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span href="#" data-toggle="control-sidebar"><i className="fas fa-cogs"></i></span>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                )
            }
        }


