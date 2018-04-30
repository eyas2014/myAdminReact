import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-datepicker';
import './calendar.less';
import './datepicker3.css';



export default class App extends React.Component{
	componentDidMount(){
		$('#calendar').datepicker();
		$('#calendar').children('.datepicker').css('width','100%');
		$('#calendar').children('.datepicker').children('.datepicker-days').children('table').css('width','100%');
	}

	render(){


		return(
		<div className="calendar">
		    <header className='bg-success'>
	                <button type="button" className="btn btn-success btn-sm"><i className="fa fa-calendar"></i>
	                </button> 
	                <button type="button" className="btn btn-success  btn-sm">Calendar</button>
				<div className='float-right tools'>
					<button type="button" className="btn btn-success btn-sm ml-1" datawidget="remove"><i className="fa fa-times"></i></button> 
					<button type="button" className="btn btn-success btn-sm ml-1" datawidget="toggle"><i className="fa fa-minus"></i></button> 
					<button type="button" className="btn btn-success btn-sm ml-1"><i className="fa fa-bars"></i></button>
				</div>
		    </header>
			<main>
				<div id="calendar" className="bg-success text-white col-12"></div>
			</main>
			<footer>
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
			</footer>
		</div>)
	}

}
