import React from 'react';

export default class NotificationItem extends React.Component{

            render() {
                return (
                    <li className="box-border-bottom pl-2" key={"header-notification-item"}>
                        <span href="#ss">
                            <i className={this.props.theme}></i> {this.props.content}
                        </span>
                    </li>
                )
            }
        }
