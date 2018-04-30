import React from 'react';
import { connect } from 'react-redux';
import InfoPanel from '../components/info-panel/info-panel.jsx';
import MonthlyCapReports from '../components/monthly-capital-reports/monthly-capital-reports.jsx';
import VisitorsReport from '../components/visitors-report/visitors-report.jsx';
import DirectChat from '../components/direct-chat/direct-chat.jsx';
import LatestOrders from '../components/latest-orders/latest-orders.jsx';
import ProgressPanels from '../components/progress-panels/progress-panels.jsx';
import BrowserUsage from '../components/browser-usage/browser-usage.jsx';
import RecentlyAP from '../components/recently-added-products/recently-added-products.jsx';
import BoxWidgets from '../widgets/box-widgets.jsx';

class Dashboard2 extends React.Component{
	componentDidMount(){
		BoxWidgets('.browser-usage,.direct-chat,.latest-orders,.monthly-capital-reports,.recently-added-products,.visitors-report');
	}

	render(){
		const {monthlyCapReportsData, visitorsReportData, progressPanelsData, 
		       directChatData, latestOrdersData, browserUsageData, recentlyAPData}=this.props;
		console.log(recentlyAPData);
		return(<div className='p-3'>
						<div className="content-header">
							<span>Dashboard</span>
							<span>Version 2.0</span>
							<div className="float-right">
								<span className="fas fa-tachometer-alt"></span>
								<span>home</span>
								<span> > Dashboard</span>
							</div>
						</div>
						<InfoPanel></InfoPanel>
						<MonthlyCapReports data={monthlyCapReportsData}></MonthlyCapReports>
						<div className="row">
							<div className="col-12 col-md-8">
								<VisitorsReport data={visitorsReportData}></VisitorsReport>
								<DirectChat data={directChatData.messages}></DirectChat>
								<LatestOrders data={latestOrdersData.orders}></LatestOrders>
							</div>
							<div className="col-12 col-md-4">
								<ProgressPanels data={progressPanelsData.data}></ProgressPanels>
								<BrowserUsage data={browserUsageData}></BrowserUsage>
								<RecentlyAP products={recentlyAPData.products}></RecentlyAP>
							</div>
						</div>
					</div>)
	}
}


function select(state){
	return {
		monthlyCapReportsData: state.monthlyCapReports,
		   visitorsReportData: state.visitorsReport,
		   progressPanelsData: state.ProgressPanels,
		       directChatData: state.directChat,
		     latestOrdersData: state.latestOrders,
		     browserUsageData: state.browserUsage,
		       recentlyAPData: state.recentlyAP
	}
}

export default connect(select)(Dashboard2);
