import React from 'react';
import ReactDOM from 'react-dom';
import 'jqvmap';




class App extends React.Component{
	componentDidMount(){
		console.log($('#world-map'));
		jQuery('#world-map').vectorMap({
    map: 'world_en',
    backgroundColor: '#a5bfdd',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: true,
    hoverColor: '#c9dfaf',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: null,
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

        alert(message);
    }
}); 
	}

	render(){


		return(
		<div> <div id="world-map"></div>
		</div>)
	}

}


ReactDOM.render(<App />, document.getElementById('demo'));