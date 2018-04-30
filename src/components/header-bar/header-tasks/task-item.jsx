import React from 'react';

export default class TaskItem extends React.Component{
            render(){
                var stylePercentage = {
                    width: this.props.percentage + '%'
                };
                return (
                    <li className="box-border-bottom px-2 pb-2">
                                {this.props.content}
                                <span className="float-right text-black">{this.props.percentage+'%'}</span>

                            <div className="progress xs mr-5 ">
                                <div className={"progress-bar "+ this.props.theme} style={stylePercentage}>
                                    <span className="sr-only">{this.props.percentage + '% Complete'} </span>
                                </div>
                            </div>
                    </li>
                )
                
            }
        }
