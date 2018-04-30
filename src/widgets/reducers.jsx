import { combineReducers } from 'redux';

function recentlyAP(state=[], action){

	var products=[{
			name:  'Samsung TV',
			model: 'Samsung 32" 1080p 60Hz LED Smart HDTV.',
			price:  1800,
			color: 'bg-warning'},
			{
			name:  'Bicycle',
			model: '26" Mongoose Dolomite Mens 7-speed, Navy Blue.',
			price:  700,
			color: 'bg-info'},
			{
			name:  'Xbox One',
			model: 'Xbox One Console Bundle with Halo Master Chief Collection.',
			price:  350,
			color:	'bg-danger'},
			{
			name:  'PlayStation 4',
			model: 'PlayStation 4 500GB Console (PS4)',
			price:  399,
			color: 'bg-success'}
			];
	return {products};

}

function browserUsage(state=[], action){
 var PieData = {
		datasets: [{ data	    : [700, 500, 400, 600, 300, 100],
			     backgroundColor: ['#f56954', '#00a65a',  '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'] }],
		};

	return {data: PieData};

}


function latestOrders(state=[], action){
var orders=[{
	orderId   : "OR9842",
	Item      : "call of duty",
	Status    : "shipped",
	Popularity: [1, 2, 10, -1, -2, 4, -6]
		},{
	orderId   : "OR9842",
	Item      : "Samsung Smart TV",
	Status    : "pending",
	Popularity: [1, 2, 5, -1, -2, 4, -6]
		},{
	orderId   : "OR9842",
	Item      : "iPhone 6 Plus",
	Status    : "delivered",
	Popularity: [1, 2, 5, -1, -2, 4, -6]
		},{
	orderId   : "OR9842",
	Item      : "Samsung Smart TV",
	Status    : "shipped",
	Popularity: [1, -1, -2, 4, -6, 2, 5]
		},{
	orderId   : "OR9842",
	Item      : "Samsung Smart TV",
	Status    : "processing",
	Popularity: [1, 2, -2, 4, -6, 5, -1]
		},{
	orderId   : "OR9842",
	Item      : "iPhone 6 Plus",
	Status    : "shipped",
	Popularity: [1, 2, 5, 4, -6, -1, -2]
		}];

	return {orders};
}


function directChat(state=[], action){
		var messages=[{
			name: 'Alexander Pierce',
			time: new Date(),
			message: "Is this template really for free? That's unbelievable!"},
			{
			name: 'Sarah Bullock',
			time: new Date(),
			message: "You better believe it!"},
			{
			name: 'Alexander Pierce',
			time: new Date(),
			message: "Working with AdminLTE on a great app! Wanna join?"},
			{
			name: 'Sarah Bullock',
			time: new Date(),
			message: "I would love to."}
		];
return {messages}

}

function ProgressPanels(state=[], action){
var data=[{
	name: 'INVENTORY',
	value: '5,200',
	increase: 50,
	icon: 'fas fa-tags',
	color: 'orange'
	},{
	name: 'MENTIONS',
	value: '92,050',
	increase: 20,
	icon: 'far fa-heart',
	color: 'green'
	},{
	name: 'DOWNLOADS',
	value: '114,381',
	increase: 70,
	icon: 'fas fa-cloud-download-alt',
	color: 'red'
	},{
	name: 'DIRECT MESSAGES',
	value: '163,921',
	increase: 40,
	icon: 'far fa-comment',
	color: 'aqua'
	}];
return {data};


}



