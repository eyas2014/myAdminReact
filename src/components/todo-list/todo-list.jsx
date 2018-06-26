import React from 'react';
import Todo from './todo.jsx';

export default class TodoList extends React.Component{
    render(){
    	const itemList=this.props.data
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
                    <ul>
                  		{itemList.map((item, index)=><Todo key={index} todo={item}></Todo>)}
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
