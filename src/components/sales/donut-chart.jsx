import React from 'react';
import Morris from '../../library/morris/morris.js';

export default class DonutChart extends React.Component{

	componentDidMount(){
                var donut = Morris.Donut({
                    element: this.props.id,
                    resize: true,
                    colors: this.props.colors,
                    data: this.props.data,
                    hideHover: 'auto'
                }); 
	} 

	render(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

		return (
                    <div className="chart tab-pane active" id={this.props.id} style={style}>
                        {this.props.children}
                    </div>
    			)
	}
}   
     