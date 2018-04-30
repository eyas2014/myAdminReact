define(
    [
        'react',
        'jquery',
        'raphael',
        'morris'
    ],
    function(React, $, Raphael, Morris){
                new Morris.Area({
                    element: this.props.id,
                    resize: true,
                    data: this.props.data,
                    xkey: this.props.xkey,
                    ykeys: this.props.ykeys,
                    labels: this.props.labels,
                    lineColors: this.props.lineColors,
                    hideHover: 'auto'
                });

                var style = {
                    position: 'relative',
                    height: '300px'
                };
			console.log('saya');
    			return (
                    <div className="chart tab-pane" id="cc" style={style}>
                        {this.props.children}
                    </div>
    			)
    }   
)     