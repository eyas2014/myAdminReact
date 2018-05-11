import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component{

	render(){

		var style1={
			overflow: 'hidden',
			borderTop: 'solid 3px #dd3311',
			backgroundColor: '#fff'
		}

		var style2={
			width:'100%',
			height: 'auto',
			borderRadius: '50%'
		}

		var style3={
			margin: "0px"
		}


		return(
		<div style={style1} className="rounded" >
			<div className="clearfix">
			<div className="float-right btn-group">
				<div className="btn px-1"><span className="bg-danger badge text-white font-weight-bold p-2">8 new members</span></div>
				<div className="btn px-1"><i className="fa fa-minus text-muted"></i></div>
				<div className="btn px-1"><i className="fa fa-times text-muted"></i></div>
			</div> 
			<div className="btn"><p  className="mb-0">Latest Members</p></div>
			</div>
			<hr  style={style3} />

			<div className='container-fluid'>
			<div className='row'>
				<div className="col-6 col-sm-3 col-md-2 col-lg-1 text-center">
					<div className="p-3">
						<img style={style2} src='sarah.jpg' />
						<p className='my-0'>Sarah</p>
						<p className='text-muted'>Today</p>
					</div>
				</div>
				<div className="col-6 col-sm-3 col-md-2 col-lg-1 text-center">
					<div className="p-3">
						<img style={style2} src='sarah.jpg' />
						<p className='my-0'>Sarah</p>
						<p className='text-muted'>Today</p>
					</div>
				</div>

				<div className="col-6 col-sm-3 col-md-2 col-lg-1 text-center">
					<div className="p-3">
						<img style={style2} src='sarah.jpg' />
						<p className='my-0'>Sarah</p>
						<p className='text-muted'>Today</p>
					</div>
				</div>

				<div className="col-6 col-sm-3 col-md-2 col-lg-1 text-center">
					<div className="p-3">
						<img style={style2} src='sarah.jpg' />
						<p className='my-0'>Sarah</p>
						<p className='text-muted'>Today</p>
					</div>
				</div>

				<div className="col-6 col-sm-3 col-md-2 col-lg-1 text-center">
					<div className="p-3">
						<img style={style2} src='sarah.jpg' />
						<p className='my-0'>Sarah</p>
						<p className='text-muted'>Today</p>
					</div>
				</div>

				<div className="col-6 col-sm-3 col-md-2 col-lg-1 text-center">
					<div className="p-3">
						<img style={style2} src='sarah.jpg' />
						<p className='my-0'>Sarah</p>
						<p className='text-muted'>Today</p>
					</div>
				</div>

				<div className="col-6 col-sm-3 col-md-2 col-lg-1 text-center">
					<div className="p-3">
						<img style={style2} src='sarah.jpg' />
						<p className='my-0'>Sarah</p>
						<p className='text-muted'>Today</p>
					</div>
				</div>

				<div className="col-6 col-sm-3 col-md-2 col-lg-1 text-center">
					<div className="p-3">
						<img style={style2} src='sarah.jpg' />
						<p className='my-0'>Sarah</p>
						<p className='text-muted'>Today</p>
					</div>
				</div>
				</div>
			</div>
			<hr  style={style3} />
			<div className="p-2 text-info text-center">
				<span className="align-middle">View All Users</span>
			</div>


		</div>)
	}

}




ReactDOM.render(<App />, document.getElementById('demo'));