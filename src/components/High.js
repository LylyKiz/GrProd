import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import products from '../file/data';
import Year from "./Year";

class High extends Component {
	constructor(props) {
		super(props);
	}
	/*state={
		yearId:null
	};*/
	state = {
		year: 2015
	};


	render() {

		function filterBy(data, field, value) {
			return data.filter(item => item[field] === value);
		}

		const filyear = filterBy(products, 'year', parseInt(this.state.year));
		let result = [];
		for (let link of filyear) {
			/*result[name].push(link.name);
			 result.push(link.feature1);*/
			result.push({ name: link.name, data: [[ link.feature1,link.feature2 ]]})
		}

		const options = {
			chart: {
				type: 'scatter',
				zoomType: 'xy'
			},
			title: {
				text: 'Товар'
			},
			subtitle: {
				text: 'За '+this.state.year+' год'
			},
			xAxis: {
				title: {
					enabled: true,
					text: 'feature1'
				},
				startOnTick: true,
				endOnTick: true,
				showLastLabel: true
			},
			yAxis: {
				title: {
					text: 'feature2'
				}
			},
			legend: {
				layout: 'vertical',
				align: 'left',
				verticalAlign: 'top',
				x: 100,
				y: 70,
				floating: true,
				backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
				borderWidth: 1
			},
			plotOptions: {
				scatter: {
					marker: {
						radius: 5,
						states: {
							hover: {
								enabled: true,
								lineColor: 'rgb(100,100,100)'
							}
						}
					},
					states: {
						hover: {
							marker: {
								enabled: false
							}
						}
					},
					tooltip: {
						headerFormat: '<b>{series.name}</b><br>',
						pointFormat: '{point.x} , {point.y} '
					}
				}
			},
			series: result
		};

		return ([

				<HighchartsReact
					highcharts={Highcharts}
					options={options}
				/>,
				<Year updateData={this.updateData}/>,
				//<p>State: {this.state.name}</p>

]
		)
	}
	updateData = (value) => {
		this.setState({ year: value })
	};

}
 export default High
