import React from 'react';
import './todo-list.less';

export default class TodoList extends React.Component{
    		render(){

		const itemList=this.props.data

		const todoList=itemList.map((todo, iterator)=>{
			return (<li key={iterator}>
					<div className="btn">
						<span className="">
							<i className="fa fa-ellipsis-v"></i>
							<i className="fa fa-ellipsis-v"></i>
						</span>
						<input type="checkbox" value="" />
						<span className="text">{todo.content}</span>
						<small className={"badge "+todo.color}><i className="fas fa-clock"></i>{todo.time}</small>
					</div>
					<div className="tools float-right">
						<i className="fa fa-edit"></i>
						<i className="fas fa-trash-alt"></i>
					</div>
		                </li>)
		});


 
    			return (
    				<div className="todo-list">
                        <header className="">
				<div className='btn'>
					<i className="fas fa-list-ol"></i>
					<span>To Do List</span>
				</div>
                                <ul className="pagination pagination-sm float-right">
                                    <li className="page-item"><a className="page-link" href="#">«</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">»</a></li>
                                </ul>
                        </header>

                        <main>
                            <ul className="">
				{todoList}
                            </ul>
                        </main>

			<footer className="">
				<button type="button" className="btn btn-sm">
					<i className="fa fa-plus"></i> Add item
				</button>
			</footer>


                    </div>)
	}
}    