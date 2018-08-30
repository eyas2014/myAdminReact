import React from 'react';
import { connect } from 'react-redux';
import StatTiles from '../components/stat-tiles/stat-tiles.jsx';
import Sales from '../components/sales/sales.jsx';
import AreaChart from '../components/sales/area-chart.jsx';
import DonutChart from '../components/sales/donut-chart.jsx';
import TodoList from '../components/todo-list/todo-list.jsx';
import QuickEmail from '../components/quick-email/quick-email.jsx';
import Visitors from '../components/visitors/visitors.jsx';
import Calendar from '../components/calendar/calendar.jsx';
import Chat from '../components/chat/chat.jsx';
import SalesGraph from '../components/sales-graph/sales-graph.jsx';

class Dashboard1 extends React.Component{
	componentDidMount(){
		this.dispatch({type: 'ADD_MESSAGE', message: {
						displayName: "Alexander Pierce",
						displayPicture: "img/user3-128x128.jpg",
						time: "5:15",
						content: "new message"
					}}); 
	}

	componentWillUpdate(){
	}

	render(){
		const {statTileData, dispatch, salesData, salesGraphData,
		       todoListData, chatData, visitorsData}=this.props;
		this.dispatch=dispatch;
		return(<div className='p-3'>
				<div className="content-header px-0">
					<span>Dashboard</span>
					<span>Control Panel</span>
					<div className="float-right">
						<span className="fas fa-tachometer-alt"></span>
						<span>home</span>
						<span> > Dashboard</span>
					</div>
				</div>
				<StatTiles data={statTileData}></StatTiles>
				<div className='row p-0'>
					<div className="col-12 col-md-7 px-0">
						<Sales>
							<AreaChart 
								id="revenue-chart"
								data = {salesData.revenueChart.data}
								xkey= 'y'
								ykeys= {salesData.revenueChart.ykeys}
								labels= {salesData.revenueChart.labels}
								lineColors= {salesData.revenueChart.lineColors} />
							<DonutChart 
								id="sales-chart"
								colors= {salesData.salesChart.colors}
								data= {salesData.salesChart.data} />
						</Sales>
						<Chat data={chatData.data}></Chat>
						<TodoList data={todoListData.data}></TodoList>
						<QuickEmail></QuickEmail>
					</div>
					<div className="col-12 col-md-5 px-0">
						<Visitors data={visitorsData}></Visitors>
						<SalesGraph data={salesGraphData.data}></SalesGraph>
						<Calendar></Calendar>
					</div>
				</div>
			</div>)
	}
}


function select(state){
	return {
		statTileData: state.statTiles,
		salesData: state.sales,
		salesGraphData: state.salesGraph,
		todoListData: state.todoList,
		chatData: state.chat,
		visitorsData: state.visitors
	}
}

export default connect(select)(Dashboard1);