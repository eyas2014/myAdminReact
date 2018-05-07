import React from 'react';

export default class StatTiles extends React.Component{
	render(){
		return(<div className="row stat-tiles">
				{this.props.data.map(function(item, index){
						return(<div key={index} className='col-12 col-sm-6 col-lg-3'>
							<div className={item.color+' stat-tile'}>
							<main>
								<p>{item.value}</p>
								<span>{item.name}</span>
							</main>
							<aside><i className={item.logo}></i></aside>
							<footer>More Info<i className='fas fa-arrow-circle-right'></i></footer>
						</div>
						</div>)

				})}
			</div>)
	}
}