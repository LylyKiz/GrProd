import React, { Component, PropTypes } from 'react';
import products from '../file/data';

class Year extends React.Component {

	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);


	}

	handleChange(event) {
		this.setState({value: event.target.value});
		this.props.updateData(event.target.value);
		//console.log(event.target.value);
	}
	/*state = {
		name: 'Бумеранг вернулся назад'
	};*/


	render() {

		/*function filterBy(data, field, value) {
			return data.filter(item => item[field] === value);
		}

		const notebooks = filterBy(products, 'year', 2016);*/

		//console.log(notebooks);

		const options = [];

		const unique = [...new Set(products.map(item => item.year))];
		//console.log(unique);
		/*dictionary.forEach(entry => options.push(
			<option value="grapefruit">{entry.label}</option>
		));*/

		//this.props.updateData(unique[0]);

		//console.log(unique[0]);
		unique.forEach(entry => options.push(
			 <option value={entry}>{entry}</option>
		 ));


		return (
			/*<label htmlFor={this.props.id}>{this.props.label}
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>
			</label>*/
			/*<label>
				<select value={this.state.value} onChange={() => { this.props.updateData(this.state.name);this.handleChange}}>
					{options}
				</select>
			</label>*/
			<label>
			 <select value={this.state.value} onChange={this.handleChange}>
			 {options}
			 </select>
			 </label>

		);
	}
}

export default Year;
