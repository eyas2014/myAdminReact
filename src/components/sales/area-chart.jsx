import React from 'react';
import Morris from '../../library/morris/morris.js';

export default class AreaChart extends React.Component{
	componentDidMount(){
		var area = new Morris.Area({
                    element: this.props.id,
                    resize: true,
                    data: this.props.data,
                    xkey: this.props.xkey,
                    ykeys: this.props.ykeys,
                    labels: this.props.labels,
                    lineColors: this.props.lineColors,
                    hideHover: 'auto'
		});
	}  

	render(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

		return (
                    <div className="chart tab-pane" id={this.props.id} style={style}>
                        {this.props.children}
                    </div>
    			)
	}

}    