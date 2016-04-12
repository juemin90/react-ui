import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
require('./widgets.scss');

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }
  onClickRadioOption(e) {
    const option = e.currentTarget.innerHTML;
    this.setState({
      selectedOption: option,
    });
    this.props.onClickRadioOption(option);
  }
  render() {
    const { options } = this.props;
    return (
      <div className="radio">
      {
        options.map((option) => {
          const style = option === this.state.selectedOption ? { backgroundColor: 'rgb(28, 175, 154)', color: '#ffffff' } : {};
          return (
            <div className="options" style={style} onClick={this.onClickRadioOption.bind(this)}>{option}</div>
          );
        })
      }
      </div>
    );
  }
}
