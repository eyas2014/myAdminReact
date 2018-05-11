import React from 'react';
import {Link } from 'react-router-dom';

export default class MainNavigation extends React.Component {
	render(){
		  var dataList=[{name:'Dashboard',
				logo:'fa fa-car',
				sub: ['Dashboard1','Dashboard2']
				},
				{name:'Layout Options',
				logo:'far fa-copy',
				sub: ['Top Navigation','Boxed','Fixed','Collapsed Sidebar']
				},
				{name:'Widgets',
				logo:'fa fa-th',
				},
				{name:'Charts',
				logo:'fa fa-chart-pie',
				sub: ['ChartJS','Morris','Flot','Inline charts']
				},
				{name:'UI Elements',
				logo:'fa fa-laptop',
				sub: ['General','Icons','Buttons','Slides','Timeline','Modals']
				},
				{name:'Forms',
				logo:'fa fa-edit',
				sub: ['General Elements','Advanced Elements','Editors']
				},
				{name:'Tables',
				logo:'fa fa-table',
				sub: ['Simple tables','Data tables']
				},
				{name:'Calendar',
				logo:'fa fa-calendar',
				sub: ['Dashbord1','Dashboard2']
				},
				{name:'Mailbox',
				logo:'fas fa-envelope',
				sub: ['Inbox','Composed','Read']
				},
				{name:'Examples',
				logo:'fa fa-folder',
				sub: ['Invoice','Profile','Login','Register','Lockscreen','404 Error','500 Error','Blank Page','Pace Page']
				},
				{name:'Multilevel',
				logo:'fa fa-share',
				sub: ['Level One','Level Two','Level Three']
				},
				{name:'Documentation',
				logo:'fas fa-book',
				sub: ['Dashbord1','Dashboard2']
				}];

	return(<nav className="main-aside expand">
			<div className='profile'>
				<img src='./img/image.jpg' />
				<div className="info">
					<p  className="m-0">Terrence Shao</p>
					<i className="fa fa-circle text-success"></i> <span> offline </span>
				</div>
			</div>
			<div>
				<div className='searchbox'>
					<input type='text' placeholder=' search...'></input>
					<i className='fa fa-search p-1'></i>
				</div>
			</div>
			<p  className="">MAIN NAVIGATION</p>
			<ul>
				{dataList.map(function(item, index){
					return(	<NavigationItem key={index} data={item}>
						</NavigationItem>
					)
				})}
			</ul>
		</nav>)
	}
}

class NavigationItem extends React.Component{
	expand(target){
		var nodeUl=target.parentNode.nextSibling;
		var nodeLi=target.parentNode.parentNode;
		var nodeNav=nodeLi.parentNode.parentNode;
		$(nodeUl).slideToggle(500);
		$(nodeLi).siblings('li').children('ul').slideUp(500);
	}

	activate(target){
		var nodeLi=target.parentNode.parentNode;
		$(nodeLi).addClass('active').siblings(".active").removeClass('active');
	}
	
	render(){
		if(this.props.data.sub){
			this.navigationSub=
				(<ul style={{display: 'none'}}>
					{this.props.data.sub.map(function(item, index){
						return(<li key={index}>
								<Link to={item.toLowerCase().replace(' ', '-')}>
									<i className="far fa-circle"></i>
									<span onClick={e=>this.activate(e.target.parentNode.parentNode)}>{item}</span>
								</Link>
						</li>)
					}.bind(this))}
				</ul>);
		
			return(<li><a>
					<i className={this.props.data.logo}></i>
					<span onClick={e=>this.expand(e.target)}>{this.props.data.name}</span>
					<i className="fas fa-angle-left"></i>
				   </a>
					{this.navigationSub}
				</li>)
		} else {
			return(<li>
				<Link to={this.props.data.name.toLowerCase()}>
					<i className={this.props.data.logo}></i>
					<span  onClick={e=>{this.activate(e.target);this.expand(e.target)}}>{this.props.data.name}</span>
					<i className="fas fa-angle-left"></i>
				</Link>
			</li>)
		}
	}
}









