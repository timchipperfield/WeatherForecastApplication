import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          className='form-control'
          placeholder='get a five-day forecast for your favourite cities'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button className='btn btn-secondary'>Search</button>
        </span>
      </form>
    )
  }

}

function mapDispachToProps(dispach) {
  return bindActionCreators({ fetchWeather }, dispach);
}

export default connect(null, mapDispachToProps)(SearchBar);