function visitorsReport(state=[], action){
	var markers=[
						{ latLng: [41.90, 12.45], name: 'Vatican City' },
						{ latLng: [43.73, 7.41], name: 'Monaco' },
						{ latLng: [-0.52, 166.93], name: 'Nauru' },
						{ latLng: [-8.51, 179.21], name: 'Tuvalu' },
						{ latLng: [43.93, 12.46], name: 'San Marino' },
						{ latLng: [47.14, 9.52], name: 'Liechtenstein' },
						{ latLng: [7.11, 171.06], name: 'Marshall Islands' },
						{ latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
						{ latLng: [3.2, 73.22], name: 'Maldives' },
						{ latLng: [35.88, 14.5], name: 'Malta' },
						{ latLng: [12.05, -61.75], name: 'Grenada' },
						{ latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
						{ latLng: [13.16, -59.55], name: 'Barbados' },
						{ latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
						{ latLng: [-4.61, 55.45], name: 'Seychelles' },
						{ latLng: [7.35, 134.46], name: 'Palau' },
						{ latLng: [42.5, 1.51], name: 'Andorra' },
						{ latLng: [14.01, -60.98], name: 'Saint Lucia' },
 						{ latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
						{ latLng: [1.3, 103.8], name: 'Singapore' },
						{ latLng: [1.46, 173.03], name: 'Kiribati' },
						{ latLng: [-21.13, -175.2], name: 'Tonga' },
						{ latLng: [15.3, -61.38], name: 'Dominica' },
						{ latLng: [-20.2, 57.5], name: 'Mauritius' },
						{ latLng: [26.02, 50.55], name: 'Bahrain' },
 						{ latLng: [0.33, 6.73], name: 'Sao Tome and Principe' }
					];
	var graphData=[{name:'VISITS', data: [90,70,90,70,75,80,70]},
		   {name:'REFERRALS', data: [90,50,90,70,61,83,63]},
		   {name:'ORGANIC', data: [90,50,90,70,61,83,63]}];

	return {markers, graphData};


}

function monthlyCapReports(state=[], action){
  var salesChartData = {
    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label               : 'Digital Goods',
        backgroundColor     : 'rgba(60,141,188,0.9)',
        borderColor         : 'rgba(60,141,188,0.8)',
        pointRadius         : 0,
        data                : [28, 48, 40, 19, 86, 27, 90]
      },
      {
        label               : 'Electronics',
        backgroundColor     : 'rgb(210, 214, 222)',
	borderColor	    : 'rgb(210, 214, 222)',
        pointRadius         : 0,
        data                : [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };


	var progressData=[{
				step: 'Add Products To Cart',
				sum: 200,
				completed: 110
				},{
				step: 'Complete Purchase',
				sum: 400,
				completed: 80
				},{
				step: 'Visit Premium Page',
				sum: 800,
				completed: 700
				},{
				step: 'send Inquiries',
				sum: 500,
				completed: 150 
				}];

	return {salesChartData, progressData};

}

function statTiles(state=[], action){

	var statTileData=[{value:'150',
	   name:'New Orders',
	   logo:'fas fa-shopping-bag',
	   color: 'bg-info'},
	   {value:'53%',
	   name:'Bounce Rate',
	   logo: 'fas fa-chart-bar',
	   color: 'bg-success'},
	  {value:'44',
	   name:'User Registrations',
	   logo:'fas fa-users',
	   color: 'bg-warning'},
	  {value:'65',
	   name :'Unique Visitors',
	   logo :'fas fa-chart-pie',
	   color: 'bg-danger'}];

	state=statTileData;

	return state;

}

function sales(state=[], action){


	var revenueChart= {data: [{y: '2011 Q1', item1: 2666, item2: 2666},
				  {y: '2011 Q2', item1: 2778, item2: 2294},
				  {y: '2011 Q3', item1: 4912, item2: 1969},
				  {y: '2011 Q4', item1: 3767, item2: 3597},
				  {y: '2012 Q1', item1: 6810, item2: 1914},
				  {y: '2012 Q2', item1: 5670, item2: 4293},
				  {y: '2012 Q3', item1: 4820, item2: 3795},
				  {y: '2012 Q4', item1: 15073, item2: 5967},
				  {y: '2013 Q1', item1: 10687, item2: 4460},
				  {y: '2013 Q2', item1: 8432, item2: 5713}],
			  ykeys: ['item1', 'item2'],
			 labels: ['Item 1', 'Item 2'],
		     lineColors: ['#a0d0e0', '#3c8dbc']};

	var salesChart={ colors: ["#3c8dbc", "#f56954", "#00a65a"],
			   data: [{label: "Download Sales", value: 12},
				  {label: "In-Store Sales", value: 30},
				  {label: "Mail-Order Sales", value: 20}]
			}



	state={revenueChart, salesChart};

	return state;

}


function salesGraph(state=[], action){
		var data=[{ y: '2011 Q1', item1: 2666 },
			{ y: '2011 Q2', item1: 2778 },
			{ y: '2011 Q3', item1: 4912 },
			{ y: '2011 Q4', item1: 3767 },
			{ y: '2012 Q1', item1: 6810 },
			{ y: '2012 Q2', item1: 5670 },
			{ y: '2012 Q3', item1: 4820 },
			{ y: '2012 Q4', item1: 15073 },
			{ y: '2013 Q1', item1: 10687 },
			{ y: '2013 Q2', item1: 8432 }];

	return {data};

}


function chat(state, action){
				var messages = [
					{
						displayName:"Mike Doe",
						displayPicture: "dist/img/user4-128x128.jpg",
						time: "2:15",
						content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market",
						attachment: {
							groupName: "Attachments",
							fileName: "Theme-thumbnail-image.jpg"
						}
					},
					{
						displayName: "Alexander Pierce",
						displayPicture: "dist/img/user3-128x128.jpg",
						time: "5:15",
						content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market"
						
					},
					{
						displayName: "Susan Doe",
						displayPicture: "dist/img/user2-160x160.jpg",
						time: "5:30",
						content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market"
						
					}
				];

	if(!state) state={data: messages};
	switch (action.type){
		case 'ADD_MESSAGE':{
			state.data=[...state.data, action.message];
		} 
	}
	return state;
}



function visitors(state=[], action){
                                         var worldMap = {
                                                    "US": 398,
                                                    "SA": 400, 
                                                    "CA": 1000, 
                                                    "DE": 500, 
                                                    "FR": 760, 
                                                    "CN": 300, 
                                                    "AU": 700, 
                                                    "BR": 600, 
                                                    "IN": 800,
                                                    "GB": 320, 
                                                    "RU": 3000 
                                                };

			    var sparkLine = [[5, 3, 8, 9, 2],[2, 3, 8, 9, 5],[8, 3, 5, 9, 2]];
 
	return {worldMap, sparkLine};

}



function todoList(state=[], action){

	var data=[{content: "Design a nice theme",
		  time: " 2 mins",
			  color: "badge-danger"
			},
			{content: "Make the theme responsive",
			  time: " 4 hours",
			  color: "badge-warning"
			},
			{content: "Let theme shine like a star",
			  time: " 1 day",
			  color: "badge-success"
			},
			{content: "Let theme shine like a star",
			  time: " three days",
			  color: "badge-info"
			},
			{content: "Check your messages and notifications",
			  time: " 1 week",
			  color: "badge-primary"
			},
			{content: "Let theme shine like a star",
			  time: " 1 month",
			  color: "badge-dark"
			}];

	return {data};

}

const Reducers=combineReducers({
	statTiles, sales, salesGraph, todoList, chat, visitors,
	monthlyCapReports, visitorsReport, ProgressPanels, directChat,
	latestOrders, browserUsage, recentlyAP
});

export default Reducers;