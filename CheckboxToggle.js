import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

require('./widgets.scss');

export default class CheckboxToggle extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      checkboxToggle: this.props.defaultToggle,
    };
  }

  onToggleCheckbox() {
    if (!this.props.changable) return 0;
    if (!confirm('确认？')) return 0;
    this.setState({
      checkboxToggle: !this.state.checkboxToggle,
    });
    this.props.onToggleCheckbox(!this.state.checkboxToggle);
  }

  render() {
    const toggleBarStyle = this.state.checkboxToggle ? { left: '23px', color: '#1caf9a' } : { left: '3px', color: '#aaa' };
    const toggleBackgroundStyle = this.state.checkboxToggle ? { backgroundColor: '#1caf9a' } : { backgroundColor: '#aaa' };
    return (
      <div className="checkbox-toggle" style={toggleBackgroundStyle} onClick={this.onToggleCheckbox.bind(this)}>
        <div className="toggle-bar" style={toggleBarStyle}>{ this.state.checkboxToggle ? '|' : 'O'}</div>
      </div>
    );
  }
}
