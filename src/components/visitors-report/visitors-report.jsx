import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/sparkline/jquery.sparkline.js';
import '../../../node_modules/jqvmap/dist/jqvmap.js';


export default class VisitorsReport extends React.Component{
	componentDidMount(){
		$('#world-map').vectorMap({
			map              : 'world_mill_en',
			normalizeFunction: 'polynomial',
			hoverOpacity     : 0.7,
			hoverColor       : false,
			backgroundColor  : 'transparent',
			regionStyle      : {
				initial      : {
					fill            : 'rgba(210, 214, 222, 1)',
					'fill-opacity'  : 1,
					stroke          : 'none',
					'stroke-width'  : 0,
					'stroke-opacity': 1
				},
				hover        : {
					'fill-opacity': 0.7,
 					cursor        : 'pointer'
				},
				selected     : {
					fill: 'yellow'
				},
				selectedHover: {}
			},
			markerStyle      : {
				initial: {
					fill  : '#00a65a',
					stroke: '#111'
				}
			},
			markers          : this.props.data.markers
		});

		$('.inlineSparkLine').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type    : 'bar',
      height  : $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

	}

	render(){
		return(
		<div className="visitors-report box-shadow">
			<header className="box-border-bottom" >
				<div className="float-right btn-group">
					<div className="btn" datawidget="remove"><i className="fa fa-times text-muted"></i></div>
					<div className="btn" datawidget="toggle"><i className="fa fa-minus text-muted"></i></div>
				</div> 
				<div className="btn"><p  className="mb-0 text-black">Visitors Report</p></div>
			</header>
			<main className="row">
				<div className="col-12 col-sm-9" id="world-map"></div>
				<div className="col-12 col-sm-3 bg-success">
					<div className="p-2 mt-3 text-center">
						<div className="inlineSparkLine pad" data-color="#fff">{this.props.data.graphData[0].data.toString()}</div>
						<p className="font-weight-bold text-white m-0">8390</p>
						<p className="text-white m-0">{this.props.data.graphData[0].name}</p>
					</div>
					<div className="p-2 text-center">
						<div className="inlineSparkLine pad" data-color="#fff">{this.props.data.graphData[1].data.toString()}</div>
						<p className="font-weight-bold text-white m-0">70%</p>
						<p className="text-white m-0">{this.props.data.graphData[1].name}</p>
					</div>
					<div className="p-2 text-center">
						<div className="inlineSparkLine pad" data-color="#fff">{this.props.data.graphData[2].data.toString()}</div>
						<p className="font-weight-bold text-white m-0">30%</p>
						<p className="text-white m-0">{this.props.data.graphData[2].name}</p>
					</div>
				</div>
			</main>
		</div>)
	}

}