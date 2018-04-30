import React from 'react';
import TaskItem from './task-item.jsx';

export default class HeaderTasks extends React.Component{

            componentWillMount() {

                var tasks = [{
                    subject: 'Design some buttons',
                    percentage: 20
                }, {
                    subject: 'Create a nice theme',
                    percentage: 40
                }, {
                    subject: 'Some task I need to do',
                    percentage: 60
                }, {
                    subject: 'Make beautiful transitions',
                    percentage: 80
                }];

                this.setState({
                    tasks: tasks
                });
            }

            render(){
                var that = this;
                var progressBarColor;

                var taskList = this.state.tasks.map(function (taskDetails, iterator) {

                    if(taskDetails.percentage < 21){
                        progressBarColor = 'bg-danger'
                    }else if (taskDetails.percentage > 20 && taskDetails.percentage < 41){
                        progressBarColor = 'bg-warning'
                    }else if (taskDetails.percentage > 40 && taskDetails.percentage < 61){
                        progressBarColor = 'bg-success'
                    }else if (taskDetails.percentage > 60){
                        progressBarColor = 'bg-info';
                    }

                    return (
                        <TaskItem 
                            key={iterator}
                            percentage={taskDetails.percentage}
                            content={taskDetails.subject} 
                            theme={progressBarColor} />
                    )
                });

                return (
                    <li className="dropdown tasks-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="far fa-flag"></i>
                            <span className="badge badge-danger">{that.state.tasks.length}</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right p-0">
                            <li className="box-border-bottom pl-2">You have {this.state.tasks.length} tasks</li>
                            <li>
                                <div className="slimScrollDiv">

                                    <ul className="pl-0">
                                        {taskList}
                                    </ul>

                                    <div className="slimScrollBar"></div>
                                    <div className="slimScrollRail"></div>
                                </div>
                            </li>
                            <li className="text-center">
                                <a href="#" className="text-black">View all tasks</a>
                            </li>
                        </ul>
                    </li>
                )
            }
        }