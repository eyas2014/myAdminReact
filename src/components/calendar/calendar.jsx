import React from 'react';
import 'bootstrap-datepicker';
import {CSSTransition} from "react-transition-group";
import Progress from './progress.jsx';


export default class App extends React.Component{
	constructor(){
		super();
		this.state={show: true,
					collapse: true,
					tasks:[90,70,50,10]
		}
	}

	componentDidUpdate(){
		$('#calendar').datepicker();
		$('#calendar').children('.datepicker').css('width','100%');
		$('#calendar').children('.datepicker').children('.datepicker-days').children('table').css('width','100%');
	}

	componentDidMount(){
		this.componentDidUpdate();
	}

	handleClose(){
		this.setState({show: false});
	}

	handleToggle(){
		this.setState(state=>({collapse:!state.collapse}));
	}

	render(){


		return(
		<CSSTransition in={this.state.show} classNames="componentShutdown" timeout={500} unmountOnExit>
 		<div className="calendar" ref="calendar">
		    <header className='bg-success'>
	                <button type="button" className="btn btn-success btn-sm"><i className="fa fa-calendar"></i>
	                </button> 
	                <button type="button" className="btn btn-success  btn-sm">Calendar</button>
				<div className='float-right tools'>
					<button type="button" className="btn btn-success btn-sm ml-1" onClick={this.handleClose.bind(this)}><i className="fa fa-times"></i></button> 
					<button type="button" className="btn btn-success btn-sm ml-1" onClick={this.handleToggle.bind(this)}><i className="fa fa-minus"></i></button> 
					<button type="button" className="btn btn-success btn-sm ml-1"><i className="fa fa-bars"></i></button>
				</div>
		    </header>
		    <CSSTransition in={this.state.collapse} classNames="componentCollapse" timeout={500} unmountOnExit>
		    <div className="wrapper">
			<main>
				<div id="calendar" className="bg-success text-white col-12"></div>
			</main>
			<footer>
				{this.state.tasks.map((item, index)=>{
					return <Progress key={index} progress={item} title={`task#${index+1}`}></Progress>
				})}
			</footer>
			</div>
			</CSSTransition>
		</div>
		</CSSTransition>)
	}

}


/*


			<div>
		    <div className='col-6 float-left mt-3'>
		        <div><span>task#1</span><span className='float-right'>90%</span></div>
			<div className="progress" style={{height: '10px'}}>
  				<div className="bg-success progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		    </div>
		    <div className='col-6 float-left mt-3'>
		        <div><span>task#1</span><span className='float-right'>70%</span></div>
			<div className="progress" style={{height: '10px'}}>
  				<div className="bg-success progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		    </div>
		    <div className='col-6 float-left mt-3'>
		        <div><span>task#1</span><span className='float-right'>50%</span></div>
			<div className="progress" style={{height: '10px'}}>
  				<div className="bg-success progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		    </div>
		    <div className='col-6 float-left mt-3'>
		        <div><span>task#1</span><span className='float-right'>10%</span></div>
			<div className="progress" style={{height: '10px'}}>
  				<div className="bg-success progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		    </div>
		    </div>


*/